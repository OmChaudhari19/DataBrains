import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const getRandom = (data) => {
    const globalData = [];
    for (let i = 0; i < 15; i++) {
      const ind = Math.floor(Math.random() * 4000 - 0);
      globalData.push(data[ind]);
    }
    setData(globalData);
  };
  useEffect(() => {
    const getData = async () => {
      const reqMethod = {
        method: "GET",
      };
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        reqMethod
      );
      const data = await resp.json();
      getRandom(data);
      setLoading(false);
    };
    getData();
  }, []);
  console.log(data);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mb-4">
          <div className="header center text-3xl uppercase bolder mt-10 flex justify-center text-gray-500 mb-3">
            Random-API Fetcher
          </div>
          <p className=" header text-xl text-bolder text-gray-500 flex justify-center">This site loads 15 random posts from JSON-Placeholder API everytime the website reloads.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {data.length != 0 &&
              data.map(({ id, url, title ,thumbnailUrl }) => {
                return (
                  <div class="group cursor-pointer relative border border-gray-800 rounded-lg mt-3 ">
                    <img
                      src={url}
                      alt={id}
                      class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105 border border-black "
                    />

                    <div class=" w-full h-10 bg-gray-700 text-white px-4 py-2 rounded-lg bg-gray-200 mx-auto flex justify-center overflow-hidden">
                      <p>{title}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

import AddressDetail from "./AddressDetail";
import PersonalDetails from "./PersonalDetails";
import PaymentDetail from "./PaymentDetail";
import { useState } from "react";
const FormData = () => {
  const [page, setPage] = useState(1);
  const Headings = ["Personal Details", "Address Details", "Payment Details"];
  const [Final, setFinal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    BDate: "",
    Gender: "",
    Street: "",
    City: "",
    State: "",
    zipcode: "",
    cardNo: "",
    cardHolderNo: "",
    expiryDate: "",
    CVV: "",
  });

  const CurrentPage = () => {
    if (page === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <AddressDetail formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <PaymentDetail formData={formData} setFormData={setFormData} />;
    }
  };

  const handleNext = () => {
    if (page === 1 && formData.firstName === "") alert("Enter your Name");
    else if (page === 1 && formData.Email === "") alert("Enter your Email");
    else if (page === 2 && formData.State === "") alert("Enter your State");
    else if (page === 2 && formData.zipcode === "") alert("Enter your ZipCode");
    else setPage((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (page === 3 && formData.cardNo === "") alert("Enter Card No.");
    else if (page === 3 && formData.CVV === "") alert("Enter CVV No.");
    else setFinal(true);
  };

  return (
    <div className="container mx-auto px-4 h-32">
      <div className="bar md:w-1/2 mx-auto mt-10 mb-10">
        <div
          style={{
            width: page === 1 ? "33.3%" : page === 2 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      {!Final ? (
        <div className="form-data md:w-1/2 relative mx-auto mt-2 shadow-xl rounded-2xl pb-6 bg-white">
          <div className="header mb-4  uppercase text-2xl flex justify-center py-4 align-center">
            <h1>{Headings[page - 1]}</h1>
          </div>
          <div className="main flex justify-around">{CurrentPage()}</div>
          <div className="flex justify-center align-center ">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mx-10 transition duration-500 ease-in-out "
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            {page < 3 ? (
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mx-10 transition duration-500 ease-in-out"
                disabled={page === Headings.length}
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mx-10 transition duration-500 ease-in-out"
                onClick={handleSubmit}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="form-data md:w-2/3 pb-3 mx-auto mt-2 shadow-xl rounded-2xl pb-6 bg-white">
            <div className="text-4xl text-bold flex justify-center py-7 mb-6  shadow-xl rounded-2xl bg-gray-300">
              Review Details
            </div>
            <div className="details ">
              <div className="personal md:w-5/6 py-6 my-7 mx-auto mt-2 shadow-xl rounded-2xl pb-6 bg-gray-300">
                <p className="text-3xl text-bold uppercase pt-4 pl-3">
                  Personal Details
                </p>
                <div className="text-xl pl-6 mt-4 ">
                  Name : {formData.firstName} {formData.lastName}
                </div>
                <div className="text-xl pl-6 mt-4 ">
                  Email : {formData.Email}
                </div>
                <div className="text-xl pl-6 mt-4 ">
                  Date of Birth : {formData.BDate}
                </div>
                <div className="text-xl pl-6 mt-4 ">
                  Gender : {formData.Gender}
                </div>
              </div>

              <div className="address md:w-5/6 py-6 my-7 mx-auto mt-2 shadow-xl rounded-2xl pb-6 bg-gray-200">
                <p className="text-3xl text-bold uppercase pt-4 pl-3">
                  Address Details
                </p>
                <div className="text-xl pl-6 mt-4 ">City : {formData.City}</div>
                <div className="text-xl pl-6 mt-4 ">
                  State : {formData.State}
                </div>
                <div className="text-xl pl-6 mt-4 ">
                  ZipCode : {formData.zipcode}
                </div>
              </div>
              <div className="payment md:w-5/6 py-6 my-7 mx-auto mt-2 shadow-xl rounded-2xl pb-6 bg-gray-100">
                <p className="text-3xl text-bold uppercase pt-4 pl-3">
                  Card Details
                </p>
                <div className="text-xl pl-6 mt-4 ">
                  Card No. : {formData.cardNo}
                </div>
                <div className="text-xl pl-6 mt-4 ">
                  Card Holder : {formData.cardHolderNo}
                </div>
                <div className="text-xl pl-6 mt-4 ">
                  Expiry : {formData.expiryDate}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default FormData;

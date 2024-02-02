const PersonalDetails = ({ formData, setFormData }) => {
  const setName = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };
  const setLastName = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };
  const setEmail = (e) => {
    setFormData({ ...formData, Email: e.target.value });
  };
  const setDate = (e) => {
    setFormData({ ...formData, BDate: e.target.value });
    // console.log(e.target.value);
  };
  const setGender = (e) => {
    setFormData({ ...formData, Gender: e.target.value });
    // console.log(e.target.value);
  };
  return (
    <div>
      <form className="w-full px-3">
        <div className="flex flex-wrap mx-5 mb-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="ABC"
              value={formData.firstName}
              onChange={setName}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="XYZ"
              value={formData.lastName}
              onChange={setLastName}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none emaill block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="abc@gmail.com"
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
              value={formData.Email}
              onChange={setEmail}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full px-3 pt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dates"
            >
              Date of Birth
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="dates"
              type="date"
              value={formData.BDate}
              onChange={setDate}
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
          <div className="inline-block relative w-64 px-3 pt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              value={formData.Gender}
              onChange={setGender}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;

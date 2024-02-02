import { useState } from "react";

const AddressDetail = ({ formData, setFormData }) => {
  return (
    <div>
      <form className="w-full px-3">
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="street"
            >
              Street :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="street"
              name="street"
              value={formData.Street}
              onChange={(e) =>
                setFormData({ ...formData, Street: e.target.value })
              }
              required
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="city"
              name="city"
              value={formData.City}
              onChange={(e) =>
                setFormData({ ...formData, City: e.target.value })
              }
              required
            />
            <p className="text-red-500 text-xs italic mb-3"></p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="state"
            >
              State :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="state"
              name="state"
              value={formData.State}
              onChange={(e) =>
                setFormData({ ...formData, State: e.target.value })
              }
              required
            />

            <p className="text-red-500 text-xs italic mb-3">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="zipcode"
            >
              Zipcode :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              id="zipCode"
              name="zipCode"
              value={formData.zipcode}
              onChange={(e) =>
                setFormData({ ...formData, zipcode: e.target.value })
              }
              required
            />
            <p className="text-red-500 text-xs italic mb-3">
              Please fill out this field.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddressDetail;

import { useState } from "react";

const PaymentDetail = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "number":
        setFormData({ ...formData, cardNo: value });
        break;
      case "name":
        setFormData({ ...formData, cardHolderNo: value });
        break;
      case "expiry":
        setFormData({ ...formData, expiryDate: value });
        break;
      case "cvc":
        setFormData({ ...formData, CVV: value });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form className="w-full px-3">
        <div className="flex flex-wrap mx-3 mb-15">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="number"
            >
              Card Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              id="number"
              name="number"
              value={formData.cardNo}
              onChange={handleInputChange}
              placeholder="123456789"
              maxLength="16"
              required
            />
            <p className="text-red-500 text-xs italic pb-3">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Card-Holder Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="name"
              name="name"
              value={formData.cardHolderNo}
              onChange={handleInputChange}
              required
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="expiry"
            >
              Expiry Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="tel"
              id="expiry"
              name="expiry"
              value={formData.expiryDate}
              onChange={handleInputChange}
              maxLength="4"
              required
            />
            <p className="text-red-500 text-xs italic pb-3"> </p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="cvc"
            >
              CVV no.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              id="cvc"
              name="cvc"
              value={formData.CVV}
              onChange={handleInputChange}
              maxLength="3"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};
export default PaymentDetail;

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const SuccessPayment = ({ onClose }) => {
  return (
    <div className="bg-white w-full max-w-sm sm:max-w-md rounded-3xl p-6 sm:p-8 text-center shadow-xl">
      <div className="flex justify-center mb-5">
        <div className="relative w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
          <FiCheckCircle size={36} className="text-white" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-black mb-2 mt-10">Successful!</h2>
      <p className="text-gray-500 text-sm mb-6">
        You have successfully your <br />
        Confirm Payment send!
      </p>
   
      <button
        onClick={onClose}
        className="bg-black text-white font-semibold px-6 py-3 rounded-full w-full mt-10"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default SuccessPayment;

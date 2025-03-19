import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-green-500 mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Successful!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-4 max-w-55">
          You have successfully registered in our app and can now start
          shopping.
        </p>

        {/* Start Shopping Button */}
        <button onClick={() => navigate("/home")} className="mt-60 w-full sm:w-auto bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;

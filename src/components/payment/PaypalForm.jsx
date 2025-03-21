// src/components/payment/PaypalForm.jsx
import React from "react";
import Paypal from "../../../public/assets/SVG/paypal.svg";

const PaypalForm = ({ values, onChange }) => {
  return (
    <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
      {/* PayPal Form */}
      <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex justify-center mb-6">
          <img src={Paypal} alt="PayPal" className="h-14 object-contain" />
        </div>

        <div className="space-y-5">
          <p className="text-center text-gray-600 text-sm mb-4">
            Log in to your PayPal account to complete this purchase securely
          </p>

          <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full outline-none text-gray-700"
              value={values.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700"
              value={values.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
          </div>

          <div className="pt-3">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Log In
            </button>
          </div>

          <div className="text-center">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Having trouble logging in?
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-500 text-sm">or</div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div>
            <button className="w-full border border-gray-300 bg-gray-50 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaypalForm;

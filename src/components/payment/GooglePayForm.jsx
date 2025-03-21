import React from "react";
import Gpay from "../../../public/assets/SVG/Gpay.svg";

const GooglePayForm = ({ values }) => {
  return (
    <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
      {/* Google Pay Form */}
      <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex justify-center mb-8">
          <img src={Gpay} alt="Google Pay" className="h-12 object-contain" />
        </div>

        <div className="space-y-5">
          <p className="text-center text-gray-600 text-sm mb-4">
            Pay quickly and securely with Google Pay
          </p>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="overflow-hidden">
                <p className="font-medium truncate">{values.email}</p>
                <p className="text-sm text-gray-500">{values.phone}</p>
              </div>
            </div>

            <div className="mb-2 text-sm font-medium">Connected Accounts:</div>

            <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 mb-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-6 h-6 min-w-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  V
                </div>
                <span className="text-sm truncate">Visa •••• 5025</span>
              </div>
              <div className="h-4 w-4 min-w-4 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-6 h-6 min-w-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  M
                </div>
                <span className="text-sm truncate">MasterCard •••• 2345</span>
              </div>
              <div className="h-4 w-4 min-w-4 rounded-full border border-gray-300"></div>
            </div>
          </div>

          <div className="flex items-center cursor-pointer text-blue-600 hover:text-blue-700">
            <svg
              className="w-5 h-5 mr-2 min-w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Add payment method</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GooglePayForm;

// src/components/payment/VisaCardForm.jsx
import React from "react";

const VisaCardForm = ({ values, onChange }) => {
  return (
    <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
      {/* Visa Card Display */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
        <div className="absolute inset-0">
          <div className="flex h-full">
            <div className="w-1/2 bg-blue-900"></div>
            <div className="w-1/2 bg-pink-300"></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="text-white font-bold text-xl">VISA</div>
            <div className="h-8 w-8 bg-gray-600 rotate-45"></div>
          </div>

          <div className="text-gray-400 text-xs mb-1">CARD NUMBER</div>
          <div className="text-white text-lg font-medium tracking-wider mb-4 overflow-x-auto whitespace-nowrap">
            {values.number}
          </div>

          <div className="flex justify-between items-end">
            <div className="overflow-hidden">
              <div className="text-gray-400 text-xs">CARD HOLDER NAME</div>
              <div className="text-white truncate max-w-xs">Ankit Sinha</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-right">
                <div className="text-gray-400 text-xs">VALID THRU</div>
                <div className="text-white">{values.expDate}</div>
              </div>
              <div className="w-8 h-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-gray-300"
                  stroke="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Card Details Form */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Card Details</h2>

        <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
          <input
            type="text"
            placeholder="Card number"
            className="w-full outline-none text-gray-700"
            value={values.number}
            onChange={(e) => onChange("number", e.target.value)}
          />
        </div>

        <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
          <input
            type="text"
            placeholder="Exp date"
            className="w-full outline-none text-gray-700"
            value={values.expDate}
            onChange={(e) => onChange("expDate", e.target.value)}
          />
        </div>

        <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
          <input
            type="text"
            placeholder="CVV"
            className="w-full outline-none text-gray-700"
            value={values.cvv}
            onChange={(e) => onChange("cvv", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default VisaCardForm;

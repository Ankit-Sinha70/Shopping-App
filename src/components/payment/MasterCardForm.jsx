import React from "react";

const MasterCardForm = ({ values, onChange }) => {
  return (
    <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
      <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
        <div className="absolute inset-0">
          <div className="flex h-full">
            <div className="w-1/2 bg-red-500"></div>
            <div className="w-1/2 bg-yellow-500"></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gray-800 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="text-white font-bold text-xl">MASTERCARD</div>
            <div className="flex">
              <div className="h-8 w-8 bg-red-500 rounded-full opacity-70 -mr-3"></div>
              <div className="h-8 w-8 bg-yellow-500 rounded-full opacity-70"></div>
            </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* Mastercard Details Form */}
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

export default MasterCardForm;

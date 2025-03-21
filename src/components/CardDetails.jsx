import React from "react";

const CardDetails = ({
  cardType,
  cardNumber,
  expDate,
  cvv,
  cardHolder,
  setCardNumber,
  setExpDate,
  setCvv,
}) => {
  return (
    <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
      {/* Card Display */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
        {/* Card Background */}
        <div className="absolute inset-0">
          <div className="flex h-full">
            <div
              className={`w-1/2 ${
                cardType === "Visa" ? "bg-blue-900" : "bg-red-500"
              }`}
            ></div>
            <div
              className={`w-1/2 ${
                cardType === "Visa" ? "bg-pink-300" : "bg-yellow-500"
              }`}
            ></div>
          </div>
        </div>

        {/* Card Overlay */}
        <div className="absolute inset-0 bg-gray-900 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="text-white font-bold text-xl">
              {cardType.toUpperCase()}
            </div>
            <div className="h-8 w-8 bg-gray-600 rotate-45"></div>
          </div>

          {/* Card Number */}
          <div className="text-gray-400 text-xs mb-1">CARD NUMBER</div>
          <div className="text-white text-lg font-medium tracking-wider mb-4 overflow-x-auto whitespace-nowrap">
            {cardNumber}
          </div>

          {/* Card Holder & Expiry */}
          <div className="flex justify-between items-end">
            <div>
              <div className="text-gray-400 text-xs">CARD HOLDER NAME</div>
              <div className="text-white">{cardHolder}</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-xs">VALID THRU</div>
              <div className="text-white">{expDate}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Details Form */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Card Details</h2>

        <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
          <input
            type="text"
            placeholder="Card number"
            className="w-full outline-none text-gray-700"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
          <input
            type="text"
            placeholder="Exp date"
            className="w-full outline-none text-gray-700"
            value={expDate}
            onChange={(e) => setExpDate(e.target.value)}
          />
        </div>

        <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
          <input
            type="text"
            placeholder="CVV"
            className="w-full outline-none text-gray-700"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

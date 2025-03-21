import React from "react";

const PaymentOptionCard = ({ id, name, logo, selected, onSelect }) => {
  return (
    <div
      className={`rounded-xl p-4 flex items-center justify-between cursor-pointer shadow-sm 
        transition-all duration-300 transform hover:shadow-md ${
          selected === id ? "bg-black text-white" : "bg-white hover:bg-gray-100"
        }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            selected === id ? "bg-white" : "bg-gray-100"
          }`}
        >
          <img src={logo} alt={name} className="w-6 h-6 object-contain" />
        </div>
        <span
          className={`font-medium ${
            selected === id ? "text-white" : "text-black"
          }`}
        >
          {name}
        </span>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected === id ? "border-white" : "border-gray-300"
        }`}
      >
        {selected === id && (
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        )}
      </div>
    </div>
  );
};

export default PaymentOptionCard;

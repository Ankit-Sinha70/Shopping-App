import React from "react";

const PaymentHistoryItem = ({ item }) => {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md hover:bg-gray-50">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-12 h-12 min-w-12 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.product}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <p className="font-medium truncate">{item.product}</p>
          <p className="text-sm text-gray-500 truncate">{item.description}</p>
          <p className="text-xs flex items-center mt-1 text-green-600">Send</p>
        </div>
      </div>
      <div className="font-bold ml-2 whitespace-nowrap">
        ${item.price.toFixed(2)}
      </div>
    </div>
  );
};

export default PaymentHistoryItem;

import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Woman4 from "../../public/assets/PNG/woman4.png";

const OrdersPage = () => {
    const navigate = useNavigate();
  const [orderTab, setOrderTab] = useState("active");

  const ordersData = {
    active: [
      {
        id: "5558760098",
        date: "12 March 2025 2:40 PM",
        estimatedDelivery: "18 March 2025",
        status: "Delivered",
        method: "Cash on Delivery",
        items: [
          {
            name: "Printed white coat",
            color: "White",
            qty: 1,
            total: "$23.00",
            image: Woman4,
          },
          {
            name: "Printed white coat",
            color: "White",
            qty: 1,
            total: "$23.00",
            image: Woman4,
          },
          {
            name: "Printed white coat",
            color: "White",
            qty: 1,
            total: "$23.00",
            image: Woman4,
          },
        ],
      },
    ],
    cancelled: [
      {
        id: "5558760012",
        date: "5 May 2024 1:20 PM",
        estimatedDelivery: "10 May 2023",
        status: "Cancelled",
        method: "Credit Card",
        items: [
          {
            name: "Blue Denim Jacket",
            color: "Blue",
            qty: 1,
            total: "$45.00",
            image: Woman4,
          },
        ],
      },
    ],
    completed: [
      {
        id: "5558759903",
        date: "12 March 2023 4:15 PM",
        estimatedDelivery: "18 April 2023",
        status: "Completed",
        method: "PayPal",
        items: [
          {
            name: "Leather Handbag",
            color: "Brown",
            qty: 1,
            total: "$75.00",
            image: Woman4,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <button
          onClick={() => navigate("/account")}
          className="bg-gray-100 rounded-full p-2"
        >
          <IoMdArrowRoundBack className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">My Orders</h1>
        <div className="w-10"></div> 
      </div>

      {/* Order Tabs */}
      <div className="flex bg-white mb-2 shadow-sm">
        {Object.keys(ordersData).map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 text-sm font-medium ${
              orderTab === tab 
                ? "border-b-2 border-black" 
                : "text-gray-500"
            }`}
            onClick={() => setOrderTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-auto p-4">
        {ordersData[orderTab].length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 text-center">No {orderTab} orders found</p>
          </div>
        ) : (
          ordersData[orderTab].map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 rounded-lg shadow-sm mb-4"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-sm font-semibold">Order #{order.id}</p>
                  <p className="text-xs text-gray-500">{order.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === "Delivered" || order.status === "Completed" 
                    ? "bg-green-100 text-green-800" 
                    : order.status === "Cancelled" 
                      ? "bg-red-100 text-red-800" 
                      : "bg-blue-100 text-blue-800"
                }`}>
                  {order.status}
                </span>
              </div>
              
              <div className="text-xs text-gray-500 mb-3">
                <p>Est. Delivery: {order.estimatedDelivery}</p>
                <p>Payment: {order.method}</p>
              </div>
              
              <div className="border-t pt-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-start mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Color: {item.color}</p>
                      <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                      <p className="text-sm font-semibold">{item.total}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 mt-2">
                <button className="flex-1 py-2 border border-gray-300 rounded-full text-xs font-medium">
                  Track Order
                </button>
                <button onClick={() => navigate("/orderDetails")} className="flex-1 py-2 bg-black text-white rounded-full text-xs font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Bags2 from "../../public/assets/JPG/bags2.jpg";
import Bags3 from "../../public/assets/JPG/bags3.jpg";
import Bags4 from "../../public/assets/JPG/bags4.jpg";
import Bags5 from "../../public/assets/JPG/bags5.jpg";
import BottomNavigation from "../components/BottomNavigation";

const Bags = () => {
  const navigate = useNavigate();
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Leather Backpack",
      description: "Premium quality leather backpack for daily use",
      price: 105.0,
      image: Bags2,
    },
    {
      id: 2,
      name: "Travel Duffel Bag",
      description: "Spacious and durable bag for travel lovers",
      price: 475.0,
      image: Bags3,
    },
    {
      id: 3,
      name: "Casual Tote Bag",
      description: "Stylish and lightweight tote for everyday use",
      price: 40.0,
      image: Bags4,
    },
    {
      id: 4,
      name: "Kids Bag",
      description: "Sleek and professional bag with multiple compartments",
      price: 195.0,
      image: Bags5,
    },
    {
      id: 5,
      name: "Hiking Backpack",
      description: "Ergonomic and water-resistant design for adventurers",
      price: 195.0,
      image: Bags2,
    },
    {
      id: 6,
      name: "Crossbody Shoulder Bag",
      description: "Compact and stylish for hands-free convenience",
      price: 195.0,
      image: Bags3,
    },
    {
      id: 7,
      name: "Gym Duffel Bag",
      description: "Spacious with separate compartments for workout gear",
      price: 195.0,
      image: Bags4,
    },
    {
      id: 8,
      name: "Rolling Luggage",
      description: "Lightweight and sturdy for smooth traveling",
      price: 195.0,
      image: Bags5,
    },
    {
      id: 9,
      name: "Messenger Bag",
      description: "Perfect blend of style and functionality",
      price: 195.0,
      image: Bags2,
    },
    {
      id: 10,
      name: "Mini Backpack",
      description: "Trendy and compact for carrying essentials",
      price: 195.0,
      image: Bags3,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Header - Made responsive with better spacing on larger screens */}
      <div className="flex justify-between items-center p-5 md:px-10 lg:px-16 max-w-screen-xl mx-auto">
        <button
          className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition-colors"
          onClick={() => navigate("/home")}
        >
          <MdArrowBack />
        </button>
        <button className="text-2xl hover:text-gray-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div className="px-5 md:px-10 lg:px-16 py-3 text-2xl md:text-3xl font-bold max-w-screen-xl mx-auto">
        Bags
      </div>

      {/* Products Grid - Improved for responsive design */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="w-full h-44 md:h-56 lg:h-64 flex items-center justify-center p-2 md:p-4">
                  <img
                    src={product.image || "/api/placeholder/200/200"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <button className="absolute top-4 right-4 bg-gray-200 text-black rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-lg shadow-md transition-transform transform hover:scale-110">
                  <CiHeart />
                </button>

                {/* Product Details */}
                <div className="py-3 px-3 text-center mt-2">
                  <div className="font-bold text-sm md:text-base truncate">
                    {product.name}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm truncate">
                    {product.description}
                  </div>
                  <div className="font-bold mt-1 text-md md:text-lg">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Bags;

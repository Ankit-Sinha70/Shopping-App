import React from "react";
import Mobile from "../../public/assets/JPG/mobile.jpg";
import Headphone from "../../public/assets/JPG/headphone.jpg";
import Lamp from "../../public/assets/JPG/lamp.jpg";
import Earbuds from "../../public/assets/JPG/earbuds.jpg";
import AppleWatch from "../../public/assets/JPG/apple-watch.jpg";
import Bulb from "../../public/assets/JPG/bulb.jpg";
import BottomNavigation from "../components/BottomNavigation";
import { CiHeart } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ElectronicsPage = () => {
    const navigate = useNavigate();
  // Sample products data
  const products = [
    {
      id: 1,
      name: "On Ear Headphone",
      description: "Beats Solo3 Wireless Kulak",
      price: 105.0,
      image: Headphone,
    },
    {
      id: 2,
      name: "Apple Watch",
      description: "Headphones 700Beats",
      price: 475.0,
      image: AppleWatch,
    },
    {
      id: 3,
      name: "Table Lamp LED",
      description: "Lamp For Student",
      price: 40.0,
      image: Lamp,
    },
    {
      id: 4,
      name: "Light Bulb",
      description: "IncandescentLight bulb",
      price: 195.0,
      image: Bulb,
    },
    {
      id: 5,
      name: "Smart Speaker",
      description: "Voice Assistant Compatible",
      price: 195.0,
      image: Headphone,
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      description: "Noise Cancelling",
      price: 195.0,
      image: Earbuds,
    },
    {
      id: 7,
      name: "Power Bank",
      description: "10000mAh Fast Charging",
      price: 195.0,
      image: Mobile,
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      description: "Waterproof Portable",
      price: 195.0,
      image: Headphone,
    },
    {
      id: 9,
      name: "Smartphone",
      description: "Latest Model",
      price: 195.0,
      image: Headphone,
    },
    {
      id: 10,
      name: "Digital Camera",
      description: "4K Video Recording",
      price: 195.0,
      image: Headphone,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Header - Made responsive with better spacing on larger screens */}
      <div className="flex justify-between items-center p-5 md:px-10 lg:px-16 max-w-screen-xl mx-auto">
        <button
          className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition-colors"
          onClick={() =>navigate("/home")}
        >
          <MdArrowBack/>
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

      {/* Category Title - Added responsive padding and improved typography */}
      <div className="px-5 md:px-10 lg:px-16 py-3 text-2xl md:text-3xl font-bold max-w-screen-xl mx-auto">
        Electronics
      </div>

      {/* Products Grid - Improved for responsive design */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image Wrapper */}
              <div>
                <div className="w-full h-44 md:h-56 lg:h-64 flex items-center justify-center p-2 md:p-4">
                  <img
                    src={product.image || "/api/placeholder/200/200"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Floating Add Button */}
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

      {/* Bottom Navigation - Keep as is for mobile */}
      <BottomNavigation />
    </div>
  );
};

export default ElectronicsPage;

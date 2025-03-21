import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Tshirt from "../../public/assets/JPG/tshirt.jpg";
import Tshirt2 from "../../public/assets/JPG/tshirt2.jpg";
import Tshirt3 from "../../public/assets/JPG/tshirt3.jpg";
import Tshirt4 from "../../public/assets/JPG/tshirt4.jpg";

import BottomNavigation from "../components/BottomNavigation";

const Clothes = () => {
  const navigate = useNavigate();
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Casual T-Shirt",
      description: "Soft cotton t-shirt for everyday wear",
      price: 105.0,
      image: Tshirt,
    },
    {
      id: 2,
      name: "Sporty T-Shirt",
      description: "Lightweight and breathable for workouts",
      price: 475.0,
      image: Tshirt2,
    },
    {
      id: 3,
      name: "Classic Polo Shirt",
      description: "Timeless design with a modern fit",
      price: 40.0,
      image: Tshirt3,
    },
    {
      id: 4,
      name: "Graphic Print Tee",
      description: "Trendy and stylish with bold prints",
      price: 195.0,
      image: Tshirt4,
    },
    {
      id: 5,
      name: "V-Neck T-Shirt",
      description: "Simple and elegant with a relaxed fit",
      price: 195.0,
      image: Tshirt,
    },
    {
      id: 6,
      name: "Oversized Tee",
      description: "Comfortable and trendy oversized fit",
      price: 195.0,
      image: Tshirt2,
    },
    {
      id: 7,
      name: "Slim Fit T-Shirt",
      description: "Modern and stylish slim fit design",
      price: 195.0,
      image: Tshirt3,
    },
    {
      id: 8,
      name: "Long Sleeve T-Shirt",
      description: "Perfect for cooler days with a sleek look",
      price: 195.0,
      image: Tshirt4,
    },
    {
      id: 9,
      name: "Cotton Blend T-Shirt",
      description: "Soft fabric for all-day comfort",
      price: 195.0,
      image: Tshirt,
    },
    {
      id: 10,
      name: "Striped T-Shirt",
      description: "Trendy stripes for a casual look",
      price: 195.0,
      image: Tshirt2,
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

export default Clothes;

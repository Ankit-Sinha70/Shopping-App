import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const ProductDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="text-center text-lg font-bold">Product not found!</div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16 relative">
      {/* Header */}
      <div className="flex justify-between items-center p-5">
        <button
          className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition-colors"
          onClick={() => navigate(-1)}
        >
          <MdArrowBack size={20} />
        </button>
        <button className="text-2xl hover:text-gray-700 transition-colors">
          <CiHeart size={24} />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center items-center px-5 relative">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full max-w-sm object-cover"
        />
        <div className="absolute bottom-3 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
        </div>
      </div>

      {/* Product Details */}
      <div
        className="bg-white p-5 rounded-t-3xl shadow-xl mt-[-40px] relative z-10"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <div className="flex items-center text-yellow-500">
              {"★".repeat(5)}
              <span className="text-gray-600 text-xs ml-2">(320 Review)</span>
            </div>
          </div>
          <div className="items-center justify-center">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-3 ">
              <div className="flex items-center overflow-hidden  bg-gray-200 rounded-full">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                  className="px-3 py-1"
                >
                  -
                </button>
                <span className="px-4 py-1">{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-black text-sm font-semibold">
              Available in stock
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Size</h3>
            <div className="flex space-x-2 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 rounded-full transition-all duration-300 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Color Selection */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Color</h3>
            <div className="flex flex-col space-y-2 mt-2">
              {["bg-black", "bg-gray-400", "bg-yellow-400", "bg-white"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full border cursor-pointer ${color}`}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 text-gray-600 text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea at
            voluptatem culpa possimus! Sapiente corporis illum assumenda, iure
            minus ea saepe? Nulla dicta, doloribus veritatis dolor tempora earum
            unde!
          </p>
        </div>

        <div className="flex justify-between gap-10">
          {/* Total Price */}
          <div className="">
            <p className="text-xs text-gray-400 w-20 mt-6">Total Price:</p>
            <span className="font-bold text-lg">
              ${count * product.price.toFixed(2)}
            </span>
          </div>
          {/* Add to Cart Button */}
          <div className="mt-5 w-full">
            <button className="w-full bg-black text-white py-3 rounded-full text-lg flex items-center justify-center">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

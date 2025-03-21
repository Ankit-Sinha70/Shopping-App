import React from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";
import BottomNavigation from "../components/BottomNavigation";
import Mobile from "../../public/assets/JPG/mobile.jpg";
import Headphone from "../../public/assets/JPG/headphone.jpg";
import Lamp from "../../public/assets/JPG/lamp.jpg";
import Earbuds from "../../public/assets/JPG/earbuds.jpg";
import AppleWatch from "../../public/assets/JPG/apple-watch.jpg";
import Bulb from "../../public/assets/JPG/bulb.jpg";

const ElectronicsPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "On Ear Headphone",
      description: "Beats Solo3 Wireless",
      price: 105.0,
      image: Headphone,
    },
    {
      id: 2,
      name: "Apple Watch",
      description: "Smart Wearable",
      price: 475.0,
      image: AppleWatch,
    },
    {
      id: 3,
      name: "Table Lamp LED",
      description: "Lamp For Study",
      price: 40.0,
      image: Lamp,
    },
    {
      id: 4,
      name: "Light Bulb",
      description: "Incandescent Light",
      price: 195.0,
      image: Bulb,
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      description: "Noise Cancelling",
      price: 195.0,
      image: Earbuds,
    },
    {
      id: 6,
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
      {/* Header */}
      <div className="flex justify-between items-center p-5 max-w-screen-xl mx-auto">
        <button
          className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition-colors"
          onClick={() => navigate("/home")}
        >
          <MdArrowBack />
        </button>
        <div className="text-2xl font-bold">Electronics</div>
      </div>

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() =>
                navigate("/product-details", { state: { product } })
              }
            >
              <div className="w-full h-44 flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="py-3 px-3 text-center">
                <div className="font-bold text-sm truncate">{product.name}</div>
                <div className="text-gray-500 text-xs truncate">
                  {product.description}
                </div>
                <div className="font-bold mt-1 text-md">
                  ${product.price.toFixed(2)}
                </div>
              </div>
              <button className="absolute top-4 right-4 bg-gray-200 text-black rounded-full w-7 h-7 flex items-center justify-center">
                <CiHeart />
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ElectronicsPage;

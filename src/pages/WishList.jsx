import React from "react";
import { FiSearch, FiBell, FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import Tshirt from "../../public/assets/JPG/tshirt4.jpg";
import Sneakers from "../../public/assets/PNG/sneakers.jpg";
import Earbuds from "../../public/assets/JPG/earbuds.jpg";
import Headphone from "../../public/assets/JPG/headphone.jpg";
import { useNavigate } from "react-router-dom";

const wishlistItems = [
  {
    id: 1,
    title: "Summer Breeze Dress",
    description: "Elegant floral maxi dress",
    price: 198.0,
    image: Tshirt,
  },
  {
    id: 2,
    title: "Urban Street Sneakers",
    description: "Minimalist leather sneakers",
    price: 245.0,
    image: Sneakers,
  },
  {
    id: 3,
    title: "Traveler's Backpack",
    description: "Lightweight and spacious backpack",
    price: 40.0,
    image: Earbuds,
  },
  {
    id: 4,
    title: "Classic Canvas Sneakers",
    description: "Timeless low-top sneakers",
    price: 120.0,
    image: Sneakers,
  },
  {
    id: 5,
    title: "Wireless Over-Ear Headphones",
    description: "Immersive sound with long battery life",
    price: 50.0,
    image: Headphone,
  },
  {
    id: 6,
    title: "Studio Pro Headphones",
    description: "High-fidelity sound for professionals",
    price: 50.0,
    image: Headphone,
  },
  {
    id: 7,
    title: "Bass Boost Headphones",
    description: "Deep bass and crystal-clear treble",
    price: 50.0,
    image: Headphone,
  },
];

const WishList = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen w-full px-4 sm:px-6 lg:px-8 py-5">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <button
            onClick={() => navigate("/account")}
            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full"
          >
            <FiArrowLeft size={18} />
          </button>
          <FiBell size={20} />
        </div>
        <div className="flex items-center mb-6">
          <div className="flex flex-1 items-center bg-gray-100 px-3 py-2 rounded-full">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <button className="ml-3 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
            <FiShoppingCart size={18} />
          </button>
        </div>
        <h2 className="text-lg font-bold mb-4">Wishlist</h2>
        <div className="space-y-4 pb-20">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover mr-4"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm sm:text-base truncate">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  {item.description}
                </div>
                <div className="font-bold mt-1">${item.price.toFixed(2)}</div>
              </div>
              <button className="ml-3 bg-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;

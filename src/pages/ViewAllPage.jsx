import React, { useState } from "react";

const ViewAllPage = () => {
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Dresses");
  const [sortOption, setSortOption] = useState("New Today");
  const [rating, setRating] = useState(4);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSortSelect = (option) => {
    setSortOption(option);
  };

  const handleRatingSelect = (stars) => {
    setRating(stars);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-xl">
      <div className="flex items-center justify-between mb-6">
        <button className="text-2xl text-gray-600 hover:text-gray-900 transition-colors">
          &#8592;
        </button>
        <div className="flex-grow mx-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-150px)] scrollbar-hide">
        <div>
          <h3 className="text-xl font-semibold mb-3">Categories</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {[
              "Dresses",
              "Jackets",
              "Jeans",
              "Shoes",
              "Bags",
              "Clothes",
              "Tops",
              "Sneakers",
              "Cots",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm truncate ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Price Range</h3>
          <div className="px-2">
            <input
              type="range"
              min="0"
              max="1750"
              step="10"
              value={price}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$0</span>
              <span className="font-semibold">${price}</span>
              <span>$1750</span>
            </div>
          </div>
        </div>

        {/* Sort by Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Sort by</h3>
          <div className="flex flex-wrap gap-2">
            {["New Today", "New This Week", "Top Sellers"].map((option) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`px-4 py-2 rounded-full text-sm ${
                  sortOption === option
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Rating Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Rating</h3>
          <div className="flex flex-col space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <button
                key={stars}
                onClick={() => handleRatingSelect(stars)}
                className="flex items-center justify-start space-x-2 hover:bg-gray-100 p-2 rounded-lg"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < stars ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">& up</span>
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <div>
          <button className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition-colors active:scale-95">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPage;

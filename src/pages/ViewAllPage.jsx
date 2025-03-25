import React, { useState } from 'react';

const ViewAllPage = () => {
  const [price, setPrice] = useState(0);

  // Handle price slider change
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="w-full lg:w-1/3 bg-white p-6 shadow-lg lg:h-screen">
      {/* Close button and Search */}
      <div className="flex items-center justify-between mb-6">
        <button className="text-lg text-gray-600">&#8592;</button>
        <input
          type="text"
          className="px-4 py-2 w-2/3 border border-gray-300 rounded-lg"
          placeholder="Search..."
        />
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {['Dresses', 'Jackets', 'Jeans', 'Shoes', 'Bags', 'Clothes', 'Tops', 'Sneakers', 'Cots', 'Lingeries'].map((category) => (
            <button key={category} className="bg-gray-200 px-4 py-2 rounded-full text-sm">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1750"
          step="10"
          value={price}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>${price}</span>
          <span>$1750</span>
        </div>
      </div>

      {/* Sort by Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Sort by</h3>
        <div className="flex gap-2">
          {['New Today', 'New This Week', 'Top Sellers'].map((sort) => (
            <button key={sort} className="bg-gray-200 px-4 py-2 rounded-full text-sm">
              {sort}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Rating</h3>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`text-yellow-500 ${star <= 4 ? 'text-xl' : 'text-gray-400'}`}>
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-6">
        Apply Now
      </button>
    </div>
  );
}

export default ViewAllPage;

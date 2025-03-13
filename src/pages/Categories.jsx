import { ChevronDown, Heart } from "lucide-react";
import React, { useState } from "react";

const categories = [
  "Gender",
  "Kids",
  "Shop By Price",
  "Sale & Offer",
  "Color",
  "Size",
  "Brand",
  "Type",
];
const products = [
  {
    name: "Roller Rabbit",
    description: "Vado Odelle Dress",
    price: "$110.00",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Endless Rose",
    description: "Bubble Elastic T-Shirt",
    price: "$60.00",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Axel Theory",
    description: "Irregular Rib Skirt",
    price: "$110.00",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Axel Arigato",
    description: "Clean Oversized T-Shirt",
    price: "$110.00",
    image: "https://via.placeholder.com/150",
  },
];
const Categories = () => {
  const [filters, setFilters] = useState(
    categories.reduce((acc, category) => ({ ...acc, [category]: false }), {})
  );

  const toggleFilter = (category) => {
    setFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };
  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      {/* Sidebar Filters */}
      <div className="w-1/4 bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">Clothes</h2>
        {categories.map((category) => (
          <div key={category} className="mt-4 border-b pb-2">
            <button
              className="flex justify-between w-full text-lg font-medium text-gray-700"
              onClick={() => toggleFilter(category)}
            >
              {category}
              <ChevronDown
                className={`transition-transform ${
                  filters[category] ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between mb-4">
          <button className="text-gray-600">Hide Filters</button>
          <button className="text-gray-600 flex items-center">
            Sort By <ChevronDown className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                <Heart className="text-gray-600" />
              </button>
              <h3 className="mt-2 font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

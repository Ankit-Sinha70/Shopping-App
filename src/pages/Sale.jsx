import React, { useState } from "react";
import Tshirt from "../../public/assets/PNG/T-shirt.png";
import Shoes from "../../public/assets/JPG/shoes.jpg";

const Sale = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "T-Shirts", "Shoes", "50% Off", "Buy 1 Get 1"];

  const saleProducts = [
    {
      id: 1,
      name: "Graphic T-Shirt",
      price: "$20.00",
      salePrice: "$10.00",
      image: Tshirt,
      tags: ["T-Shirts", "50% Off"],
    },
    {
      id: 2,
      name: "Sneakers",
      price: "$50.00",
      salePrice: "$25.00",
      image: Shoes,
      tags: ["Shoes", "50% Off"],
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      price: "$18.00",
      salePrice: "$18.00",
      image: Tshirt,
      tags: ["T-Shirts", "Buy 1 Get 1"],
    },
    {
      id: 4,
      name: "Sport Shoes",
      price: "$60.00",
      salePrice: "$30.00",
      image: Shoes,
      tags: ["Shoes", "50% Off"],
    },
  ];

  const filteredProducts =
    selectedTag === "All"
      ? saleProducts
      : saleProducts.filter((product) => product.tags.includes(selectedTag));

  const getDiscountPercent = (price, salePrice) => {
    const original = parseFloat(price.replace("$", ""));
    const sale = parseFloat(salePrice.replace("$", ""));
    if (original === sale) return 0;
    return Math.round(((original - sale) / original) * 100);
  };

  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-200 to-yellow-100 p-6 rounded-xl text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-600">Big Sale is ON!</h2>
        <p className="mt-2 text-gray-600">
          Get up to 50% off on your favorite styles. Limited time only!
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selectedTag === tag
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-600 border-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const discount = getDiscountPercent(
              product.price,
              product.salePrice
            );
            return (
              <div
                key={product.id}
                className="relative border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                {/* Discount Badge */}
                {discount > 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{discount}%
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-red-500 font-bold text-lg">
                    {product.salePrice}
                  </span>
                  <span className="line-through text-sm text-gray-400">
                    {product.price}
                  </span>
                </div>
                <button className="mt-3 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition">
                  Add to Cart
                </button>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products on sale in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Sale;

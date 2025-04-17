import React, { useState } from "react";
import Tshirt from "../../public/assets/PNG/T-shirt.png";
import Shoes3 from "../../public/assets/PNG/Shoes3.png";
import Shoes1 from "../../public/assets/PNG/Shoes1.png";
import Tshirt3 from "../../public/assets/JPG/tshirt3.jpg";
import Shoes from "../../public/assets/JPG/shoes.jpg";

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const productData = [
    {
      id: 1,
      name: "Kids T-Shirt",
      price: "$15.00",
      image: Tshirt,
      category: "T-Shirts",
      subcategory: "Printed",
    },
    {
      id: 2,
      name: "Graphic Tee",
      price: "$15.00",
      image: Tshirt3,
      category: "T-Shirts",
      subcategory: "Graphic",
    },
    {
      id: 3,
      name: "Plain Tee",
      price: "$15.00",
      image: Tshirt3,
      category: "T-Shirts",
      subcategory: "Plain",
    },
    {
      id: 4,
      name: "Cartoon Hoodie",
      price: "$25.00",
      image: Tshirt,
      category: "Hoodies",
      subcategory: "Cartoon",
    },
    {
      id: 5,
      name: "Sneakers",
      price: "$30.00",
      image: Shoes,
      category: "Shoes",
      subcategory: "Running",
    },
    {
      id: 6,
      name: "Kids Cap",
      price: "$10.00",
      image: Tshirt,
      category: "Accessories",
      subcategory: "Headwear",
    },
    {
      id: 7,
      name: "Graphic T-Shirt",
      price: "$18.00",
      image: Tshirt,
      category: "T-Shirts",
      subcategory: "Graphic",
    },
    {
      id: 8,
      name: "Running Shoes",
      price: "$18.00",
      image: Shoes3,
      category: "Shoes",
      subcategory: "Running",
    },
    {
      id: 9,
      name: "Running Shoes",
      price: "$18.00",
      image: Shoes1,
      category: "Shoes",
      subcategory: "Running",
    },
    {
      id: 10,
      name: "Running Shoes",
      price: "$18.00",
      image: Shoes1,
      category: "Shoes",
      subcategory: "Running",
    },
  ];
  

  // Extract categories and subcategories
  const categories = [
    "All",
    ...new Set(productData.map((item) => item.category)),
  ];

  const subcategories =
    selectedCategory === "All"
      ? []
      : [
          "All",
          ...new Set(
            productData
              .filter((item) => item.category === selectedCategory)
              .map((item) => item.subcategory)
          ),
        ];

  // Filter logic
  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSubcategory =
      selectedSubcategory === "All" ||
      product.subcategory === selectedSubcategory;
    return matchesCategory && matchesSubcategory;
  });

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      {/* Hero */}
      <div className="bg-pink-100 rounded-xl p-6 text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-600">Kids Collection</h1>
        <p className="text-gray-600 mt-2">
          Cute, comfy and colorful outfits for your little ones
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubcategory("All"); // Reset subcategory
            }}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-gray-600 text-white border-gray-600"
                : "bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategory Filter (only if a specific category is selected) */}
      {selectedCategory !== "All" && (
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-1 rounded-full border transition text-sm ${
                selectedSubcategory === sub
                  ? "bg-gray-700 text-white border-gray-700"
                  : "bg-white text-gray-500 border-gray-400 hover:bg-gray-400 hover:text-white"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-black font-medium">{product.price}</p>
              <button className="mt-2 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Kids;

import React, { useState } from "react";
import Tshirt from "../../public/assets/PNG/T-shirt.png";
import Hoodie from "../../public/assets/JPG/tshirt3.jpg";
import Shoes from "../../public/assets/JPG/shoes.jpg";

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]); // Local cart state

  const categories = ["All", "T-Shirts", "Hoodies", "Shoes", "Accessories"];

  const menProducts = [
    {
      id: 1,
      name: "Men's T-Shirt",
      price: "$20.00",
      image: Tshirt,
      category: "T-Shirts",
    },
    {
      id: 2,
      name: "Men's Hoodie",
      price: "$35.00",
      image: Hoodie,
      category: "Hoodies",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "$45.00",
      image: Shoes,
      category: "Shoes",
    },
    {
      id: 4,
      name: "Cap",
      price: "$12.00",
      image: Tshirt,
      category: "Accessories",
    },
    {
      id: 5,
      name: "Printed T-Shirt",
      price: "$22.00",
      image: Hoodie,
      category: "T-Shirts",
    },
    {
      id: 6,
      name: "Sneakers",
      price: "$50.00",
      image: Shoes,
      category: "Shoes",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? menProducts
      : menProducts.filter((product) => product.category === selectedCategory);

  const addToCart = (product) => {
    // Check if item already exists in cart
    const isInCart = cartItems.find((item) => item.id === product.id);

    if (isInCart) {
      // If item exists, increase quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // If not, add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      {/* Cart Count Badge */}
      <div className="text-right mb-4">
        <span className="bg-gray-700 text-white px-3 py-1 rounded-full">
          Cart Items: {cartItems.length}
        </span>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-200 to-yellow-100 p-8 rounded-xl text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-700">Men's Collection</h1>
        <p className="text-gray-600 mt-2">
          Classic & trendy styles crafted for modern men.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-gray-700 text-white border-gray-700"
                : "bg-white text-gray-600 border-gray-500 hover:bg-gray-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
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
              <button
                className="mt-2 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
                onClick={() => addToCart(product)}
              >
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

export default Men;

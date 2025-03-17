import React, { useState } from "react";
import { ShoppingCart, Minus, Plus, Star } from "lucide-react";
import Woman1 from "../../public/assets/PNG/woman1.png";
import Woman2 from "../../public/assets/PNG/woman2.png";
import Woman3 from "../../public/assets/PNG/woman3.png";
import Woman4 from "../../public/assets/PNG/woman4.png";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    name: "Roller Rabbit",
    dressName: "Vado Odelle Dress",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero illum dicta doloribus, beatae quia praesentium commodi eos nihil, fugit quod magni tempore, repellendus sunt eum suscipit! Dolorem vel est necessitatibus.",
    price: "$198.00",
    image: Woman1,
    colors: ["black", "orange", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  };

  const relatedProducts = [
    {
      name: "Eminence",
      description: "Bubble Elastic T-Shirt",
      price: "$40.00",
      image: Woman1,
    },
    {
      name: "Endless Rose",
      description: "Bubble Elastic T-Shirt",
      price: "$60.00",
      image: Woman2,
    },
    {
      name: "Axel Theory",
      description: "Irregular Rib Skirt",
      price: "$110.00",
      image: Woman3,
    },
    {
      name: "Axel Arigato",
      description: "Clean Oversized T-Shirt",
      price: "$110.00",
      image: Woman4,
    },
  ];

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-122 object-contain rounded-lg bg-gray-200"
          />
        </div>
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h1 className="text-lg text-gray-400 font-bold-500">
            {product.dressName}
          </h1>
          <div className="flex items-center mt-2 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-gray-700">(320 Reviews)</span>
          </div>
          <p className="text-2xl font-bold mt-4">{product.price}</p>
          <h4 className="text-2xl font-bold mt-4">Description</h4>
          <p className="text-lg text-gray-600">{product.description}</p>

          <div className="mt-4 flex items-center gap-8">
            {/* Color Selection */}
            <div className="mt-4">
              <p className="font-medium">Available in stock:</p>
              <div className="flex gap-3 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "bg-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-4">
              <p className="font-medium">Size:</p>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-full text-sm ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-8">
            {/* Quantity Selector */}
            <div className="flex bg-gray-300 p-4 rounded-full items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border rounded-md "
                style={{ border: "none", cursor: "pointer", color: "gray" }}
              >
                <Minus />
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className=" border rounded-md"
                style={{ border: "none", cursor: "pointer", color: "gray" }}
              >
                <Plus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className=" w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2">
              <ShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <h2 className="text-2xl font-bold mt-12">Related Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {relatedProducts.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-contain rounded-lg bg-gray-200"
            />
            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p className="text-gray-500">{item.description}</p>
            <p className="font-bold">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Woman1 from "../../public/assets/PNG/woman1.png";
import Shoe from "../../public/assets/PNG/shoes1.png";
import Backpack from "../../public/assets/PNG/BeFunky-design.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Roller Rabbit",
      description: "Vado Odelle Dress",
      price: 198,
      image: Woman1,
      quantity: 1,
      reviews: 320,
    },
    {
      id: 2,
      name: "Axel Arigato",
      description: "Clean 90 Triole Sneakers",
      price: 245,
      image: Shoe,
      quantity: 1,
      reviews: 320,
    },
    {
      id: 3,
      name: "Herschel Supply Co",
      description: "Daypack Backpack",
      price: 40,
      image: Backpack,
      quantity: 1,
      reviews: 320,
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate Total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 40;
  const total = subtotal + shipping;

  return (
    <div className="w-full">
      <div className="px-4 md:px-12 py-6 max-w-8xl mx-auto">
        {/* Parent Flex Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 ">
          {/* Cart Items Section */}
          <div className="flex-[2] space-y-6 ">
            <h1 className="w-full text-3xl font-bold mb-6 border-b border-gray-300 mt-5 p-6">
              My Cart
            </h1>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6 border-b border-gray-300 pb-6"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-gray-200 object-contain"
                />

                {/* Product Info */}
                <div className="flex-1 min-w-[150px]">
                  <div className="w-full md:w-[80%] lg:w-[40%] flex justify-between items-center">
                    <h2 className="text-lg md:text-xl font-bold">
                      {item.name}
                    </h2>
                    <div className="flex items-center text-yellow-500">
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 md:w-5 md:h-5 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.299 3.99a1 1 0 00.95.69h4.2c.969 0 1.371 1.24.588 1.81l-3.398 2.466a1 1 0 00-.364 1.118l1.299 3.99c.3.92-.755 1.688-1.54 1.118l-3.398-2.466a1 1 0 00-1.176 0l-3.398 2.466c-.784.57-1.84-.198-1.54-1.118l1.3-3.99a1 1 0 00-.365-1.118L2.013 9.417c-.784-.57-.381-1.81.588-1.81h4.2a1 1 0 00.95-.69l1.299-3.99z" />
                          </svg>
                        ))}
                      <span className="text-gray-500 text-sm ml-2">
                        ({item.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-lg md:text-xl font-bold mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-1 rounded-md"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-bold px-2">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-1 rounded-md"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section  */}
          <div className="flex-[1] max-w-md p-6 rounded-lg">
            <>
              <h1 className="text-left text-3xl font-bold-500 mb-10 border-b border-gray-300 p-6">
                Order Summary
              </h1>
            </>
            <p className="border-b-[1px] border-gray-300 mr-55">
              Enter Promo Or Gift Card
            </p>
            <div className="flex justify-between text-lg mb-2 leading-15">
              <h2 style={{ fontWeight: "700" }}>Sub Total</h2>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-2 leading-15">
              <span>Estimated Tax</span>
              <span>----</span>
            </div>
            <div className="flex justify-between text-lg mb-2 leading-7 border-b border-gray-300 py-5">
              <span>Shipping and Handling</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold leading-8">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-50 m-auto bg-black text-white py-3 rounded-full mt-4 flex items-center justify-center gap-2 leading-10">
              <ShoppingCart /> Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

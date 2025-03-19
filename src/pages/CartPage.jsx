import React, { useState, useEffect, useRef } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Trash2,
} from "lucide-react";
import Woman1 from "../../public/assets/PNG/woman1.png";
import Shoe from "../../public/assets/PNG/shoes1.png";
import Backpack from "../../public/assets/PNG/BeFunky-design.png";
import { Card } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Roller Rabbit",
      description: "Vado Odelle Dress",
      price: 198,
      image: Woman1,
      quantity: 1,
      reviews: 320,
      slideOffset: 0,
    },
    {
      id: 2,
      name: "Axel Arigato",
      description: "Clean 90 Triple Sneakers",
      price: 245,
      image: Shoe,
      quantity: 1,
      reviews: 320,
      slideOffset: 0,
    },
    {
      id: 3,
      name: "Herschel Supply Co",
      description: "Daypack Backpack",
      price: 40,
      image: Backpack,
      quantity: 1,
      reviews: 320,
      slideOffset: 0,
    },
  ]);

  const touchStartX = useRef(0);
  const currentItemId = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleTouchStart = (e, id) => {
    touchStartX.current = e.touches[0].clientX;
    currentItemId.current = id;
  };

  const handleTouchMove = (e) => {
    if (!currentItemId.current) return;
    const touchX = e.touches[0].clientX;
    const diff = touchStartX.current - touchX;
    const newOffset = Math.max(0, Math.min(80, diff));
    setCartItems(
      cartItems.map((item) =>
        item.id === currentItemId.current
          ? { ...item, slideOffset: newOffset }
          : item
      )
    );
  };

  const handleTouchEnd = () => {
    if (!currentItemId.current) return;

    setCartItems(
      cartItems.map((item) => {
        if (item.id === currentItemId.current) {
          const newOffset = item.slideOffset > 40 ? 80 : 0;
          return { ...item, slideOffset: newOffset };
        }
        return item;
      })
    );
    currentItemId.current = null;
  };

  const resetAllSlides = (exceptId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id !== exceptId ? { ...item, slideOffset: 0 } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 40;
  const total = subtotal + shipping;

  // Mobile Layout
  const MobileLayout = () => (
    <div className="flex flex-col w-full mx-auto px-4 py-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate("/home")} className="p-2 bg-black text-white rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">My Cart</h1>
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItems.length}
          </div>
          <button onClick={() => navigate("/cart")} className="p-2 bg-gray-100 rounded-full">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="relative overflow-hidden">
            {/* Slide container */}
            <div
              style={{
                transform: `translateX(-${item.slideOffset}px)`,
                transition:
                  currentItemId.current === item.id
                    ? "none"
                    : "transform 0.3s ease",
              }}
              onTouchStart={(e) => handleTouchStart(e, item.id)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={() => resetAllSlides(item.id)}
              className="relative"
            >
              <Card className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg bg-gray-100 object-contain"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-bold text-sm">{item.name}</h2>
                  <p className="text-xs text-gray-500">{item.description}</p>
                  <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseQuantity(item.id);
                    }}
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-4 text-center font-medium text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increaseQuantity(item.id);
                    }}
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </Card>
            </div>

            {/* Delete button that appears when sliding */}
            <div
              className="absolute top-0 right-0 bottom-0 flex items-center justify-center bg-red-500 text-white rounded-r-xl"
              style={{
                width: "80px",
                transform: `translateX(${80 - item.slideOffset}px)`,
                transition:
                  currentItemId.current === item.id
                    ? "none"
                    : "transform 0.1s ease",
              }}
              onClick={() => deleteItem(item.id)}
            >
              <Trash2 size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Promo code section */}
      <div className="bg-white rounded-xl p-4 mt-6 shadow-sm">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-1 p-3 bg-gray-100 rounded-l-lg border-0 focus:ring-0 text-sm"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-lg text-sm font-medium">
            Apply
          </button>
        </div>
      </div>

      {/* Order summary */}
      <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">
            Total ({cartItems.length} items):
          </span>
          <span className="font-bold text-xl">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-4 rounded-full flex items-center justify-center gap-2 font-medium">
          Proceed to Checkout
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  // Desktop Layout (Original)
  const DesktopLayout = () => (
    <div className="px-4 md:px-12 py-6 max-w-8xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Cart Items Section */}
        <div className="flex-[2] space-y-6">
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
                  <h2 className="text-lg md:text-xl font-bold">{item.name}</h2>
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
                <span className="text-lg font-bold px-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-1 rounded-md"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Delete button for desktop */}
              <button
                onClick={() => deleteItem(item.id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="flex-[1] max-w-md p-6 rounded-lg">
          <>
            <h1 className="text-left text-3xl font-bold-500 mb-10 border-b border-gray-300 p-6">
              Order Summary
            </h1>
          </>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter Promo Or Gift Card"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-3 rounded-r-lg">
              Apply
            </button>
          </div>
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
          <button className="w-full bg-black text-white py-3 rounded-full mt-4 flex items-center justify-center gap-2 leading-10">
            <ShoppingCart /> Checkout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};

export default CartPage;

import React, { useEffect, useMemo, useState } from "react";
import Woman4 from "../../public/assets/PNG/woman4.png";
import BottomNavigation from "../components/BottomNavigation";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [orderTab, setOrderTab] = useState("active");
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const ordersData = useMemo(
    () => ({
      active: [
        {
          id: "5558760098",
          date: "12 March 2025 2:40 PM",
          estimatedDelivery: "18 March 2025",
          status: "Delivered",
          method: "Cash on Delivery",
          items: [
            {
              name: "Printed white coat",
              color: "White",
              qty: 1,
              total: "$23.00",
              image: Woman4,
            },
            {
              name: "Printed white coat",
              color: "White",
              qty: 1,
              total: "$23.00",
              image: Woman4,
            },
            {
              name: "Printed white coat",
              color: "White",
              qty: 1,
              total: "$23.00",
              image: Woman4,
            },
          ],
        },
      ],
      cancelled: [
        {
          id: "5558760012",
          date: "5 May 2024 1:20 PM",
          estimatedDelivery: "10 May 2023",
          status: "Cancelled",
          method: "Credit Card",
          items: [
            {
              name: "Blue Denim Jacket",
              color: "Blue",
              qty: 1,
              total: "$45.00",
              image: Woman4,
            },
          ],
        },
      ],
      completed: [
        {
          id: "5558759903",
          date: "12 March 2023 4:15 PM",
          estimatedDelivery: "18 April 2023",
          status: "Completed",
          method: "PayPal",
          items: [
            {
              name: "Leather Handbag",
              color: "Brown",
              qty: 1,
              total: "$75.00",
              image: Woman4,
            },
          ],
        },
      ],
    }),
    []
  );

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setIsModalOpen(false);
    setNewAddress({ name: "", street: "", city: "", zip: "" });
  };

  const MobileView = () => (
    <div className="flex flex-col h-full">
      {/* Profile Header */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg mb-4">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img
            src="https://github.com/shadcn.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">Fscreation</h2>
          <p className="text-gray-500 text-sm">Fscreation441@gmail.com</p>
        </div>
      </div>

      {/* Navigation Options */}
      <div className="bg-white rounded-lg mb-4">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <span className="font-medium">Personal Details</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <span className="font-medium">My Order</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span className="font-medium">My Favourites</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <span className="font-medium">Shipping Address</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <span className="font-medium">My Card</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <span className="font-medium">Settings</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Help & Support Section */}
      <div className="bg-white rounded-lg mb-16">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <span className="font-medium">FAQs</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="font-medium">Privacy Policy</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </div>
            <span className="font-medium text-red-600">Logout</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation/>
    </div>
  );

 const WebLayout = () => (
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
  {/* Mobile Navigation - Horizontally Scrollable Tabs */}
  <nav className="md:hidden pb-3 mb-4 overflow-x-auto flex whitespace-nowrap">
    <a
      href="#"
      className={`mr-4 pb-2 text-sm flex-shrink-0 ${
        activeTab === "account"
          ? "font-semibold text-black border-b-2 border-black"
          : "text-gray-600"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("account");
      }}
    >
      My Account
    </a>
    <a
      href="#"
      className={`mr-4 pb-2 text-sm flex-shrink-0 ${
        activeTab === "orders"
          ? "font-semibold text-black border-b-2 border-black"
          : "text-gray-600"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("orders");
      }}
    >
      My Orders
    </a>
    <a
      href="#"
      className={`mr-4 pb-2 text-sm flex-shrink-0 ${
        activeTab === "addresses"
          ? "font-semibold text-black border-b-2 border-black"
          : "text-gray-600"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("addresses");
      }}
    >
      My Addresses
    </a>
    <a
      href="#"
      className={`mr-4 pb-2 text-sm flex-shrink-0 ${
        activeTab === "wallet"
          ? "font-semibold text-black border-b-2 border-black"
          : "text-gray-600"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("wallet");
      }}
    >
      My Wallet
    </a>
    <a
      href="#"
      className={`mr-4 pb-2 text-sm flex-shrink-0 ${
        activeTab === "wishlist"
          ? "font-semibold text-black border-b-2 border-black"
          : "text-gray-600"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("wishlist");
      }}
    >
      My Wishlist
    </a>
  </nav>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex border-b pb-4 space-x-6 text-gray-600 overflow-x-auto">
    <a
      href="#"
      className={`whitespace-nowrap ${
        activeTab === "account" ? "font-semibold text-black" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("account");
      }}
    >
      My Account
    </a>
    <a
      href="#"
      className={`whitespace-nowrap ${
        activeTab === "orders" ? "font-semibold text-black" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("orders");
      }}
    >
      My Orders
    </a>
    <a
      href="#"
      className={`whitespace-nowrap ${
        activeTab === "addresses" ? "font-semibold text-black" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("addresses");
      }}
    >
      My Addresses
    </a>
    <a
      href="#"
      className={`whitespace-nowrap ${
        activeTab === "wallet" ? "font-semibold text-black" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("wallet");
      }}
    >
      My Wallet
    </a>
    <a
      href="#"
      className={`whitespace-nowrap ${
        activeTab === "wishlist" ? "font-semibold text-black" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab("wishlist");
      }}
    >
      My Wishlist
    </a>
  </nav>

  {activeTab === "account" && (
    <div className="mt-4">
      <h2 className="text-2xl sm:text-3xl font-bold mt-4">Account</h2>
      <div className="flex gap-2 sm:gap-4 mt-4 justify-end">
        <button className="border px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
          Discard
        </button>
        <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
          Update Info
        </button>
      </div>
      <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base">
        View and edit your personal info below
      </p>
      <div className="border-t border-gray-300 pt-4 sm:pt-6 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
          Personal Info
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Update your personal information
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 text-sm sm:text-base">
              First Name
            </label>
            <input type="text" className="border p-2 rounded w-full mt-1" />
          </div>
          <div>
            <label className="text-gray-700 text-sm sm:text-base">
              Last Name
            </label>
            <input type="text" className="border p-2 rounded w-full mt-1" />
          </div>
          <div className="grid-cols-2   ">
            <label className="text-gray-700 text-sm sm:text-base">
              Phone Number
            </label>
            <input
              type="number"
              className="border p-2 rounded w-full mt-1"
            />
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 mt-4 justify-end">
          <button className="border px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
            Discard
          </button>
          <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
            Update Info
          </button>
        </div>

        {/* Login Info Section */}
        <div className="border-t border-gray-300 mt-6 sm:mt-10 pt-4 sm:pt-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 leading-15">
            Login Info
          </h3>
          <p className="text-gray-600 mb-2 text-sm sm:text-base leading-12">
            Update your personal information
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Login Email:
            <br />
            <span className="font-semibold">fscreation@gmail.com</span>
          </p>
          <p className="text-black-600 cursor-pointer underline text-sm sm:text-base leading-10">
            Change Email
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base leading-10">
            Password:
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base leading-2">
            ••••••
          </p>
          <p className="text-black-600 cursor-pointer underline text-sm sm:text-base leading-12">
            Change Password
          </p>
        </div>
      </div>
    </div>
  )}

  {activeTab === "orders" && (
    <div className="border-t pt-4 sm:pt-6 mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Orders</h3>
      <div className="flex space-x-4 border-b pb-2 overflow-x-auto">
        {Object.keys(ordersData).map((tab) => (
          <span
            key={tab}
            className={`cursor-pointer whitespace-nowrap text-sm sm:text-base ${
              orderTab === tab
                ? "font-semibold border-b-2 border-black pb-1"
                : "text-gray-500"
            }`}
            onClick={() => setOrderTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </span>
        ))}
      </div>
      {ordersData[orderTab].map((order) => (
        <div
          key={order.id}
          className="border p-3 sm:p-4 mt-4 rounded-lg shadow-sm"
        >
          <p className="text-gray-700 font-semibold text-sm sm:text-base">
            Order no: #{order.id}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Order Date: {order.date}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Estimated Delivery Date: {order.estimatedDelivery}
          </p>
          <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
            Order Status: {order.status}
          </p>
          <p className="text-gray-700 text-xs sm:text-sm">
            Method: {order.method}
          </p>
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center border p-3 sm:p-4 mt-2 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                />
                <div className="ml-3 sm:ml-4">
                  <p className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Colour: {item.color}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Qty: {item.qty}
                  </p>
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    Total: {item.total}
                  </p>
                </div>
              </div>
              <button className="mt-3 sm:mt-0 sm:ml-auto bg-teal-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm w-full sm:w-auto">
                View Detail
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )}

  {activeTab === "addresses" && (
    <div className="border-t pt-4 sm:pt-6 mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">
        My Addresses
      </h3>
      {addresses.length === 0 ? (
        <p className="text-gray-600 text-sm sm:text-base">
          No saved addresses. Add a new address to speed up checkout.
        </p>
      ) : (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {addresses.map((address, index) => (
            <li key={index} className="border p-3 sm:p-4 rounded-lg">
              <p className="font-semibold text-sm sm:text-base">
                {address.name}
              </p>
              <p className="text-sm sm:text-base">
                {address.street}, {address.city}, {address.zip}
              </p>
            </li>
          ))}
        </ul>
      )}
      <button
        className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mt-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Address
      </button>
    </div>
  )}

  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Add New Address
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full rounded mb-2"
          value={newAddress.name}
          onChange={(e) =>
            setNewAddress({ ...newAddress, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Street Address"
          className="border p-2 w-full rounded mb-2"
          value={newAddress.street}
          onChange={(e) =>
            setNewAddress({ ...newAddress, street: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="City"
          className="border p-2 w-full rounded mb-2"
          value={newAddress.city}
          onChange={(e) =>
            setNewAddress({ ...newAddress, city: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Zip Code"
          className="border p-2 w-full rounded mb-2"
          value={newAddress.zip}
          onChange={(e) =>
            setNewAddress({ ...newAddress, zip: e.target.value })
          }
        />
        <div className="flex gap-2 sm:gap-4 mt-4 justify-end">
          <button
            className="border px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
            onClick={handleAddAddress}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  )}

  {activeTab === "wallet" && (
    <div className="border-t pt-4 sm:pt-6 mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Wallet</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Available Balance: <span className="font-semibold">$0.00</span>
      </p>
      <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mt-4">
        Add Funds
      </button>
    </div>
  )}

  {activeTab === "wishlist" && (
    <div className="border-t pt-4 sm:pt-6 mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">
        My Wishlist
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Your wishlist is empty. Start adding your favorite products.
      </p>
    </div>
  )}
</div>
 )

  return (
    <div className="w-full">{isMobile ? <MobileView /> : <WebLayout />}</div>
  );
};
export default ProfilePage;

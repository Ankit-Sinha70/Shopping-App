import React, { useMemo, useState } from "react";
import Woman4 from "../../public/assets/PNG/woman4.png";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [orderTab, setOrderTab] = useState("active");
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
  });

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

  return (
    <div className="max-w-6xl mx-auto p-8">
      <nav className="border-b pb-4 flex space-x-6 text-gray-600 gap-15">
        <a
          href="#"
          className={activeTab === "account" ? "font-semibold text-black" : ""}
          onClick={() => setActiveTab("account")}
        >
          My Account
        </a>
        <a
          href="#"
          className={activeTab === "orders" ? "font-semibold text-black" : ""}
          onClick={() => setActiveTab("orders")}
        >
          My Orders
        </a>
        <a
          href="#"
          className={
            activeTab === "addresses" ? "font-semibold text-black" : ""
          }
          onClick={() => setActiveTab("addresses")}
        >
          My Addresses
        </a>
        <a
          href="#"
          className={activeTab === "wallet" ? "font-semibold text-black" : ""}
          onClick={() => setActiveTab("wallet")}
        >
          My Wallet
        </a>
        <a
          href="#"
          className={activeTab === "wishlist" ? "font-semibold text-black" : ""}
          onClick={() => setActiveTab("wishlist")}
        >
          My Wishlist
        </a>
      </nav>

      {activeTab === "account" && (
        <div>
          <h2 className="text-3xl font-bold mt-6">Account</h2>
          <div className="flex gap-4 mt-4 justify-end">
            <button className="border px-4 py-2 rounded-full text-sm">
              Discard
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
              Update Info
            </button>
          </div>
          <p className="text-gray-600 mb-10">
            View and edit your personal info below
          </p>
          <div className="border-t border-gray-300 pt-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
            <p className="text-gray-600 mb-4">
              Update your personal information
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">First Name</label>
                <input type="text" className="border p-2 rounded w-full mt-1" />
              </div>
              <div>
                <label className="text-gray-700">Last Name</label>
                <input type="text" className="border p-2 rounded w-full mt-1" />
              </div>
              <div className="grid-cols-2">
                <label className="text-gray-700">Phone Number</label>
                <input
                  type="number"
                  className="border p-2 rounded w-full mt-1"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4 justify-end">
              <button className="border px-4 py-2 rounded-full text-sm">
                Discard
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Update Info
              </button>
            </div>
            {/* Login Info Section */}
            <div className="border-t border-gray-300 mt-10">
              <h3 className="text-2xl font-semibold mt-8">Login Info</h3>
              <p className="text-gray-600 mb-2 leading-10">
                Update your personal information
              </p>
              <p className="text-gray-600">
                Login Email:
                <br />
                <span className="font-semibold">fscreation@gmail.com</span>
              </p>
              <p className="text-black-600 cursor-pointer underline">
                Change Email
              </p>
              <p className="text-gray-600 mt-2 leading-18">Password: ••••••</p>
              <p className="text-black-600 cursor-pointer underline leading-1">
                Change Password
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "orders" && (
        <div className="border-t pt-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">My Orders</h3>
          <div className="flex space-x-6 border-b pb-2">
            {Object.keys(ordersData).map((tab) => (
              <span
                key={tab}
                className={`cursor-pointer ${
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
              className="border p-4 mt-4 rounded-lg shadow-sm"
            >
              <p className="text-gray-700 font-semibold">
                Order no: #{order.id}
              </p>
              <p className="text-gray-500 text-sm">Order Date: {order.date}</p>
              <p className="text-gray-500 text-sm">
                Estimated Delivery Date: {order.estimatedDelivery}
              </p>
              <p className="text-gray-700 font-semibold mt-2">
                Order Status: {order.status}
              </p>
              <p className="text-gray-700 text-sm">Method: {order.method}</p>
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border p-4 mt-2 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      Colour: {item.color}
                    </p>
                    <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
                    <p className="text-gray-700 font-semibold">
                      Total: {item.total}
                    </p>
                  </div>
                  <button className="ml-auto bg-teal-500 text-white px-4 py-2 rounded-full text-sm">
                    View Detail
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {activeTab === "addresses" && (
        <div className="border-t pt-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">My Addresses</h3>
          {addresses.length === 0 ? (
            <p className="text-gray-600">
              No saved addresses. Add a new address to speed up checkout.
            </p>
          ) : (
            <ul className="mt-4">
              {addresses.map((address, index) => (
                <li key={index} className="border p-4 rounded-lg mb-2">
                  <p className="font-semibold">{address.name}</p>
                  <p>
                    {address.street}, {address.city}, {address.zip}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <button
            className="bg-black text-white px-4 py-2 rounded-full text-sm mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Add Address
          </button>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-0">
          <div className="bg-gray-100 p-10 mt-20 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
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
            <div className="flex gap-4 mt-4 justify-end">
              <button
                className="border px-4 py-2 rounded-full text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded-full text-sm"
                onClick={handleAddAddress}
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "wallet" && (
        <div className="border-t pt-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">My Wallet</h3>
          <p className="text-gray-600">
            Available Balance: <span className="font-semibold">$0.00</span>
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm mt-4">
            Add Funds
          </button>
        </div>
      )}

      {activeTab === "wishlist" && (
        <div className="border-t pt-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">My Wishlist</h3>
          <p className="text-gray-600">
            Your wishlist is empty. Start adding your favorite products.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

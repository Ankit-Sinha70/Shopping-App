import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "12px",
};

const center = {
  lat: 8.1773,
  lng: 77.4344,
};

const OrderDetails = () => {
  const navigate = useNavigate();
  const orderData = {
    orderId: "#105462",
    orderDate: "March 15, 2025",
    tracking: [
      {
        date: "March 18",
        time: "11:30",
        detail: "Delivered to: John Smith",
      },
      {
        date: "March 17",
        time: "09:15",
        detail: "Out for delivery",
      },
      {
        date: "March 16",
        time: "18:40",
        detail: "Arrived at local facility",
      },
      {
        date: "March 15",
        time: "14:20",
        detail: "Order confirmed",
      },
    ],
    shipping: {
      name: "John Smith",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      phone: "+1 (212) 555-1234",
    },
    payment: {
      type: "VISA",
      lastFour: "4242",
      expiry: "12/26",
    },
  };

  const handleBack = () => {
    navigate("/orders");
  };

  const handleDownloadInvoice = () => {
    console.log("Downloading invoice...");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-lg w-full mx-auto bg-white min-h-screen shadow-sm">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white mt-5 ml-5"
        >
          <IoArrowBackOutline size={24} />
        </button>

        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-8 mt-2">
          <div className="text-lg font-bold">{orderData.orderId}</div>
          <div className="text-gray-500 text-sm">{orderData.orderDate}</div>
        </div>

        {/* Google Map */}
        <div className="px-4 sm:px-6 lg:px-8 mt-6">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Collection Info */}
        <div className="px-4 sm:px-6 lg:px-8 mt-4">
          <div className="font-bold">Collection Point</div>
          <div className="text-sm text-gray-600 mt-1">
            10:00–11:00 — 25 June, 2021 <br />
            3512 Nagercoil, India
          </div>
          <div className="border-b border-gray-300 pt-5"></div>
          <div className="mt-3 text-xs text-gray-500">
            You can change pick-up time for your order by 10:00, 24 June
          </div>
          <button className="mt-2 px-3 py-1 text-xs rounded bg-black text-white font-medium">
            Change
          </button>
        </div>

        {/* Tracking History */}
        <div className="font-bold text-xl px-4 sm:px-6 lg:px-8 mt-6">
          Tracking History
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          {orderData.tracking.map((event, index) => (
            <div key={index} className="flex relative pb-6">
              <div className="w-3 h-3 rounded-full bg-black mt-1.5 mr-4 z-10"></div>
              {index !== orderData.tracking.length - 1 && (
                <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-gray-300"></div>
              )}
              <div className="flex-1">
                <span className="block font-bold">{event.date}</span>
                <span className="block text-gray-500 text-sm">
                  {event.time}
                </span>
                <span className="block text-gray-500 text-sm">
                  {event.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Information */}
        <div className="font-bold text-xl px-4 sm:px-6 lg:px-8 mt-6">
          Shipping Information
        </div>
        <div className="bg-white rounded-xl shadow-sm mx-4 sm:mx-6 lg:mx-8 mt-2 mb-5 p-5 border border-gray-100">
          <div className="mb-3">
            <div className="font-medium mb-1">Delivery Address</div>
            <div className="text-gray-500 text-sm leading-relaxed">
              {orderData.shipping.name}
              <br />
              {orderData.shipping.address}
              <br />
              {orderData.shipping.city}, {orderData.shipping.state}{" "}
              {orderData.shipping.zip}
              <br />
              {orderData.shipping.country}
              <br />
              {orderData.shipping.phone}
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="font-bold text-xl px-4 sm:px-6 lg:px-8">
          Payment Information
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex items-center mt-4 mb-6">
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold mr-3">
              {orderData.payment.type}
            </div>
            <div>
              <div>
                {orderData.payment.type} ending in {orderData.payment.lastFour}
              </div>
              <div className="text-gray-500 text-sm">
                Expiry: {orderData.payment.expiry}
              </div>
            </div>
          </div>
        </div>

        {/* Download Invoice Button */}
        <div className="px-4 sm:px-6 lg:px-8 mb-10">
          <button
            onClick={handleDownloadInvoice}
            className="w-full text-center bg-black text-white rounded-full py-4 font-medium"
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

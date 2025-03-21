import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import CC from "../../public/assets/SVG/mastercard.svg";
import Paypal from "../../public/assets/SVG/paypal.svg";
import Visa from "../../public/assets/SVG/visa.svg";
import Gpay from "../../public/assets/SVG/Gpay.svg";
import Shoes from "../../public/assets/JPG/shoes.jpg";
import Tshirt from "../../public/assets/JPG/tshirt.jpg";
import Bag2 from "../../public/assets/JPG/bags2.jpg";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  // Visa card details
  const [visaCardNumber, setVisaCardNumber] = useState("3829 4820 4629 5025");
  const [visaExpDate, setVisaExpDate] = useState("09/17");
  const [visaCvv, setVisaCvv] = useState("");
  const [visaCardHolder, setVisaCardHolder] = useState("Anita Rose");

  // Mastercard details
  const [mastercardNumber, setMastercardNumber] = useState(
    "5412 7534 8901 2345"
  );
  const [mastercardExpDate, setMastercardExpDate] = useState("12/25");
  const [mastercardCvv, setMastercardCvv] = useState("");
  const [mastercardHolder, setMastercardHolder] = useState("Anita Rose");

  // PayPal details
  const [paypalEmail, setPaypalEmail] = useState("anita.rose@example.com");
  const [paypalPassword, setPaypalPassword] = useState("");

  // Google Pay details
  const [googlePayEmail, setGooglePayEmail] = useState("anita.rose@gmail.com");
  const [googlePayPhone, setGooglePayPhone] = useState("+1 555-123-4567");

  const paymentOptions = [
    { id: "credit-card", name: "Credit Card", logo: CC },
    { id: "paypal", name: "Paypal", logo: Paypal },
    { id: "visa", name: "Visa", logo: Visa },
    { id: "google-pay", name: "Google Pay", logo: Gpay },
  ];

  const historyItems = [
    {
      id: 1,
      product: "Roller Rabbit",
      description: "Vado Odelle Dress",
      price: 198.0,
      image: Tshirt,
    },
    {
      id: 2,
      product: "Axel Arigato",
      description: "Clean 90 Triole Sneakers",
      price: 245.0,
      image: Shoes,
    },
    {
      id: 3,
      product: "Herschel Supply Co.",
      description: "Daypack Backpack",
      price: 40.0,
      image: Bag2,
    },
  ];

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayment(paymentId);
    setShowPaymentDetails(true);
  };

  const renderPaymentDetails = () => {
    switch (selectedPayment) {
      case "visa":
        return (
          <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
            {/* Visa Card Display */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
              {/* Card Background with colors */}
              <div className="absolute inset-0">
                <div className="flex h-full">
                  <div className="w-1/2 bg-blue-900"></div>
                  <div className="w-1/2 bg-pink-300"></div>
                </div>
              </div>

              {/* Black Card Overlay */}
              <div className="absolute inset-0 bg-black rounded-xl p-5 flex flex-col justify-between">
                {/* Card Top Section with Logo */}
                <div className="flex justify-between items-start">
                  <div className="text-white font-bold text-xl">VISA</div>
                  <div className="h-8 w-8 bg-gray-600 rotate-45"></div>
                </div>

                {/* Card Number Section */}
                <div className="text-gray-400 text-xs mb-1">CARD NUMBER</div>
                <div className="text-white text-lg font-medium tracking-wider mb-4 overflow-x-auto whitespace-nowrap">
                  {visaCardNumber}
                </div>

                {/* Card Holder and Expiry */}
                <div className="flex justify-between items-end">
                  <div className="overflow-hidden">
                    <div className="text-gray-400 text-xs">
                      CARD HOLDER NAME
                    </div>
                    <div className="text-white truncate max-w-xs">
                      {visaCardHolder}
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="text-right">
                      <div className="text-gray-400 text-xs">VALID THRU</div>
                      <div className="text-white">{visaExpDate}</div>
                    </div>
                    <div className="w-8 h-8">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full text-gray-300"
                        stroke="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visa Card Details Form */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Card Details</h2>

              <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full outline-none text-gray-700"
                  value={visaCardNumber}
                  onChange={(e) => setVisaCardNumber(e.target.value)}
                />
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  placeholder="Exp date"
                  className="w-full outline-none text-gray-700"
                  value={visaExpDate}
                  onChange={(e) => setVisaExpDate(e.target.value)}
                />
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full outline-none text-gray-700"
                  value={visaCvv}
                  onChange={(e) => setVisaCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case "credit-card": // Mastercard
        return (
          <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
            {/* Mastercard Display */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
              {/* Card Background with colors */}
              <div className="absolute inset-0">
                <div className="flex h-full">
                  <div className="w-1/2 bg-red-500"></div>
                  <div className="w-1/2 bg-yellow-500"></div>
                </div>
              </div>

              {/* Card Overlay */}
              <div className="absolute inset-0 bg-gray-800 rounded-xl p-5 flex flex-col justify-between">
                {/* Card Top Section with Logo */}
                <div className="flex justify-between items-start">
                  <div className="text-white font-bold text-xl">MASTERCARD</div>
                  <div className="flex">
                    <div className="h-8 w-8 bg-red-500 rounded-full opacity-70 -mr-3"></div>
                    <div className="h-8 w-8 bg-yellow-500 rounded-full opacity-70"></div>
                  </div>
                </div>

                {/* Card Number Section */}
                <div className="text-gray-400 text-xs mb-1">CARD NUMBER</div>
                <div className="text-white text-lg font-medium tracking-wider mb-4 overflow-x-auto whitespace-nowrap">
                  {mastercardNumber}
                </div>

                {/* Card Holder and Expiry */}
                <div className="flex justify-between items-end">
                  <div className="overflow-hidden">
                    <div className="text-gray-400 text-xs">
                      CARD HOLDER NAME
                    </div>
                    <div className="text-white truncate max-w-xs">
                      {mastercardHolder}
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="text-right">
                      <div className="text-gray-400 text-xs">VALID THRU</div>
                      <div className="text-white">{mastercardExpDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mastercard Details Form */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Card Details</h2>

              <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full outline-none text-gray-700"
                  value={mastercardNumber}
                  onChange={(e) => setMastercardNumber(e.target.value)}
                />
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  placeholder="Exp date"
                  className="w-full outline-none text-gray-700"
                  value={mastercardExpDate}
                  onChange={(e) => setMastercardExpDate(e.target.value)}
                />
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full outline-none text-gray-700"
                  value={mastercardCvv}
                  onChange={(e) => setMastercardCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case "paypal":
        return (
          <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
            {/* PayPal Form */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
              <div className="flex justify-center mb-6">
                <img
                  src={Paypal}
                  alt="PayPal"
                  className="h-14 object-contain"
                />
              </div>

              <div className="space-y-5">
                <p className="text-center text-gray-600 text-sm mb-4">
                  Log in to your PayPal account to complete this purchase
                  securely
                </p>

                <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                  <input
                    type="email"
                    placeholder="Email or phone number"
                    className="w-full outline-none text-gray-700"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                  />
                </div>

                <div className="w-full bg-white border border-gray-200 rounded-lg p-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none text-gray-700"
                    value={paypalPassword}
                    onChange={(e) => setPaypalPassword(e.target.value)}
                  />
                </div>

                <div className="pt-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Log In
                  </button>
                </div>

                <div className="text-center">
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    Having trouble logging in?
                  </a>
                </div>

                <div className="flex items-center">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <div className="mx-4 text-gray-500 text-sm">or</div>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div>
                  <button className="w-full border border-gray-300 bg-gray-50 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "google-pay":
        return (
          <div className="mb-6 w-full max-w-lg mx-auto lg:mx-0">
            {/* Google Pay Form */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
              <div className="flex justify-center mb-8">
                <img
                  src={Gpay}
                  alt="Google Pay"
                  className="h-12 object-contain"
                />
              </div>

              <div className="space-y-5">
                <p className="text-center text-gray-600 text-sm mb-4">
                  Pay quickly and securely with Google Pay
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-medium truncate">{googlePayEmail}</p>
                      <p className="text-sm text-gray-500">{googlePayPhone}</p>
                    </div>
                  </div>

                  <div className="mb-2 text-sm font-medium">
                    Connected Accounts:
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 mb-2">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-6 h-6 min-w-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        V
                      </div>
                      <span className="text-sm truncate">Visa •••• 5025</span>
                    </div>
                    <div className="h-4 w-4 min-w-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-6 h-6 min-w-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        M
                      </div>
                      <span className="text-sm truncate">
                        MasterCard •••• 2345
                      </span>
                    </div>
                    <div className="h-4 w-4 min-w-4 rounded-full border border-gray-300"></div>
                  </div>
                </div>

                <div className="flex items-center cursor-pointer text-blue-600 hover:text-blue-700">
                  <svg
                    className="w-5 h-5 mr-2 min-w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Add payment method</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-full bg-gray-50 p-4 md:p-8 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate("/placeOrder")}
        className="bg-white rounded-full w-10 h-10 flex items-center justify-center mb-6 hover:bg-gray-100 transition"
      >
        <IoArrowBackCircleOutline size={36} className="text-gray-700" />
      </button>

      {/* Responsive Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Left Column - Payment Options */}
        <div className="order-1 lg:order-1">
          <h1 className="text-2xl font-semibold mb-4">Payment</h1>

          {!showPaymentDetails ? (
            <>
              <div className="space-y-3 mb-6">
                {paymentOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`
                      rounded-xl p-4 flex items-center justify-between cursor-pointer shadow-sm 
                      transition-all duration-300 transform hover:shadow-md
                      ${
                        selectedPayment === option.id
                          ? "bg-black text-white"
                          : "bg-white hover:bg-gray-100"
                      }
                    `}
                    onClick={() => handlePaymentSelect(option.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          selectedPayment === option.id
                            ? "bg-white"
                            : "bg-gray-100"
                        }`}
                      >
                        <img
                          src={option?.logo}
                          alt={option?.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          selectedPayment === option.id
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {option?.name}
                      </span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                        selectedPayment === option.id
                          ? "border-white"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedPayment === option.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Card Button */}
              <button className="w-full border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center mb-8 transition-all duration-300 hover:bg-gray-100 hover:border-gray-400">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Add Card</span>
                </div>
              </button>
            </>
          ) : (
            <div className="block lg:hidden">{renderPaymentDetails()}</div>
          )}
        </div>

        {/* Right Column - Payment Details or History */}
        <div className="order-2 lg:order-2">
          {showPaymentDetails ? (
            <>
              <div className="hidden lg:block">{renderPaymentDetails()}</div>

              <div className="flex justify-between mt-6">
                <button
                  className="text-gray-500 font-medium py-2 px-4 rounded hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setShowPaymentDetails(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105"
                  onClick={() => navigate("/confirmation")}
                >
                  Confirm
                </button>
              </div>
            </>
          ) : (
            <>
              {/* History Section */}
              <h1 className="text-2xl font-semibold mb-4 mt-8 lg:mt-0">
                History
              </h1>

              <div className="space-y-3">
                {historyItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-12 h-12 min-w-12 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.product}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-medium truncate">{item.product}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {item.description}
                        </p>
                        <p className="text-xs flex items-center mt-1">
                          <svg
                            className="w-3 h-3 mr-1 min-w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Send
                        </p>
                      </div>
                    </div>
                    <div className="font-bold ml-2 whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

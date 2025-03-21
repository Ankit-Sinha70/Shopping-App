import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import CC from "../../public/assets/SVG/mastercard.svg";
import PaypalLogo from "../../public/assets/SVG/paypal.svg";
import VisaLogo from "../../public/assets/SVG/visa.svg";
import GpayLogo from "../../public/assets/SVG/Gpay.svg";
import Shoes from "../../public/assets/JPG/shoes.jpg";
import Tshirt from "../../public/assets/JPG/tshirt.jpg";
import Bag2 from "../../public/assets/JPG/bags2.jpg";

import PaymentOptionCard from "../components/payment/PaymentOptionCard";
import PaymentHistoryItem from "../components/payment/PaymentHistoryItem";
import VisaCardForm from "../components/payment/VisaCardForm";
import MasterCardForm from "../components/payment/MasterCardForm";
import PaypalForm from "../components/payment/PaypalForm";
import GooglePayForm from "../components/payment/GooglePayForm";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const [visa, setVisa] = useState({
    number: "3829 4820 4629 5025",
    expDate: "09/17",
    cvv: "",
  });
  const [master, setMaster] = useState({
    number: "5412 7534 8901 2345",
    expDate: "12/25",
    cvv: "",
  });
  const [paypal, setPaypal] = useState({
    email: "ankit.sinha@gmail.com",
    password: "",
  });
  const googlePay = {
    email: "aankit.sinha@gmail.com",
    phone: "+1 555-123-4567",
    cards: [
      { type: "Visa", last4: "5025", active: true },
      { type: "MasterCard", last4: "2345", active: false },
    ],
  };

  const paymentOptions = [
    { id: "credit-card", name: "Credit Card", logo: CC },
    { id: "paypal", name: "Paypal", logo: PaypalLogo },
    { id: "visa", name: "Visa", logo: VisaLogo },
    { id: "google-pay", name: "Google Pay", logo: GpayLogo },
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

  const handlePaymentSelect = (id) => {
    setSelectedPayment(id);
    setShowPaymentDetails(true);
  };

  const renderDetails = () => {
    switch (selectedPayment) {
      case "visa":
        return (
          <VisaCardForm
            values={visa}
            onChange={(field, val) => setVisa({ ...visa, [field]: val })}
          />
        );
      case "credit-card":
        return (
          <MasterCardForm
            values={master}
            onChange={(field, val) => setMaster({ ...master, [field]: val })}
          />
        );
      case "paypal":
        return (
          <PaypalForm
            values={paypal}
            onChange={(field, val) => setPaypal({ ...paypal, [field]: val })}
          />
        );
      case "google-pay":
        return <GooglePayForm values={googlePay} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen max-w-full bg-gray-50 md:py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden lg:flex">
        {/* Left Panel - Payment Options */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 border-r border-gray-200">
          {/* Back Button */}
          <button
            onClick={() => navigate("/placeOrder")}
            className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
          >
            <IoArrowBackCircleOutline size={28} />
            <span className="font-medium">Back</span>
          </button>

          {!showPaymentDetails && (
            <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
          )}

          {/* Payment Options or Form (mobile) */}
          {!showPaymentDetails ? (
            <>
              <div className="space-y-3">
                {paymentOptions.map((opt) => (
                  <PaymentOptionCard
                    key={opt.id}
                    id={opt.id}
                    name={opt.name}
                    logo={opt.logo}
                    selected={selectedPayment}
                    onSelect={handlePaymentSelect}
                  />
                ))}
              </div>

              <button className="w-full mt-6 border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center hover:bg-gray-100">
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
            <div className="block lg:hidden mt-6">{renderDetails()}</div>
          )}
        </div>

        {/* Right Panel - Payment Details or History */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          {showPaymentDetails ? (
            <>
              <div className="hidden lg:block">{renderDetails()}</div>
              <div className="flex justify-between mt-6">
                <button
                  className="text-gray-500 font-medium py-2 px-4 rounded hover:text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowPaymentDetails(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800"
                  onClick={() => navigate("/confirmation")}
                >
                  Confirm
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
              <div className="space-y-3">
                {historyItems.map((item) => (
                  <PaymentHistoryItem key={item.id} item={item} />
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

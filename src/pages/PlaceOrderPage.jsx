import React from "react";
import { ArrowLeft, Plus } from "lucide-react";
import Sneaker from "../../public/assets/PNG/sneakers.jpg";
import Woman from "../../public/assets/PNG/woman1.png";
import { useNavigate } from "react-router-dom";

const PlaceOrderPage = () => {
  //   const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <div className="mb-8">
        <button
          onClick={() => navigate("/cart")}
          className="bg-black text-white rounded-full p-2"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Delivery Address Section */}
      <div className="mb-6 rounded-2xl">
        <h2 className="text-2xl font-bold font-serif text-gray-500 mb-4">
          Delivery Address
        </h2>
        <div
          className="bg-white rounded-xl p-6 shadow-sm"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="space-y-2">
            <div className="flex">
              <span className="font-semibold w-48">Street:</span>
              <span>3512 Pearl Street</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">City:</span>
              <span>Nagercoil</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">State/province/area:</span>
              <span>TAmil Nadu</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">Phone number:</span>
              <span>8870523416</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">Zip code:</span>
              <span>95814</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">Country calling code:</span>
              <span>+91</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">Country:</span>
              <span>India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Items Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 font-serif text-gray-500">
          Product Item
        </h2>
        <div className="space-y-4">
          {/* First Product */}
          <div
            className="bg-white rounded-xl p-4 flex shadow-sm"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
              <img
                src={Woman}
                alt="Roller Rabbit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Roller Rabbit</h3>
              <p className="text-sm text-gray-500">Vado Odelle Dress</p>
              <p className="font-bold mt-1">$198.00</p>
            </div>
          </div>

          {/* Second Product */}
          <div
            className="bg-white rounded-xl p-4 flex shadow-sm"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
              <img
                src={Sneaker}
                alt="Axel Arigato"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Axel Arigato</h3>
              <p className="text-sm text-gray-500">Clean 90 Triple Sneakers</p>
              <p className="font-bold mt-1">$245.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Code Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 font-serif text-gray-500">
          Promo Code
        </h2>
        <div
          className="bg-white rounded-xl p-4 flex items-center shadow-sm"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="bg-black text-white p-2 rounded-lg mr-4">
            <Plus size={20} />
          </div>
          <div>
            <p className="font-bold">Add Promo Code</p>
            <p className="text-sm text-gray-500">#hau021</p>
          </div>
        </div>
      </div>

      {/* Footer - Total and Place Order */}
      <div className="mt-12 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Total Price</p>
          <p className="text-2xl font-bold">$443.00</p>
        </div>
        <button className="bg-black text-white rounded-full py-4 px-8 font-bold">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderPage;

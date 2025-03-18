import React from "react";
import Mistress from "../../public/assets/JPG/mistress.jpg";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Mistress} // Replace with actual image path
          alt="Fashion Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-10 md:px-16 lg:px-20">
        <h1
          className="text-6xl sm:text-6xl md:text-7xl font-bold italic"
          style={{ fontFamily: "Italianno", fontWeight: "500" }}
        >
          Fashions
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl mb-8"
          style={{ fontFamily: "Italianno", fontWeight: "500" }}
        >
          My Life My Style
        </p>

        {/* Buttons */}
        <div className="mt-70 space-y-6 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="w-64 py-3 hover:bg-lime-400 hover:text-black transition text-white text-lg font-semibold rounded-full border border-lime-400"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signUp")}
            className="w-64 py-3 border border-lime-400 text-white text-lg font-semibold rounded-full hover:bg-lime-400 hover:text-black transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEyeSlash, FaEye } from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../public/assets/JPG/background.jpg";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden py-6 px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="Fashion Background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent bg-opacity-0 rounded-lg shadow-md border border-gray-600 backdrop-blur-sm">
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Logo/Brand (optional) */}
        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center"
          style={{ fontFamily: "Italianno", fontWeight: "500", color: "white" }}
        >
          Sign Up
        </h2>
        <p
          className="text-xl sm:text-2xl text-center mt-1"
          style={{ fontFamily: "Italianno", color: "white" }}
        >
          Already a member?{" "}
          <a
            href="#"
            className="text-lime-300 hover:text-lime-200 transition-colors"
            onClick={() => navigate("/login")}
          >
            Log In
          </a>
        </p>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center px-4 py-2.5 sm:py-3 border border-gray-600 rounded-lg text-lime-300 hover:bg-gray-800 transition-colors duration-200 space-x-3">
            <FaGoogle className="text-lg sm:text-xl" />{" "}
            <span>Sign Up with Google</span>
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2.5 sm:py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors duration-200 space-x-3 text-lime-300">
            <FaFacebook className="text-lg sm:text-xl" />{" "}
            <span>Sign Up with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-3 text-sm text-gray-400">Or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Email Sign Up */}
        <div className="mt-4 space-y-4">
          <div className="group">
            <label className="block text-sm font-medium text-gray-300 mb-1 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-300/50 focus:border-transparent transition-all"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-gray-300 mb-1 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-300/50 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-gray-300 mb-1 ml-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-300/50 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-lime-300 border-gray-600 rounded focus:ring-lime-300"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
            I agree to the{" "}
            <a href="#" className="text-lime-300 hover:text-lime-200">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full px-4 py-2.5 sm:py-3 mt-6 bg-lime-300 text-black font-medium rounded-lg hover:bg-lime-400 transition-colors duration-200"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;

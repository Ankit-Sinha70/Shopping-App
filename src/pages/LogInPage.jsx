import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../public/assets/JPG/background2.jpg";
import { X } from "lucide-react";

const LogInPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full min-h-[70vh] sm:min-h-[60vh] md:min-h-[50vh] lg:min-h-[40vh] flex items-center justify-center bg-black overflow-hidden">

      {/* Background Image with animated gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={BackgroundImage}
          alt="Fashion Background"
          className="w-full object-cover scale-110"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl px-4">
        <button
          onClick={() => navigate("/")}
          className="absolute right-7 top-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 bg-black/30">
          {/* Logo/Brand (optional) */}
          <div className="flex justify-center mb-4"></div>

          {/* Title */}
          <h2
            className="text-5xl md:text-6xl font-bold text-center mb-2"
            style={{
              fontFamily: "Italianno",
              fontWeight: "500",
              color: "white",
            }}
          >
            Login
          </h2>

          <p
            className="text-center text-xl md:text-2xl mb-6"
            style={{ fontFamily: "Italianno", color: "white" }}
          >
            Don't have an account?{" "}
            <a
              href="#"
              className="text-lime-300 hover:text-lime-200 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </a>
          </p>

          {/* Social Login Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-600 rounded-lg text-lime-300 hover:bg-gray-800 transition-colors duration-200 space-x-3">
              <FaGoogle className="text-xl" /> <span>Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors duration-200 space-x-3 text-lime-300">
              <FaFacebook className="text-xl" />{" "}
              <span>Continue with Facebook</span>
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors duration-200 space-x-3 text-lime-300">
              <IoLogoApple className="text-xl" />{" "}
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-sm text-gray-400">
              or continue with email
            </span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Email and Password Inputs */}
          <div className="mt-4 space-y-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-300/50 focus:border-transparent transition-all"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-300/50 focus:border-transparent transition-all"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-lime-300 border-gray-600 rounded focus:ring-lime-300"
              />
              <label htmlFor="remember" className="ml-2 text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-lime-300 hover:text-lime-200 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate("/success")}
            className="w-full px-4 py-3 mt-6 bg-lime-300 text-black font-medium rounded-lg hover:bg-lime-400 transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;

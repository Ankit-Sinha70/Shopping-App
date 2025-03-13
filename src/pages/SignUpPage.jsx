import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { X } from "lucide-react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        {/* Close Button */}
        {/* <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <X size={20} />
        </button> */}

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <p className="text-center text-gray-600">
          Already a member? <a href="#" className="text-blue-500">Log In</a>
        </p>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-4">
          <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
            <FaGoogle className="mr-2" /> Sign Up with Google
          </button>
          <button className="w-full flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-900">
            <FaFacebook className="mr-2" /> Sign Up with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Sign Up */}
        <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          Sign Up with email
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;

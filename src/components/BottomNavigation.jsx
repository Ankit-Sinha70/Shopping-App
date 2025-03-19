import React from "react";
import Home1 from "../../public/assets/SVG/home.svg";
import { FaCartPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
    const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 flex justify-around p-3 rounded-t-3xl shadow-[0px_-6px_15px_rgba(0,0,0,0.2)]">
      <button onClick={() => navigate("/home")} className="flex items-center justify-between w-24 h-12 rounded-full px-4">
        <img src={Home1} alt="Home" />
      </button>
      <button className="flex flex-col items-center justify-center w-12 h-12">
        <FaCartPlus className="w-6 h-6" />
      </button>
      <button onClick={() => navigate("/notification")} className="flex flex-col items-center justify-center w-12 h-12">
        <IoMdNotifications className="w-6 h-6" />
      </button>
      <button className="flex flex-col items-center justify-center w-12 h-12">
        <CgProfile className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BottomNavigation;

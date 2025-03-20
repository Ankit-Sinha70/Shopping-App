import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation items with routes and icons
  const navItems = [
    { name: "Home", route: "/home", icon: <Home className="w-4 h-4" /> },
    { name: "Cart", route: "/cart", icon: <FaCartPlus className="w-4 h-4" /> },
    {
      name: "Notifi..",
      route: "/notification",
      icon: <IoMdNotifications className="w-4 h-4" />,
    },
    {
      name: "Profile",
      route: "/account",
      icon: <CgProfile className="w-4 h-4" />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 rounded-t-3xl shadow-[0px_-6px_15px_rgba(0,0,0,0.2)]">
      <div className="max-w-screen-lg mx-auto flex justify-evenly items-center py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.route;
          return (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`flex items-center rounded-full transition-all duration-500 ease-in-out ${
                isActive ? "bg-gray-200 px-4 py-2" : "px-2 py-2"
              }`}
            >
              <div
                className={`bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
                  isActive ? "scale-110 p-2" : "scale-100 p-2"
                }`}
              >
                {item.icon}
              </div>

              <div
                className="overflow-hidden transition-all duration-200 ease-in-out"
                style={{
                  maxWidth: isActive ? "100px" : "0px",
                  opacity: isActive ? 1 : 0,
                }}
              >
                <span
                  className="ml-2 font-sm whitespace-nowrap block transition-all duration-300 ease-in-out"
                  style={{
                    transform: isActive ? "translateX(0)" : "translateX(-20px)",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  {item.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;

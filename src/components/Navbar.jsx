import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/men", label: "Men" },
    { to: "/women", label: "Women" },
    { to: "/kids", label: "Kids" },
    { to: "/sale", label: "Sale" },
    { to: "/categories", label: "Categories" },
  ];

  return (
    <nav className="relative">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 bg-gradient-to-r from-pink-200 to-yellow-100 p-8 rounded-xl text-center mb-10 gap-15">
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button className="mr-2 md:hidden" onClick={toggleMenu}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <Link
            to="/"
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Italianno", fontWeight: "500" }}
          >
            Fashions
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:ml-auto lg:ml-auto justify-end lg:gap-12 text-gray-400 gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-semibold ${
                location.pathname === link.to
                  ? "text-black underline"
                  : "hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 sm:gap-8 items-center">
          <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-black" />
          </Link>
          <Link to="/account">
            <User className="w-6 h-6 text-gray-600 hover:text-black" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <Link
              to="/"
              className="text-4xl font-bold"
              style={{ fontFamily: "Italianno", fontWeight: "500" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Fashions
            </Link>
            <button onClick={toggleMenu}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-semibold py-4 border-b ${
                  location.pathname === link.to ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

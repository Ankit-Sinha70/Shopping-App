import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/men", label: "Men" },
    { to: "/women", label: "Women" },
    { to: "/kids", label: "Kids" },
    { to: "/sale", label: "Sale" },
    { to: "/categories", label: "Categories" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 gap-8 py-4 bg-white shadow-md">
      <Link
        to="/"
        className="text-2xl font-logo font-bold"
        style={{ fontFamily: "cursive" }}
      >
        Fashions
      </Link>
      <div className="hidden md:flex gap-10 text-gray-400 ml-auto">
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
      <div className="flex gap-8 items-center">
        <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
        <Link to="/cart">
          <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-black" />
        </Link>
        <Link to="/account">
          <User className="w-6 h-6 text-gray-600 hover:text-black" />
        </Link>
      </div>
    </nav>
  );
}

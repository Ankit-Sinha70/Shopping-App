import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-logo font-bold" style={{fontFamily:"cursive"}}>
        Fashions
      </Link>
      <div className="hidden md:flex gap-8 text-gray-600 ml-auto">
        <Link to="/" className="font-semibold text-black">
          Home
        </Link>
        <Link to="/men" className="hover:text-black">
          Men
        </Link>
        <Link to="/women" className="hover:text-black">
          Women
        </Link>
        <Link to="/kids" className="hover:text-black">
          Kids
        </Link>
        <Link to="/sale" className="hover:text-black">
          Sale
        </Link>
        <Link to="/categories" className="hover:text-black">
          Categories
        </Link>
      </div>
      <div className="flex gap-6 items-center">
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

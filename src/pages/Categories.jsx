import { ChevronDown, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import React, { useState } from "react";
import Product4 from "../../public/assets/PNG/product4.png";
import Product5 from "../../public/assets/PNG/product5.png";
import Product6 from "../../public/assets/PNG/product6.png";

const categories = [
  { name: "Gender", subCategories: ["Men", "Women", "Unisex"] },
  { name: "Kids", subCategories: ["Boys", "Girls", "Toddlers"] },
  {
    name: "Shop By Price",
    subCategories: ["Under $50", "$50-$100", "Above $100"],
  },
  { name: "Sale & Offer", subCategories: ["Limited Deals", "Clearance"] },
  { name: "Color", subCategories: ["Red", "Blue", "Black", "White"] },
  { name: "Size", subCategories: ["S", "M", "L", "XL"] },
  { name: "Brand", subCategories: ["Nike", "Adidas", "Puma"] },
  { name: "Type", subCategories: ["T-Shirts", "Jeans", "Shoes"] },
];

const initialProducts = [
  {
    name: "Roller Rabbit",
    description: "Vado Odelle Dress",
    price: "$110.00",
    image: Product4,
  },
  {
    name: "Endless Rose",
    description: "Bubble Elastic T-Shirt",
    price: "$60.00",
    image: Product5,
  },
  {
    name: "Axel Theory",
    description: "Irregular Rib Skirt",
    price: "$110.00",
    image: Product6,
  },
  {
    name: "Axel Arigato",
    description: "Clean Oversized T-Shirt",
    price: "$110.00",
    image: Product4,
  },
  {
    name: "Axel Arigato",
    description: "Clean Oversized T-Shirt",
    price: "$110.00",
    image: Product4,
  },
  {
    name: "Axel Arigato",
    description: "Clean Oversized T-Shirt",
    price: "$310.00",
    image: Product4,
  },
  {
    name: "Axel Arigato",
    description: "Clean Oversized T-Shirt",
    price: "$210.00",
    image: Product4,
  },
  {
    name: "Axel Arigato",
    description: "Clean Oversized T-Shirt",
    price: "$10.00",
    image: Product4,
  },
];

const Categories = () => {
  const [filters, setFilters] = useState(
    categories.reduce(
      (acc, category) => ({ ...acc, [category.name]: false }),
      {}
    )
  );
  const [products, setProducts] = useState(initialProducts);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleFilter = (category) => {
    setFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleSort = (option) => {
    setIsDropdownOpen(false);

    let sortedProducts = [...products];

    if (option === "Price: Low to High") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (option === "Price: High to Low") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    } else if (option === "Name: A-Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Name: Z-A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4">
      {/* Sidebar Filters */}
      <div className="lg:w-1/4 p-4 w-full">
        <h2 className="text-xl font-bold mb-4">Clothes</h2>
        {categories.map(({ name, subCategories }) => (
          <div key={name} className="mt-4 border-b pb-2">
            <button
              className="flex justify-between w-full text-lg font-medium text-gray-700"
              onClick={() => toggleFilter(name)}
            >
              {name}
              <ChevronDown
                className={`transform transition-transform duration-300 ease-in-out ${
                  filters[name] ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                filters[name]
                  ? "max-h-96 opacity-100 mt-2 ml-4"
                  : "max-h-0 opacity-0"
              } text-gray-600`}
            >
              {subCategories.map((sub) => (
                <p
                  key={sub}
                  className="py-1 cursor-pointer hover:text-gray-900"
                >
                  {sub}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="lg:w-3/4 w-full">
        <div className="flex justify-between mb-4">
          <button className="text-gray-600">Hide Filters</button>

          {/* Sort Dropdown */}
          <div className="relative">
            <button>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 flex items-center">
                  Sort By <ChevronDown className="ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => handleSort("Price: Low to High")}
                  >
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleSort("Price: High to Low")}
                  >
                    Price: High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSort("Name: A-Z")}>
                    Name: A-Z
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSort("Name: Z-A")}>
                    Name: Z-A
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleSort("Price: Low to High")}
                >
                  Price: Low to High
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleSort("Price: High to Low")}
                >
                  Price: High to Low
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleSort("Name: A-Z")}
                >
                  Name: A-Z
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleSort("Name: Z-A")}
                >
                  Name: Z-A
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <div key={index} className="p-2 flex flex-col items-center">
              <div className="bg-gray-200 rounded-lg shadow-lg relative w-40 md:w-full h-48 lg:h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-lg"
                />
                <button className="absolute top-2 right-2 p-1 rounded-full shadow-md !bg-black">
                  <Heart className="text-white" />
                </button>
              </div>
              <div className="mt-4 text-center w-full">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

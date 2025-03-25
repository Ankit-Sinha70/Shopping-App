import React, { useState, useEffect } from "react";
import NewArrivals from "../components/NewArrivals";
import Advertise from "/assets/PNG/Advertise.png";
import { Button } from "../components/ui/button";
import Testimonials from "../components/Testimonials";
import newArrivals from "../../public/assets/JPG/new-arrivals.jpg";
import Bags1 from "../../public/assets/JPG/bags.jpg";
import Shoes1 from "../../public/assets/JPG/shoes.jpg";
import Cloths from "../../public/assets/JPG/cloths.jpg";
import Jewellary from "../../public/assets/JPG/jwellary.jpg";
import Electronics from "../../public/assets/JPG/electronics.jpg";
import Sneaker from "../../public/assets/PNG/sneaker.jpg";
import Sneakers from "../../public/assets/PNG/sneakers.jpg";
import Avatar from "../../public/assets/PNG/avatar.png";
import BlackBag from "../../public/assets/JPG/bags.jpg";
import BlueSneaker from "../../public/assets/PNG/sneakers.jpg";
import Sandals from "../../public/assets/JPG/shoes.jpg";
import { FaStar } from "react-icons/fa";
import BottomNavigation from "../components/BottomNavigation";
import ElectronicsPage from "./Electronics";
import Shoes from "./Shoes";
import Clothes from "../components/Clothes";
import Bags from "../components/Bags";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const categories = [
    { id: 1, name: "New Arrivals", count: 208, image: newArrivals },
    { id: 2, name: "Clothes", count: 358, image: Cloths },
    { id: 3, name: "Bags", count: 160, image: Bags1 },
    { id: 4, name: "Shoes", count: 230, image: Shoes1 },
    { id: 5, name: "Electronics", count: 130, image: Electronics },
    { id: 6, name: "Jewelry", count: 87, image: Jewellary },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Updated category buttons with state management
  const [categoryButtons, setCategoryButtons] = useState([
    { id: 1, name: "Dresses", active: true },
    { id: 2, name: "Jackets", active: false },
    { id: 3, name: "Jeans", active: false },
    { id: 4, name: "Shoes", active: false },
  ]);

  const productsByCategory = {
    // Dresses (category ID: 1)
    1: [
      { id: 1, name: "Roller Rabbit", image: Sneaker },
      { id: 2, name: "endless rose", image: Sneakers },
      { id: 3, name: "Summer Dress", image: Cloths },
      { id: 4, name: "Evening Gown", image: newArrivals },
    ],
    // Jackets (category ID: 2)
    2: [
      { id: 5, name: "Winter Jacket", image: Cloths },
      { id: 6, name: "Denim Jacket", image: newArrivals },
      { id: 7, name: "Leather Jacket", image: BlackBag },
    ],
    // Jeans (category ID: 3)
    3: [
      { id: 8, name: "Slim Fit Jeans", image: Cloths },
      { id: 9, name: "Baggy Jeans", image: BlackBag },
      { id: 10, name: "Ripped Jeans", image: Sneakers },
    ],
    // Shoes (category ID: 4)
    4: [
      { id: 11, name: "Running Shoes", image: Shoes1 },
      { id: 12, name: "Casual Sneakers", image: Sneakers },
      { id: 13, name: "Formal Shoes", image: Sandals },
      { id: 14, name: "Sandals", image: Shoes1 },
    ],
  };

  const [topDresses, setTopDresses] = useState(productsByCategory[1]);

  const handleCategoryChange = (categoryId) => {
    const updatedCategories = categoryButtons.map((cat) => ({
      ...cat,
      active: cat.id === categoryId,
    }));
    setCategoryButtons(updatedCategories);
    setTopDresses(productsByCategory[categoryId]);
  };

  const promotionalBanners = [
    {
      discount: "50% Off",
      text: "On everything today",
      code: "FSCREATION",
      image: Bags1,
    },
    {
      discount: "70% Off",
      text: "On everything today",
      code: "FSCREATION",
      image: Shoes1,
    },
  ];

  const newArrivalsProducts = [  
    {
      name: "The Marc Jacobs",
      description: "Traveler Tote",
      price: "$195.00",
      image: BlackBag,
    },
    {
      name: "Axel Arigato",
      description: "Clean 90 Triple Sneakers",
      price: "$245.00",
      image: BlueSneaker,
    },
  ];

  const popularProducts = [
    {
      name: "Gia Borghini",
      description: "RHW Rosie 1 Sandals",
      price: "$740.00",
      rating: 4.5,
      image: Sandals,
    },
  ];

  if (selectedCategory === 5) {
    return <ElectronicsPage />;
  }
  if (selectedCategory === 4) {
    return <Shoes />;
  }
  if (selectedCategory === 2) {
    return <Clothes />;
  }
  if (selectedCategory === 3) {
    return <Bags />;
  }

  return (
    <div className="w-full">
      {isMobile ? (
        // Mobile Layout
        <>
          {/* Top Bar with Menu and Profile */}
          <div className="flex justify-between items-center p-4">
            <button className="bg-black rounded-full p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={Avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Welcome Message */}
          <div className="px-4 pt-2 pb-4">
            <h1 className="text-2xl font-bold">Welcome,</h1>
            <p className="text-gray-500 text-lg">Our Fashions App</p>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-6">
            <div className="bg-gray-100 rounded-full flex items-center p-3 relative">
              <svg
                className="ml-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none w-full text-sm"
              />
              <button className="absolute right-2 bg-black rounded-full p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="2" fill="white" />
                  <circle cx="6" cy="12" r="2" fill="white" />
                  <circle cx="18" cy="12" r="2" fill="white" />
                </svg>
              </button>
            </div>
          </div>

          {/* Featured Product Card */}
          <div className="px-4 pb-6">
            <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
              <div className="w-24 h-24 bg-white rounded-xl overflow-hidden mr-4">
                <img
                  src={Sneakers}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Axel Arigato</h3>
                <p className="text-sm text-gray-500">
                  Clean 90 Triple Sneakers
                </p>
                <p className="font-bold mt-1">$245.00</p>
              </div>
              <button className="bg-black rounded-lg p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Categories Section - WITH FILTERING FUNCTIONALITY */}
          <div className="px-4 pb-4">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
              {categoryButtons.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-5 py-2 rounded-full whitespace-nowrap ${
                    cat.active
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-300"
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Top Dresses Section - NOW DYNAMIC BASED ON CATEGORY */}
          <div className="px-4 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Top{" "}
                {categoryButtons.find((cat) => cat.active)?.name || "Products"}
              </h2>
              <a href="/viewAll" className="text-sm text-gray-500">
                View All
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {topDresses.map((product) => (
                <div key={product.id} className="relative">
                  <div className="bg-gray-200 rounded-2xl h-48 w-full relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="font-medium mt-2">{product.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promotional Banners */}
          <div className="px-4 pb-6 overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
              {promotionalBanners.map((banner, index) => (
                <div
                  key={index}
                  className="min-w-[250px] relative rounded-2xl overflow-hidden bg-gray-100"
                >
                  <div className="flex h-32">
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{banner.discount}</h3>
                        <p className="text-sm">{banner.text}</p>
                        <p className="text-xs text-gray-500">
                          With code: {banner.code}
                        </p>
                      </div>
                      <button className="bg-black text-white text-xs py-1 px-4 rounded-full w-max">
                        Get Now
                      </button>
                    </div>
                    <div className="w-1/2">
                      <img
                        src={banner.image}
                        alt="Promotional Banner"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals Section */}
          <div className="px-4 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">New Arrivals</h2>
              <a href="#" className="text-sm text-gray-500">
                View All
              </a>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
              {newArrivalsProducts.map((product, index) => (
                <div key={index} className="min-w-[150px] relative">
                  <div className="bg-gray-200 rounded-2xl h-48 w-full relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <p className="font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Products Section */}
          <div className="px-4 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Popular</h2>
              <a href="#" className="text-sm text-gray-500">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {popularProducts.map((product, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400 mr-2">
                        <FaStar size={12} />
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold">{product.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Grid - UPDATED WITH NAVIGATION */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="relative rounded-lg overflow-hidden aspect-square w-full"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Category Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />

                {/* Text Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-100 opacity-80 p-2 rounded-t-2xl">
                  <p className="font-bold text-black text-center">
                    {category.name}
                  </p>
                  <p className="text-sm text-black text-center font-medium">
                    {category.count} Products
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Navigation */}
          <BottomNavigation />
        </>
      ) : (
        // Desktop Layout - Keep original layout
        <>
          {/* Hero Section */}
          <section className="relative text-center bg-gray-100 py-10 flex flex-col items-center md:flex-row md:justify-between md:px-16">
            <img
              src={Advertise}
              alt="Fashion Model"
              className="w-full md:w-2/2 h-auto object-cover"
            />
            <div className="text-center mt-6 md:text-left md:mt-0 md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold">50% Off</h1>
              <p className="text-lg mt-2">On everything today</p>
              <p className="text-sm text-gray-500">
                With code: <span className="font-semibold">FSCREATION</span>
              </p>
              <Button className="mt-4">Get Now</Button>
            </div>
          </section>

          {/* New Arrivals */}
          <section className="relative top-20 py-10">
            <NewArrivals />
          </section>

          {/* Testimonials */}
          <div className="py-10">
            <Testimonials />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

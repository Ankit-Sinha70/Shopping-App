import React, { useState, useEffect } from "react";
import NewArrivals from "../components/NewArrivals";
import Advertise from "/assets/PNG/Advertise.png";
import { Button } from "../components/ui/button";
import Testimonials from "../components/Testimonials";
import newArrivals from "../../public/assets/JPG/new-arrivals.jpg";
import Bags from "../../public/assets/JPG/bags.jpg";
import Shoes from "../../public/assets/JPG/shoes.jpg";
import Cloths from "../../public/assets/JPG/cloths.jpg";
import Jewellary from "../../public/assets/JPG/jwellary.jpg";
import Electronics from "../../public/assets/JPG/electronics.jpg";

import { FaHome } from "react-icons/fa";
import BottomNavigation from "../components/BottomNavigation";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Mobile view categories
  const categories = [
    { name: "New Arrivals", count: 208, image: newArrivals },
    { name: "Clothes", count: 358, image: Cloths },
    { name: "Bags", count: 160, image: Bags },
    { name: "Shoes", count: 230, image: Shoes },
    { name: "Electronics", count: 130, image: Electronics },
    { name: "Jewelry", count: 87, image: Jewellary },
  ];

  return (
    <div className="w-full">
      {isMobile ? (
        // Mobile Layout
        <>
          {/* Top Navigation */}
          <div className="sticky top-0 bg-white z-10 p-4">
            <div className="flex items-center">
              <button className="p-2 bg-black rounded-full mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19L5 12L12 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="mt-4 bg-gray-100 rounded-full flex items-center p-2">
              <svg
                className="ml-2 text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                placeholder="Search Categories"
                className="ml-2 bg-transparent outline-none w-full text-sm text-gray-500"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="relative rounded-lg overflow-hidden aspect-square w-full"
                onClick={() => console.log(`Clicked on ${category.name}`)} // Replace with navigation logic
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
          <BottomNavigation/>
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

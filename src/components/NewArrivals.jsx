import React from "react";
import Slider from "react-slick";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarkJacob from "../../public/assets/PNG/BeFunky-design.png";
import Shoes3 from "../../public/assets/PNG/shoes3.png";
import Shoes1 from "../../public/assets/PNG/shoes1.png";
import tShirt from "../../public/assets/PNG/T-shirt.png";

const NewArrivals = () => {
  const products = [
    {
      name: "The Marc Jacobs",
      description: "Traveler Tote",
      price: "$195.00",
      image: MarkJacob,
    },
    {
      name: "Nike Shoes",
      description: "Clean 90 Triple Sneakers",
      price: "$245.00",
      image: Shoes3,
    },
    {
      name: "The Marc Jacobs",
      description: "Black T-Shirt",
      price: "$125.00",
      image: tShirt,
    },
    {
      name: "Axel Arigato",
      description: "Clean Oversized T-Shirt",
      price: "$110.00",
      image: Shoes1,
    },
  ];

  const discounts = [
    {
      discount: "50% Off",
      description: "On everything today",
      code: "FSCREATION",
      image: "/assets/PNG/discount1.png", // Ensure correct image path
    },
    {
      discount: "70% Off",
      description: "On everything today",
      code: "FSCREATION",
      image: "/assets/PNG/discount2.png", // Ensure correct image path
    },
    {
      discount: "60% Off",
      description: "On Fitness Kits Today",
      code: "FSCREATION",
      image: "/assets/PNG/discount3.png", // Ensure correct image path
    },
  ];

  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Large screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>

      {/* Product Slider */}
      <Slider {...settings} className="mb-10">
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <Card className="p-4 relative text-center shadow-md border border-gray-200">
              <div className="w-full h-56 flex justify-center items-center bg-gray-200 rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-52 object-contain"
                />
              </div>
              <button className="absolute top-2 right-2 text-gray-500">
                <Heart
                  size={20}
                  className="hover:text-red-500 relative right-3 top-3"
                />
              </button>
              <p className="font-semibold mt-3">{product.name}</p>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </Card>
          </div>
        ))}
      </Slider>

      {/* Discount Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Two Small Cards */}
        {discounts.slice(0, 2).map((offer, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col justify-between rounded-lg shadow-md border border-gray-200 relative overflow-hidden"
          >
            <div>
              <h3 className="text-3xl font-bold">{offer.discount}</h3>
              <p className="text-gray-600 text-lg">{offer.description}</p>
              <p className="text-gray-500 text-sm mt-1">
                With code: <span className="font-semibold">{offer.code}</span>
              </p>
              <Button className="mt-3 bg-black text-white px-4 py-2 rounded-md">
                Get Now
              </Button>
            </div>
            <div className="absolute top-3 right-3 w-20 h-20 md:w-24 md:h-24">
              <img
                src={offer.image}
                alt={offer.discount}
                className="w-full h-full object-contain"
              />
            </div>
          </Card>
        ))}

        {/* Large Wide Discount Card */}
        <Card className="lg:col-span-3 p-6 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-md border border-gray-200 relative overflow-hidden bg-gray-100">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold">60% Off</h3>
            <p className="text-gray-600 text-xl">On Fitness Kits Today</p>
            <p className="text-gray-500 text-sm mt-1">
              With code: <span className="font-semibold">FSCREATION</span>
            </p>
            <Button className="mt-3 bg-black text-white px-5 py-3 rounded-md text-lg">
              Get Now
            </Button>
          </div>
          <div className="w-48 h-auto mt-4 md:mt-0 md:ml-6">
            <img
              src={discounts[2].image}
              alt={discounts[2].discount}
              className="w-full h-full object-contain"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewArrivals;

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const NewArrivals = () => {
  const products = [
    {
      name: "The Marc Jacobs",
      description: "Traveler Tote",
      price: "$195.00",
      image: "/images/tote.png",
    },
    {
      name: "Axel Arigato",
      description: "Clean 90 Triple Sneakers",
      price: "$245.00",
      image: "/images/sneakers.png",
    },
    {
      name: "The Marc Jacobs",
      description: "Black T-Shirt",
      price: "$125.00",
      image: "/images/tshirt.png",
    },
    {
      name: "Axel Arigato",
      description: "Clean Oversized T-Shirt",
      price: "$110.00",
      image: "/images/oversized-tshirt.png",
    },
  ];

  const discounts = [
    {
      discount: "50% Off",
      description: "On everything today",
      code: "FSCREATION",
      image: "/images/bag.png",
    },
    {
      discount: "70% Off",
      description: "On everything today",
      code: "FSCREATION",
      image: "/images/watch.png",
    },
    {
      discount: "60% Off",
      description: "On Fitness Kits Today",
      code: "FSCREATION",
      image: "/images/fitness-kit.png",
    },
  ];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {products.map((product, index) => (
          <Card key={index} className="p-4 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-2"
            />
            <button className="absolute top-2 right-2 text-gray-500">
              <Heart size={20} />
            </button>
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {discounts.map((offer, index) => (
          <Card key={index} className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">{offer.discount}</h3>
              <p className="text-gray-600">{offer.description}</p>
              <p className="text-gray-500 text-sm">
                With code: <span className="font-semibold">{offer.code}</span>
              </p>
              <Button className="mt-2">Get Now</Button>
            </div>
            <img src={offer.image} alt={offer.discount} className="w-24 h-24" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

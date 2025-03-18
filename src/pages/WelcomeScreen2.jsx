import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import Model from "../../public/assets/JPG/model1.jpg";
import Model2 from "../../public/assets/JPG/model2.jpg";
import Model3 from "../../public/assets/JPG/model3.jpg";

const steps = [
  {
    image: Model2,
    title: "All Types Offers Within Your Reach",
    description:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
  {
    image: Model3,
    title: "Take Advantage Of The Offer Shopping",
    description:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
  {
    image: Model,
    title: "20% Discount New Arrival Product",
    description:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
];

const WelcomeScreen = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (stepIndex === steps.length - 1) {
      navigate("/home");
    } else {
      setStepIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
        <motion.img
          key={steps[stepIndex].image}
          src={steps[stepIndex].image}
          alt="Slide Image"
          className="w-full h-full object-cover rounded-3xl"
          style={{ transform: "rotateX(15deg) rotateY(-15deg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <CardContent className="p-6 text-left">
          <h2 className="text-xl font-bold">{steps[stepIndex].title}</h2>
          <p className="text-gray-500 mt-2">{steps[stepIndex].description}</p>
          <div className="flex justify-around mt-4">
            {steps.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                  stepIndex === index ? "bg-black w-4" : "bg-gray-400"
                }`}
              ></span>
            ))}
          <div className="mt-4 flex justify-center">
            <Button
              className="rounded-full bg-black text-white p-3 text-xl rounded-xl"
              onClick={handleNext}
            >
              →
            </Button>
          </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;

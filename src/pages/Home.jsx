import React from "react";
import NewArrivals from "../components/NewArrivals";
// import Advertise from "/assets/PNG/Advertise.png";
import Advertise from "/assets/PNG/Advertise.png";
import { Button } from "../components/ui/button";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full">
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
      <section className=" relative top-20 py-10">
        <NewArrivals />
      </section>

      {/* Testimonials */}
      <div className="py-10">
      <Testimonials />
      </div>
    </div>
  );
};

export default Home;

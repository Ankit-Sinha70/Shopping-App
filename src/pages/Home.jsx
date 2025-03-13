import React from "react";
import NewArrivals from "../components/NewArrivals";
// import Advertise from "/assets/PNG/Advertise.png";
import Advertise from "../../public/assets/PNG/Advertise.png";
import { Button } from "../components/ui/button";

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
      <section className="py-10">
        <NewArrivals />
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 bg-white shadow rounded text-center">
              <p className="text-sm">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <p className="font-bold mt-2">Customer {i + 1}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

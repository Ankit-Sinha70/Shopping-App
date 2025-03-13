import React from "react";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-center bg-gray-100 py-10 flex flex-col items-center">
        <img
          src="/images/hero.jpg"
          alt="Fashion Model"
          className="w-full max-w-4xl"
        />
        <div className="text-center mt-6">
          <h1 className="text-5xl font-bold">50% Off</h1>
          <p className="text-lg mt-2">On everything today</p>
          <p className="text-sm text-gray-500">With code: FSCREATION</p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded">
            Get Now
          </button>
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

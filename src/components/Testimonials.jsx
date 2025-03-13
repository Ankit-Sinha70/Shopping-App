import React from "react";
import { Star } from "lucide-react";
import blogHeader from "../../public/assets/PNG/blog-header-3.png";

const testimonials = [
  {
    name: "Malison Aved",
    date: "20 June, 2021",
    image: blogHeader,
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    name: "Williams Deo",
    date: "20 June, 2021",
    image: blogHeader,
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    name: "Selena Eva",
    date: "20 June, 2021",
    image: blogHeader,
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    name: "Hasan Mahmud",
    date: "20 June, 2021",
    image: blogHeader,
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
];
const Testimonials = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-left mb-8">Testimonials</h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-object-fit h-16 mx-auto rounded-xl  mb-3"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
            <div className="flex justify-center my-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

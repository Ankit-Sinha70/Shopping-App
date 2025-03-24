import React from "react";

const reviews = [
  {
    id: 1,
    name: "Malison Aved",
    date: "20 June, 2021",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 2,
    name: "Williams Deo",
    date: "20 June, 2021",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 3,
    name: "Selena Eva",
    date: "22 June, 2021",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 4,
    name: "Hasan Mahmud",
    date: "24 June, 2021",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 5,
    name: "Mossarof Hossen",
    date: "24 June, 2021",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 5,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
];

const ReviewList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10 max-w-2xl mx-auto mb-20">
      <h3 className="text-lg font-bold mb-4">Reviews Client</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <div className="flex text-yellow-500 text-sm sm:text-base">
                  {"★".repeat(review.rating)}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;

"use client"
import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
   comment: "I had an amazing shopping experience! The product quality was just as described, and the packaging was secure. Delivery was on time, and the customer support team was very helpful. I’ll definitely be coming back for more!",
    date: "08-09-2022",
    totalSpend: "$500",
    totalReviews: 10,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "I had an amazing shopping experience! The product quality was just as described, and the packaging was secure. Delivery was on time, and the customer support team was very helpful. I’ll definitely be coming back for more!",
    rating: 4,
    date: "12-05-2021",
    totalSpend: "$750",
    totalReviews: 15,
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    comment: "I had an amazing shopping experience! The product quality was just as described, and the packaging was secure. Delivery was on time, and the customer support team was very helpful. I’ll definitely be coming back for more!",
    date: "22-11-2023",
    totalSpend: "$1,200",
    totalReviews: 20,
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="flex items-center border p-8 rounded-lg shadow-md w-full  mb-4">
     <div className="w-[10%] items-end">
     <img
        src={review.avatar}
        alt={review.name}
        className="w-16 h-16 rounded-full mx-auto"
      />
     </div>
        <div className="flex flex-col justify-between items-start w-[25%] ">
          <h3 className="font-semibold text-lg w-full ">{review.name}</h3>
        <p className="text-gray-600">Total Spend: <b>{review.totalSpend}</b></p>
        <p className="text-gray-600">Total Reviews: <b>{review.totalReviews}</b></p>
      </div>
     <div className="w-[65%] flex flex-col space-y-4">
    <div className="flex gap-8">
    <div className="text-yellow-500">{"★".repeat(review.rating)}</div>
    <span className="text-gray-500">{review.date}</span>
    </div>
     <p className="text-sm">{review.comment}</p>
     </div>
   


    </div>
  );
};

const ReviewList = () => {
  return (
    <div className="flex flex-col items-center">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;

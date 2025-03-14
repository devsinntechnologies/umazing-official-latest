// @ts-nocheck
import React, { useEffect, useState } from "react";
import Stars from "@/components/Stars";
import Image from "next/image";
import { X } from "lucide-react";

const ReviewCards = ({ review }) => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setData(review?.data || []);
  }, [review]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
      <div className="w-full space-y-4 divide-y-2">
        {data.map((item, index) => {
          const createdAtDate = new Date(item.createdAt);
          const hours = String(createdAtDate.getHours()).padStart(2, "0");
          const minutes = String(createdAtDate.getMinutes()).padStart(2, "0");
          const day = createdAtDate.getDate();
          const month = createdAtDate.toLocaleString("default", {
            month: "long",
          });
          const year = createdAtDate.getFullYear();
          const formattedDate = `${hours}:${minutes} - ${month} ${day} ${year}`;

          return (
            <div key={index} className="bg-white p-4 lg:p-6 space-y-3 lg:space-y-4 w-full">
              {/* User Profile */}
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border">
                  {item.User?.imageUrl ? (
                    <Image
                      src={`http://97.74.89.204/${item.User.imageUrl}`}
                      alt={item.User?.name || "User image"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-lg font-semibold">
                      {item.User?.name?.[0] || "A"}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base">
                    {item.User?.name || "Anonymous"}
                  </h1>
                  <p className="text-sm text-secondary">United Kingdom</p>
                </div>
              </div>
              {/* Comment Section */}
              <div className="text-xs lg:text-sm">
                {item.comment || "No comment provided."}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className=" flex items-center gap-2">
                  <Stars rating={item.star} />
                  <p className="text-gray-500 text-sm">({item.star})</p>
                </div>
                <p>{formattedDate}</p>
              </div>

              {/* Commented Out Image Section */}
              {/* {item.Review_Images && item.Review_Images.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {item.Review_Images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="group relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(image.imageUrl)}
                    >
                      <Image
                        src={`http://97.74.89.204/${image.imageUrl}`}
                        alt={`Review image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          );
        })}
      </div>
  );
};

export default ReviewCards;

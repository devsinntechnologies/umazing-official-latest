// @ts-nocheck
"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Loader2 } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/UseMediaQuery';

const Gallery = ({ data }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isSSR, setIsSSR] = useState(true);
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Track active image index
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data]);

  if (isSSR) return null;

  const direction = !isDesktop ? "horizontal" : "vertical";

  return (
    <div className="w-full h-full flex flex-row-reverse">
      {/* Main Image Slider */}
      <Swiper
        loop={true}
        autoplay
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="w-full flex-1 h-[542px] lg:h-[690px] bg-[#E5E7EB] rounded-md flex items-center justify-center overflow-hidden border border-border shadow-md p-2"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index
      >
        {isImageLoading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        )}
        {images?.map((image, index) => (
          <SwiperSlide key={index} className='!flex items-center justify-center w-full h-full p-4'>
            <Image
              width={400}
              height={300}
              src={`http://97.74.89.204/${image.imageUrl}`}
              alt={`Image ${index}`}
              onLoad={() => setIsImageLoading(false)}
              className={`w-full p-3 object-cover mx-auto border-2 ${isImageLoading ? "invisible" : ""}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div
        className={`px-4 ${
          images.length > 5 ? "overflow-y-auto" : "flex md:flex-col justify-center"
        } w-full md:w-[112px] max-h-full`}
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={isDesktop ? 5 : 3} // Show fewer thumbnails on mobile
          direction={direction} // Apply dynamic direction
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="w-full h-full py-4 px-3"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index} className={`w-full rounded-md !h-[100px] lg:!h-[130px] !flex !justify-center !items-center border ${activeIndex === index ? "border-primary" : "border-border"} hover:border-primary/50`}>
              <Image
                width={100}
                height={100}
                className={`w-full rounded-md object-cover cursor-pointer`}
                src={`http://97.74.89.204/${image.imageUrl}`}
                alt={`Thumbnail ${index}`}
                onClick={() => thumbsSwiper?.slideTo(index)} // Set main image when thumbnail clicked
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;

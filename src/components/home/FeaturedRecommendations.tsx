"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useGetAllProductsQuery } from "@/hooks/UseProducts";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedRecommendations = () => {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 8;
  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery({ pageNo, pageSize, skip: true });

  useEffect(() => {
    if (productsData?.success) {
      setProducts((prev) => [...prev, ...productsData.data]);
    }
  }, [productsData, isError]);

  return (
    <div className="space-y-6 md:space-y-10">
      <div className="w-full flex items-center justify-center md:justify-between">
        <div className="hidden md:block md:w-40" />
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold">
          Featured Recommendations
        </h1>
        <Link href="/products" className="hidden md:block">
          <Button variant="link">View All</Button>
        </Link>
      </div>
      <div className="relative h-fit w-full sm:px-12 md:px-18 md:space-y-0 space-y-5">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            1320: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            592: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          keyboard
          modules={[Navigation, Keyboard]}
          className="px-10"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton className="w-full h-[250px] sm:h-[300px] lg:h-[386px]" />
                </SwiperSlide>
              ))
            : products.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard
                    isDiscount={false}
                    isTrending={false}
                    product={product}
                    index={index}
                    setProducts={setProducts}
                    products={products}
                    imageClassName="h-[230px]"
                  />
                </SwiperSlide>
              ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <Button className="swiper-button-prev relative sm:absolute left-[30%] sm:left-0 top-1/2 sm:-translate-y-1/2 z-10 size-12">
          <ArrowLeft className="size-6" />
        </Button>
        <Button className="swiper-button-next relative sm:absolute -right-[40%] sm:right-0 top-1/2 sm:-translate-y-1/2 z-10 size-12">
          <ArrowRight className="size-6" />
        </Button>

      </div>
    </div>
  );
};

export default FeaturedRecommendations;

import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedRecommendations from "@/components/home/FeaturedRecommendations";
import FlashDealsProducts from "@/components/home/FlashDealsProducts";
import OffersBanner from "@/components/home/OffersBanner";
import ProductCategories from "@/components/home/ProductCategories";
import TrendingProducts from "@/components/home/TrendingProducts";
import React from "react";

const Page = () => {
  return (
    <div className="w-full space-y-20">
      {/* offers */}
      <OffersBanner />
      <div className="space-y-20 px-6 sm:px-10 md:px-15 py-5">
         {/* Flash Deals products */}
         <FeaturedRecommendations />
         {/* Flash Deals products */}
         <FlashDealsProducts />
        {/* product categories */}
        <ProductCategories />
        {/* featured products */}
        <TrendingProducts />
      </div>
    </div>
  );
};

export default Page;

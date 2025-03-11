"use client"
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { useGetUserFavouriteQuery, useRemoveFromFavouriteMutation } from "@/hooks/UseFavourite";
import { useSelector } from "react-redux";
import withAuth from "@/components/hoc/withAuth";
import { Skeleton } from "@/components/ui/skeleton"; // ✅ Import Skeleton

const Page = () => {
  const breadcrumbItems = [{ label: "Favourites" }];
  const userId = useSelector((state: any) => state.authSlice?.user?.id);
  const isLoggedIn = useSelector((state: any) => state.authSlice.isLoggedIn);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (userId && isLoggedIn) {
      setTriggerFetch(true);
    }
  }, [userId, isLoggedIn]);

  const { data: wishlistItems, isLoading } = useGetUserFavouriteQuery(userId);

  const [removeFromFavourite] = useRemoveFromFavouriteMutation();

  useEffect(() => {
    if (wishlistItems?.data) {
      setWishlist(wishlistItems.data);
    }
  }, [wishlistItems]);

  const handleRemove = (favouriteId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== favouriteId));
    removeFromFavourite(favouriteId);
  };

  return (
    <div className="w-full px-15 py-6 space-y-12">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="w-full space-y-12">
        {/* heading and searchbar */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-start justify-center gap-1 flex-col">
            <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl">
              Favourites
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-secondary">
              Find your saved items and get ready to order them
            </p>
          </div>
          <div className="w-60 lg:w-94 h-[50px] flex items-center border-[1.5px] border-border rounded-sm drop-shadow-xs py-2 px-3 text-sm text-black">
            <input
              type="text"
              placeholder="Search favourites"
              className="w-full h-full outline-0 border-0 px-2 text-sm !text-black placeholder:text-black"
            />
            <button className="rounded rounded-l-none cursor-pointer">
              <Search size={24} />
            </button>
          </div>
        </div>
        {/* favourite products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7">
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[386px] bg-gray-200 rounded-sm"
                />
              ))
            : wishlist.map((fav, index) => (
                <ProductCard
                  key={fav.id}
                  product={fav.Product}
                  index={index}
                  setProducts={setWishlist}
                  products={wishlist}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);

"use client"
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { useGetUserFavouriteQuery, useRemoveFromFavouriteMutation } from "@/hooks/UseFavourite";
import { useSelector } from "react-redux";
import withAuth from "@/components/hoc/withAuth";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const Page = () => {
  const breadcrumbItems = [{ label: "Favourites" }];
  const userId = useSelector((state: any) => state.authSlice?.user?.id);
  const isLoggedIn = useSelector((state: any) => state.authSlice.isLoggedIn);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFavourite, setFilteredFavourite] = useState([]);

  useEffect(() => {
    if (userId && isLoggedIn) {
      setTriggerFetch(true);
    }
  }, [userId, isLoggedIn]);

  const { data: favouriteItems, isLoading } = useGetUserFavouriteQuery(userId);

  const [removeFromFavourite, {isLoading:favouriteRemoving}] = useRemoveFromFavouriteMutation();

  useEffect(() => {
    if (favouriteItems?.data) {
      setFavourite(favouriteItems.data);
    }
  }, [favouriteItems]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredFavourite(favourite);
      } else {
        const filtered = favourite.filter((fav) =>
          fav.Product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFavourite(filtered);
      }
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, favourite]);
  
  const handleRemove = async (favouriteId: string) => {
    const toastId = toast.loading("Removing from Favourites");
  
    try {
      const result = await removeFromFavourite(favouriteId).unwrap();
      
      if (result.success) {
        setFavourite((prevFavourite) => prevFavourite.filter((item) => item.id !== favouriteId));
        toast.dismiss(toastId);
        toast.success("Removed from Favourites");
      } else {
        toast.dismiss(toastId);
        toast.error("Failed to remove from Favourites");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Error removing favourite");
      console.error("Error removing favourite:", error);
    }
  };
  

  return (
    <div className="w-full px-5 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 lg:px-15 lg:py-6 space-y-12">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="w-full space-y-12">
        {/* heading and searchbar */}
        <div className="w-full flex md:items-center justify-between flex-col md:flex-row gap-5">
          <div className="flex items-start justify-center gap-1 flex-col">
            <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl">
              Favourites
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-secondary">
              Find your saved items and get ready to order them
            </p>
          </div>
          <div className="w-full md:w-60 lg:w-94 h-[50px] flex items-center border-[1.5px] border-border rounded-sm drop-shadow-xs py-2 px-3 text-sm text-black">
          <input
              type="text"
              placeholder="Search favourites"
              className="w-full h-full outline-0 border-0 px-2 text-xs md:text-sm !text-black placeholder:text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="rounded rounded-l-none cursor-pointer">
              <Search size={24} />
            </button>
          </div>
        </div>
        {/* favourite products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-7">
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[386px] bg-gray-200 rounded-sm"
                />
              ))
            : filteredFavourite.map((fav, index) => (
                <ProductCard
                  key={fav.id}
                  product={fav.Product}
                  index={index}
                  setProducts={setFavourite}
                  products={favourite}
                  isFavoritePage
                  handleFavRemove={handleRemove}
                  favouriteId={fav.id}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);

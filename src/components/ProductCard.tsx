// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { Trash2, Heart, Loader2, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Stars from "./Stars";
import { CURRENCY } from "@/lib/constants";
import {
  useAddToFavouriteMutation,
  useRemoveFromFavouriteProductIdMutation,
} from "@/hooks/UseFavourite";
import { useAddToCartMutation, useGetUserCartQuery } from "@/hooks/UseCart";

const ProductCard = ({
  isTrending,
  isDiscount,
  product,
  index,
  setProducts,
  products,
  className
}) => {
  const userId = useSelector((state: any) => state.authSlice?.user?.id);
  const isLoggedIn = useSelector((state: any) => state.authSlice.isLoggedIn);
  const pathname = usePathname();
  const router = useRouter();
  const quantity = 1;

  const [
    addToCart,
    { isSuccess: cartSuccess, isLoading: addingToCart, isError: cartError },
  ] = useAddToCartMutation();
  const [
    addToFavourite,
    { isSuccess: addSuccess, isLoading: addingToFav, isError: addError },
  ] = useAddToFavouriteMutation();
  const [
    removeFromFavourite,
    {
      isSuccess: removeSuccess,
      isLoading: removingFromFav,
      isError: removeError,
    },
  ] = useRemoveFromFavouriteProductIdMutation();

  useEffect(() => {
    if (isLoggedIn) {
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = {
          ...updatedProducts[index],
          isFavorite: product.isFavorite,
        };
        return updatedProducts;
      });
    } else {
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = {
          ...updatedProducts[index],
          isFavorite: false,
        };
        return updatedProducts;
      });
    }
    if (cartSuccess) {
      toast.success("Added to Cart");
    }
  }, [isLoggedIn, index, setProducts, product.isFavorite, cartSuccess]);

  // Add to cart functionality
  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      toast.error("Not Logged In", {
        action: {
          label: "Login",
          onClick: () => router.push("/auth/login"),
        },
      });
      return;
    }
    toast("Processing", {
      description: "Updating your cart...",
    });

    try {
      await addToCart({ ProductId: product.id, quantity });
    } catch (error) {}
  };

  // Add to favorites
  const handleAddToFavorites = async () => {
    if (!isLoggedIn) {
      toast.error("Not Logged In", {
        action: {
          label: "Login",
          onClick: () => router.push("/auth/login"),
        },
      });
      return;
    }

    toast("Adding", {
      description: "Item adding to Favourite",
    });

    try {
      await addToFavourite({ UserId: userId, ProductId: product.id });

      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = {
          ...updatedProducts[index],
          isFavorite: true,
        };
        return updatedProducts;
      });

      // refetchFavourites();
    } catch (error) {}
  };

  // Remove from favorites
  const handleRemove = async () => {
    if (!isLoggedIn) {
      toast.error("Not Logged In", {
        action: {
          label: "Login",
          onClick: () => router.push("/auth/login"),
        },
      });
      return;
    }

    toast.info("Removing");

    try {
      await removeFromFavourite(product.id);

      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = {
          ...updatedProducts[index],
          isFavorite: false,
        };
        return updatedProducts;
      });
    } catch (error) {}
  };

  const isSeller = pathname === "/seller" || pathname === "/seller/products";

  return (
    <div
      key={index}
      className={cn(
        "w-full h-auto relative overflow-hidden border border-border hover:border-primary",
        className
      )}
    >
      <Link href={`/details/${product.id}`} className="w-full flex flex-col">
        <div className="bg-[#FAFAFA]">
          <Image
            className="w-full h-[140px] md:h-[180px] lg:h-[200px] xl:h-[230px] object-cover"
            width={500}
            height={500}
            src={
              product?.Product_Images[0]?.imageUrl
                ? `http://97.74.89.204/${product?.Product_Images[0]?.imageUrl}`
                : ""
            }
            alt={product.name}
          />
        </div>
        <div className="w-full space-y-3 px-2 py-4">
          <div className="space-y-2">
            <h3 className="text-sm md:text-base text-secondary capitalize truncate-multiline-2 h-12">
              {product.name}
            </h3>
            <p className="text-base md:text-lg xl:text-2xl font-semibold text-black">
              {CURRENCY}
              <span className=""> {product.basePrice}.00</span>
            </p>
            {isDiscount && (
              <p className="text-sm md:text-base xl:text-lg font-semibold text-secondary line-through -mt-1">
                {product.basePrice}.00
              </p>
            )}
          </div>
          <div className="h-fit flex items-center justify-start gap-3 text-sm">
            <Stars rating={product.review} />
            <p className="text-base font-bold">{product.review}</p>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 flex items-center">
        {!isSeller && (
          <button
            className="p-2 rounded-full bg-gray-200 size-10"
            onClick={product.isFavorite ? handleRemove : handleAddToFavorites}
          >
            {/* Show loader while adding/removing */}
            {addingToFav || removingFromFav ? (
              <Loader2 size={20} className="animate-spin text-black" />
            ) : product.isFavorite ? (
              <Heart size={20} color="red" fill="red" className="size-6" />
            ) : (
              <Heart size={20} className="size-6 text-black font-light" />
            )}
          </button>
        )}
      </div>
      {isTrending && (
        <p className="absolute top-4 left-4 rounded-full px-2 py-1 text-[10px] tracking-wider bg-destructive text-white font-semibold shadow-lg">
          Trending
        </p>
      )}
    </div>
  );
};

export default ProductCard;

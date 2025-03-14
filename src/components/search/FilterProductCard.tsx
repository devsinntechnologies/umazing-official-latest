// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { Trash2, Heart, Loader2, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Stars from "../Stars";
import { CURRENCY } from "@/lib/constants";
import {
  useAddToFavouriteMutation,
  useRemoveFromFavouriteProductIdMutation,
} from "@/hooks/UseFavourite";
import { useAddToCartMutation, useGetUserCartQuery } from "@/hooks/UseCart";

interface FilterProductCardProps {
  className?: string;
  product: any;
  index: number;
}

const FilterProductCard: React.FC<FilterProductCardProps> = ({
  className,
  product,
  index,
}) => {
  const router = useRouter();

  return (
    <div
      key={index}
      className={cn(
        "w-full h-auto relative overflow-hidden border border-border hover:border-primary",
        className
      )}
    >
      <Link href={`/products/${product.id}`} className="w-full flex flex-col">
        <div className="bg-[#FAFAFA]">
          <Image
            className="w-full h-[130px] md:h-[160px] lg:h-[180px] xl:h-[200px] object-cover"
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
            <div className="h-fit flex items-center justify-start gap-3 text-sm">
              <Stars rating={product.review} />
              <p className="text-base font-bold">{product.review}</p>
            </div>
            <h3 className="text-xs md:text-sm text-black capitalize truncate-multiline-2 h-10">
              {product.name}
            </h3>
            <p className="text-xs md:text-sm font-semibold text-primary">
              {CURRENCY}
              <span className=""> {product.basePrice}.00</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FilterProductCard;

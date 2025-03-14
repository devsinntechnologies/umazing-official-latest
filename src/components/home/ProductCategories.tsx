"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useGetCategoriesV2Query } from "@/hooks/UseCategories";
import { BASE_IMAGE } from "@/lib/constants";
import { Skeleton } from "../ui/skeleton";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useGetCategoriesV2Query({
    // skip: true,
  });

  useEffect(() => {
    if (categoriesData?.success) {
      setCategories(categoriesData.data);
    }
  }, [categoriesData]);

  const categoryStyles = [
    { bg: "#EEEEEE", colSpan: "col-span-2", rowSpan: "xl:row-span-3" },
    { bg: "#D4EDF8", colSpan: "col-span-1", rowSpan: "xl:row-span-3" },
    { bg: "#FEF9C4", colSpan: "col-span-1", rowSpan: "xl:row-span-3" },
    { bg: "#F2E7E3", colSpan: "col-span-1", rowSpan: "xl:row-span-3" },
    { bg: "#E3F2E6", colSpan: "col-span-1", rowSpan: "xl:row-span-3" },
    { bg: "#FAE8E8", colSpan: "col-span-2", rowSpan: "xl:row-span-3" },
  ];

  return (
    <div className="space-y-6 md:space-y-10">
      <div className="w-full flex items-center justify-between">
        {/* empty div for alignments */}
        <div className="hidden md:block md:w-40" />
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-center font-bold">
          Product Categories
        </h1>
        <Link href="/categories">
          <Button variant="link">View All</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-rows-6 gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`${categoryStyles[index]?.colSpan} ${categoryStyles[index]?.rowSpan} rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between`}
                style={{ backgroundColor: categoryStyles[index]?.bg }}
              >
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-40 w-full" />
              </div>
            ))
          : categories.slice(0, 6).map((category, index) => (
              <div
                key={category.id}
                className={`${categoryStyles[index]?.colSpan} ${categoryStyles[index]?.rowSpan} rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between`}
                style={{ backgroundColor: categoryStyles[index]?.bg }}
              >
                <div className="w-full flex items-start justify-center flex-col">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {category.name}
                  </h4>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">
                    {category.subCategory?.[0]?.name || ""}
                  </h3>
                </div>
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={BASE_IMAGE + category.imageUrl}
                    alt={category.name}
                    width={290}
                    height={235}
                    className="w-[78%] md:w-[200px]"
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductCategories;

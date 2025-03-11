
"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useGetAllProductsQuery } from "@/hooks/UseProducts";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  const pageSize = 8;

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery({
    pageNo,
    pageSize,
    skip: true
  });

  useEffect(() => {
    if (productsData?.success) {
      setProducts((prev) => [...prev, ...productsData.data]);
      // setHasMore(pageNo < Math.ceil(productsData.total / pageSize));
    }
    // if (isError) setHasMore(false);
  }, [productsData, isError]);

  return (
    <div className="space-y-6 md:space-y-10">
      <div className="w-full flex items-center justify-between">
        {/* empty div for alignments */}
        <div className="hidden md:block md:w-40" />
      <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-center font-bold">
      Trending Products
      </h1>
      <Link href='/products'>
      <Button variant="link">
        View All
      </Button>
      </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7">
      {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-full h-[250px] sm:h-[300px] lg:h-[386px] bg-gray-200 rounded-sm"
              />
            ))
          : products.map((product, index) => (
              <ProductCard
                isDiscount={false}
                isTrending={true}
                key={index}
                product={product}
                index={index}
                setProducts={setProducts}
                products={products}
              />
            ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

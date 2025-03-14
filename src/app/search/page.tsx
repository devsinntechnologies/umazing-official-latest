"use client";
import React from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import FilteredProducts from "@/components/search/FilteredProducts";
import FilterBar from "@/components/search/FilterBar";

const Page = () => {
  const breadcrumbItems = [{ label: "Search" }];

  return (
    <div className="w-full px-5 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 lg:px-15 lg:py-6 space-y-12">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="w-full flex items-start justify-between gap-4">
        {/* sidebar */}
        <div className="hidden md:block w-[300px] h-full max-h-[1080px] sticky">
          <FilterBar />
        </div>
        {/* filtered products  */}
        <div className="w-full space-y-8">
          {/* FilteredProducts */}
          <FilteredProducts />
        </div>
      </div>
    </div>
  );
};

export default Page;

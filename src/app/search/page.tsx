"use client";
import React from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import FilteredProducts from "@/components/search/FilteredProducts";

const Page = () => {
  const breadcrumbItems = [{ label: "Search" }];

  return (
    <div className="w-full px-15 py-6 space-y-12">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="w-full flex items-center justify-between gap-4">
        {/* sidebar */}
        <div className="w-[300px] h-full max-h-[1080px] border sticky">
          {" "}
          sidebar
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

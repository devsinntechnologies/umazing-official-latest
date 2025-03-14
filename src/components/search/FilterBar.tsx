// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams, useRouter } from "next/navigation";
import { useGetCategoriesQuery } from "@/hooks/UseCategories";
import { useGetAllOffersQuery } from "@/hooks/UseOffers";
import { Filter } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { CURRENCY } from "@/lib/constants";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import PriceFilter from "./PriceFilter";

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch categories and offers data
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery({});
  const { data: offers, isLoading: isLoadingOffers } = useGetAllOffersQuery({});

  // Initialize filter states from search parameters
  const initialParams = {
    condition: searchParams.get("condition") || "",
    city: searchParams.get("city") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    claim: searchParams.get("claim") === "true",
    categoryId: searchParams.get("categoryId") || "",
    offerId: searchParams.get("offerId") || "",
  };
  const [minPrice, setMinPrice] = useState(
    initialParams.minPrice ? parseInt(initialParams.minPrice) : 0
  );
  const [maxPrice, setMaxPrice] = useState(
    initialParams.maxPrice ? parseInt(initialParams.maxPrice) : 0
  );

  const conditionData = ["New", "Used"];
  const [selectedParams, setSelectedParams] = useState(initialParams);

  // Update URL with filter changes
  const updateURL = (key, value) => {
    const currentParams = new URLSearchParams(window.location.search);
    if (value !== "") {
      currentParams.set(key, value.toString());
    } else {
      currentParams.delete(key);
    }
    router.push(`?${currentParams.toString()}`);
  };

  // Save specific filter
  const handleSaveFilter = (key) => {
    updateURL(key, selectedParams[key]);
  };

  // Reset specific filter
  const handleResetFilter = (key) => {
    setSelectedParams((prev) => ({
      ...prev,
      [key]: "",
    }));
    updateURL(key, "");
  };

  const handleSelect = (key, value) => {
    setSelectedParams((prev) => ({
      ...prev,
      [key]: value,
    }));

    updateURL(key, value)
  };

  const handlePriceChange = () => {
    const currentParams = new URLSearchParams(window.location.search);

    if (minPrice && maxPrice) {
      currentParams.set("minPrice", minPrice);
      currentParams.set("maxPrice", maxPrice);
    } else {
      currentParams.delete("minPrice");
      currentParams.delete("maxPrice");
    }

    router.push(`?${currentParams.toString()}`);
  };

  const clearPriceFilters = () => {
    setMinPrice(0);
    setMaxPrice(0);

    const currentParams = new URLSearchParams(window.location.search);
    currentParams.delete("minPrice");
    currentParams.delete("maxPrice");

    router.push(`?${currentParams.toString()}`);
  };
  const handleResetFilters = () => {
    setSelectedParams({
      categoryId: "",
      city: "",
      claim: false,
      minPrice: 0,
      maxPrice: 0,
      condition: "", 
      offerId: "",
    });

    const currentParams = new URLSearchParams(window.location.search);
    currentParams.delete("categoryId");
    currentParams.delete("city");
    currentParams.delete("claim");
    currentParams.delete("minPrice");
    currentParams.delete("maxPrice");
    currentParams.delete("condition"); // Added condition deletion
    currentParams.delete("offerId"); // Added offerId deletion

    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div>
      <div className="hidden md:block w-full max-h-full h-fit overflow-y-scroll space-y-4">
        {/* Categories Section */}
        <div className="w-full space-y-3">
          <h1 className="text-base">Category</h1>
          <div className="w-full space-y-3">
            {isLoadingCategories ? (
              <div className="w-full space-y-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} className="w-full h-7 rounded-md " />
                ))}
              </div>
            ) : (
              <RadioGroup
                value={selectedParams.categoryId}
                onValueChange={(value) => handleSelect("categoryId", value)}
              >
                {categories?.data?.map((category) => (
                  <div
                    className="flex items-center gap-4"
                    key={category.id}
                  >
                    <RadioGroupItem value={category.id} id={category.id} />
                    <Label
                      htmlFor={category.id}
                      className={`text-sm font-normal ${
                        selectedParams.categoryId === category.id
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      {category.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        </div>

        <PriceFilter/>
      </div>
    </div>
  );
};

export default FilterBar;

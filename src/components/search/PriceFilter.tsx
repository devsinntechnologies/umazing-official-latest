// @ts-nocheck
"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import PriceSlider from "./PriceSlider";

const PriceFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const predefinedRanges = [
    { label: "All Price", min: null, max: null },
    { label: "Under $20", min: 0, max: 20 },
    { label: "$25 to $100", min: 25, max: 100 },
    { label: "$100 to $300", min: 100, max: 300 },
    { label: "$300 to $500", min: 300, max: 500 },
    { label: "$500 to $1,000", min: 500, max: 1000 },
    { label: "$1,000 to $10,000", min: 1000, max: 10000 },
    { label: "Custom Price", min: null, max: null },
  ];

  const initialParams = {
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  };

  const [minPrice, setMinPrice] = useState(
    initialParams.minPrice ? parseInt(initialParams.minPrice) : 0
  );
  const [maxPrice, setMaxPrice] = useState(
    initialParams.maxPrice ? parseInt(initialParams.maxPrice) : 0
  );
  const [selectedRange, setSelectedRange] = useState("All Price");

  const updateURL = (min, max) => {
    const currentParams = new URLSearchParams(window.location.search);
    if (min !== null && max !== null) {
      currentParams.set("minPrice", min);
      currentParams.set("maxPrice", max);
    } else {
      currentParams.delete("minPrice");
      currentParams.delete("maxPrice");
    }
    router.push(`?${currentParams.toString()}`);
  };

  const handlePriceRangeChange = (label, min, max) => {
    setSelectedRange(label);
    if (label === "All Price") {
      updateURL(null, null);
    } else if (label !== "Custom Price") {
      setMinPrice(min);
      setMaxPrice(max);
      updateURL(min, max);
    }
  };

  const applyCustomPrice = () => {
    updateURL(minPrice, maxPrice);
  };

  return (
    <div className="w-full space-y-3">
      <h1 className="text-base">Price Range</h1>
      <RadioGroup
        value={selectedRange}
        onValueChange={(label) => {
          const range = predefinedRanges.find((r) => r.label === label);
          handlePriceRangeChange(label, range?.min, range?.max);
        }}
      >
        {predefinedRanges.map((range) => (
          <div className="flex items-center gap-4" key={range.label}>
            <RadioGroupItem value={range.label} id={range.label} />
            <Label htmlFor={range.label} 
             className={`text-sm font-normal ${
              selectedRange === range.label
                ? "text-primary"
                : "text-secondary"
            }`}
            >{range.label}</Label>
          </div>
        ))}
      </RadioGroup>

      <div className="w-full space-y-3">
        <PriceSlider
          min={0}
          max={10000}
          value={[minPrice, maxPrice]}
          onValueChange={([min, max]) => {
            setMinPrice(min);
            setMaxPrice(max);
          }}
          disabled={selectedRange !== "Custom Price"}
        />
        <div className="w-full flex flex-row gap-x-3 items-center text-sm">
          <input
            type="number"
            min={0}
            max={999999}
            value={minPrice}
            placeholder="Min Price"
            className="w-[48%] border px-3 py-2 rounded"
            onChange={(e) => setMinPrice(Math.max(0, parseInt(e.target.value) || 0))}
            disabled={selectedRange !== "Custom Price"}
          />
          <input
            type="number"
            min={minPrice + 1}
            max={999999}
            value={maxPrice}
            placeholder="Max Price"
            className="w-[48%] border px-3 py-2 rounded"
            onChange={(e) => setMaxPrice(Math.max(minPrice + 1, parseInt(e.target.value) || minPrice + 1))}
            disabled={selectedRange !== "Custom Price"}
          />
        </div>
        <Button onClick={applyCustomPrice} disabled={selectedRange !== "Custom Price"} className="w-full py-1 text-sm">Apply Filter</Button>
      </div>
    </div>
  );
};

export default PriceFilter;

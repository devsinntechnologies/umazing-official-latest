// @ts-nocheck
"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";

const PriceSlider = ({ min, max, value, onValueChange, disabled }) => {
  return (
    <div className="w-full px-2 py-4">
      <Slider
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        className={`w-full ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      <div className="flex justify-between text-sm mt-2">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
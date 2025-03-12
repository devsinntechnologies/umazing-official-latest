"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CardData {
  title: string;
  value: number;
  impression: string;
  bgColor: string;
}

const cards: CardData[] = [
  {
    title: "New Orders",
    value: 245,
    impression: "Impression - 20%",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    title: "Pending Orders",
    value: 128,
    impression: "Impression - 15%",
    bgColor: "bg-[#F3E8FF]", 
  },
  {
    title: "Completed Orders",
    value: 512,
    impression: "Impression - 30%",
    bgColor: "bg-[#FEF2F2]", 
  },
];

const OrderCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} p-4 h-[137px] w-full  rounded-lg shadow-sm flex flex-col justify-between`}
        >
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-800">{card.value}</span>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="border-r pr-2">{card.impression}</span>
              <span className="p-2 bg-white rounded-full shadow">
                <ArrowUpRight className="h-4 w-4 text-blue-600" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCards;

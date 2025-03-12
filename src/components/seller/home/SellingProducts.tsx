"use client";

import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  sold: number;
}

const products: Product[] = [
  {
    id: 122789,
    name: "Air Jordan 3 Retro",
    image: "/images/products/shoes.png",
    sold: 128,
  },
  {
    id: 122789,
    name: "Home Sofa",
    image: "/images/products/sofa.png",
    sold: 100,
  },
  {
    id: 122789,
    name: "Sony Headphones",
    image: "/images/products/headphone.png",
    sold: 80,
  },
];

const SellingProducts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border-2 p-5">
      <h2 className="text-lg font-semibold mb-4">Most Selling Products</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 relative rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-gray-500 text-xs">#{product.id}</p>
              </div>
            </div>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm font-semibold rounded-md">
              {product.sold} Sold
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingProducts;

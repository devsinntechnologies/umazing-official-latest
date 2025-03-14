"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Listing {
  orderNo: string;
  productName: string;
  customer: string;
  price: string;
}

const listings: Listing[] = [
  {
    orderNo: "#824435",
    productName: "Sony 360 Cam",
    customer: "James Brown",
    price: "$2600",
  },
  {
    orderNo: "#202153",
    productName: "Samsung Watch",
    customer: "Richard Clark",
    price: "$739.0",
  },
  {
    orderNo: "#122789",
    productName: "Air Jordan 3 Retro",
    customer: "David Taylor",
    price: "$850.0",
  },
];

const ActiveListing: React.FC = () => {
  return (
    <div className="bg-white border-2 rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4">Active Listings</h2>
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b py-2 text-gray-500 text-sm">
            <TableHead className="w-[150px]">Order No.</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-right">Price</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.orderNo} >
              <TableCell className="font-medium">{listing.orderNo}</TableCell>
              <TableCell>{listing.productName}</TableCell>
              <TableCell>{listing.customer}</TableCell>
              <TableCell className="text-right">{listing.price}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActiveListing;

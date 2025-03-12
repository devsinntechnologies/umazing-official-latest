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
  orderDate: string;
  productName: string;
  productPrice: string;
  status: string;
}

const listings: Listing[] = [
  {
    orderNo: "#824435",
    orderDate: "12 Jan,2025",
    productName: "Fake Plant",
    productPrice: "$2600",
    status: "Pending",
  },
  {
    orderNo: "#202153",
    orderDate: "25 jan, 2025",
    productName: "Coffee Table",
    productPrice: "$739.0",
    status: "Cancelled",

  },
  {
    orderNo: "#122789",
    orderDate: "14 Feb, 2025",
    productName: "Home Sofa",
    productPrice: "$850.0",
    status: "Delivered",
    
  },
  {
    orderNo: "#824435",
    orderDate: "12 Jan,2025",
    productName: "Fake Plant",
    productPrice: "$2600",
    status: "Pending",
  },
  {
    orderNo: "#202153",
    orderDate: "25 jan, 2025",
    productName: "Coffee Table",
    productPrice: "$739.0",
    status: "Cancelled",

  },
  {
    orderNo: "#122789",
    orderDate: "14 Feb, 2025",
    productName: "Home Sofa",
    productPrice: "$850.0",
    status: "Delivered",
    
  },
  {
    orderNo: "#824435",
    orderDate: "12 Jan,2025",
    productName: "Fake Plant",
    productPrice: "$2600",
    status: "Pending",
  },
  {
    orderNo: "#202153",
    orderDate: "25 jan, 2025",
    productName: "Coffee Table",
    productPrice: "$739.0",
    status: "Cancelled",

  },
  {
    orderNo: "#122789",
    orderDate: "14 Feb, 2025",
    productName: "Home Sofa",
    productPrice: "$850.0",
    status: "Delivered",
    
  },
];

const ActiveListing: React.FC = () => {
  return (
    <div className="bg-white border-2 rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4">Active Listings</h2>
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b py-2 text-gray-500 text-sm">
            <TableHead className="w-[150px]">Order ID</TableHead>
            <TableHead>Ordered Date</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead className="text-right">Product Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.orderNo} className="py-20 " >
              <TableCell className="font-medium">{listing.orderNo}</TableCell>
              <TableCell>{listing.orderDate}</TableCell>
              <TableCell>{listing.productName}</TableCell>
              <TableCell className="text-right">{listing.productPrice}</TableCell>
              <TableCell className="text-right">{listing.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActiveListing;

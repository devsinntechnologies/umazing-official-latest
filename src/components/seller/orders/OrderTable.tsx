"use client";

import React, { useState } from "react";
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
    orderDate: "14 Jan 2025",
    productName: "Fake Plant",
    productPrice: "$12.00",
    status: "Delivered",
  },
  {
    orderNo: "#824435",
    orderDate: "15 Jan 2025",
    productName: "Coffee Table",
    productPrice: "$12.00",
    status: "Pending",
  },
  {
    orderNo: "#824435",
    orderDate: "16 Jan 2025",
    productName: "Home Sofa",
    productPrice: "$12.00",
    status: "Cancelled",
  },
  {
    orderNo: "#824435",
    orderDate: "17 Jan 2025",
    productName: "Samsung Galaxy Tab",
    productPrice: "$12.00",
    status: "Delivered",
  },
  {
    orderNo: "#824435",
    orderDate: "18 Jan 2025",
    productName: "Air Jordan 3 Retro",
    productPrice: "$12.00",
    status: "Booked",
  },
  {
    orderNo: "#824435",
    orderDate: "19 Jan 2025",
    productName: "Fabric Armchair",
    productPrice: "$12.00",
    status: "Pending",
  },
  {
    orderNo: "#824435",
    orderDate: "19 Jan 2025",
    productName: "Fabric Armchair",
    productPrice: "$12.00",
    status: "Pending",
  },
];

const ActiveListing: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredListings = activeTab === "All" 
    ? listings 
    : listings.filter(listing => listing.status === activeTab);

  return (
    <div className="bg-white border-2 rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4">All Orders</h2>
      <div className="flex w-full justify-between mb-4 border-b-2 ">
        <button
          className={`px-4 py-2 ${activeTab === "All" ? " text-primary" : "text-black"}`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "Booked" ? " text-primary " : "text-black"}`}
          onClick={() => setActiveTab("Booked")}
        >
         Booked Orders
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "Pending" ? " text-primary " : "text-black"}`}
          onClick={() => setActiveTab("Pending")}
        >
          Pending Orders
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "Delivered" ? " text-primary " : "text-black"}`}
          onClick={() => setActiveTab("Delivered")}
        >
          Delivered Orders
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "Cancelled" ? " text-primary " : "text-black"}`}
          onClick={() => setActiveTab("Cancelled")}
        >
          Cancelled Orders
        </button>
      </div>
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
          {filteredListings.map((listing) => (
            <TableRow key={listing.orderNo} className="py-20">
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
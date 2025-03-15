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
import {  useEffect } from "react";
import { CURRENCY } from "@/lib/constants";
import { useGetSellerOrdersQuery, useUpdateOrderMutation } from "@/hooks/UseOrders";
import { toast } from "sonner";


const ActiveListing: React.FC = () => {
  const [updateOrderStatus] = useUpdateOrderMutation();
  const [selectedTab, setSelectedTab] = useState("All");
  const { data: ordersData, isLoading, isError } = useGetSellerOrdersQuery({});
  const [orders, setOrders] = useState([]);

  // Update orders when data changes
  useEffect(() => {
    if (ordersData?.data) {
      setOrders(ordersData.data);
    }
  }, [ordersData]);

  // Show error toast when fetching orders fails
  useEffect(() => {
    if (isError) {
      toast.error( "Error", { description: "Failed to load orders. Please try again."});
    }
  }, [isError]);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      await updateOrderStatus({ id, status }).unwrap();
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === id ? { ...order, status } : order))
      );
      toast.success( "Success",{ description: "Order status updated successfully" });
    } catch (error) {
      toast.error( "Error", {description: "Failed to update order status"});
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-600 mt-4">Loading orders...</p>;
  }

  const filterOrders = () => {
    if (selectedTab === "All") return orders;
    return orders.filter((order) => order.status?.toLowerCase() === selectedTab.toLowerCase());
  };



  return (
    <div className="bg-white border-2 rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4">All Orders</h2>
      <div className="flex w-full justify-between mb-4 border-b-2 ">
        <button
          className={`px-4 py-2 ${selectedTab === "All" ? " text-primary" : "text-black"}`}
          onClick={() => setSelectedTab("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === "Shipped" ? " text-primary " : "text-black"}`}
          onClick={() => setSelectedTab("Shipped")}
        >
       Shipped
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === "In Processing" ? " text-primary " : "text-black"}`}
          onClick={() => setSelectedTab("In Processing")}
        >
       In Processing
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === "Out of Stock" ? " text-primary " : "text-black"}`}
          onClick={() => setSelectedTab("Out of Stock")}
        >
          Out of Stock 
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === "Delivered" ? " text-primary " : "text-black"}`}
          onClick={() => setSelectedTab("Delivered")}
        >
          Delivered Orders
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === "Cancelled" ? " text-primary " : "text-black"}`}
          onClick={() => setSelectedTab("Cancelled")}
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
          {filterOrders().map((order) => (
            <TableRow key={order.orderNo} className="py-20">
              <TableCell className="font-medium">{order.OrderId || "No order Id available"}</TableCell>
              <TableCell>{order?.Order?.orderDate || "No Date available"}</TableCell>
              <TableCell>{order?.Product?.name || "Unknown Product"}</TableCell>
              <TableCell className="text-right">{CURRENCY} {order?.price || "0"}</TableCell>
              <TableCell className="text-right">{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActiveListing;
"use client";
import { useState } from "react";
import withAuth from "@/components/hoc/withAuth";
import { Pencil } from 'lucide-react';
const Page = () => {
  const [addresses, setAddresses] = useState([
    {
      name: "John Doe",
      address: "123 Main St, Springfield, IL",
      phoneNo: "123-456-7890",
    },
  ]);

  const addAddress = () => {
    setAddresses([
      ...addresses,
      {
        name: "",
        address: "",
        phoneNo: "",
      },
    ]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Address Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addresses.map((address, index) => (
          <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Address {index + 1}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {address.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {address.address}
            </p>
            <p className="text-gray-700">
              <strong>Phone No:</strong> {address.phoneNo}
            </p>
            <Pencil className="w-4 cursor-pointer h-4 mt-8 text-gray-500" />
          </div>
        ))}
        <div
          className="bg-white p-6 rounded-lg border border-gray-200 shadow flex flex-col gap-2 items-center justify-center cursor-pointer"
          onClick={addAddress}
        >
          <span className="text-3xl font-bold text-gray-500">+</span>
          <span className="text-2xl font-semibold text-black">Add Address</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);

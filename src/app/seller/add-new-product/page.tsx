import React from "react";
import FileUpload from "@/components/seller/product/FileUpload"; // Import FileUpload component
import Variants from "@/components/seller/product/Variants";
import {Button} from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col space-y-6 py-6">
      <h1 className="text-center font-bold text-3xl text-gray-800">
        Add New Product
      </h1>
      <div><FileUpload /></div>
 

    <div className="bg-white  p-6 rounded-lg border-2">
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">SKU</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
            </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Price</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Quantity</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Product Description
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
            rows={4}
          ></textarea>
        </div>
      </div>
    </div>
    <div className="bg-white  p-6 rounded-lg border-2">
      <h2 className="text-xl font-semibold mb-4">Category Details</h2>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Sub Category</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
            </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Category Type</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
<Variants/>
<Button>Add Product  </Button>
    </div>
  );
};

export default Page;

import React from "react";
import { CircleUser } from "lucide-react";
import { Phone } from "lucide-react";
import { Check } from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";
const TrackOrderPage = () => {
  return (
    <>
      <div className="px-10 py-10">
        <h1 className="text-center text-3xl font-bold mb-5">
          Track your order
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col mb-5">
            <div className="bg-primary text-sm text-white py-1 px-3 rounded-full w-fit">
              Delivered
            </div>
            <div className="text-left mt-2">
              <h2 className="text-xl font-bold">Order Status</h2>
              <p>Order ID: #12345</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 lg:p-7 p-4    rounded-lg shadow flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="bg-[#E5E7EB] text-[#9A4584] p-3 rounded-lg">
                <CircleUser className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold">Customer Name</h2>
            </div>
            <p className="text-gray-700 text-xl ">John Doe</p>
          </div>
          <div className="bg-white border border-gray-200 lg:p-7 p-4    rounded-lg shadow flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="bg-[#E8F8F7] text-[#2BA1A0] p-3 rounded-lg">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold">Phone Number</h2>
            </div>
            <p className="text-gray-700 text-xl ">+1234567890</p>
          </div>
          <div className="bg-white border border-gray-200 lg:p-7 p-4    rounded-lg shadow flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="bg-blue-50 text-blue-500 p-3 rounded-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold">Address</h2>
            </div>
            <p className="text-gray-700 text-xl ">1234 Main St, Anytown, USA</p>
          </div>
        </div>

        {/* bottom part  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-10">
          {/* left part  */}
          <div>
            <h2 className="text-2xl font-bold mb-5">Items for the Order</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow flex gap-4 justify-between items-end">
                <div className="flex gap-4">
                  <div>
                    <Image
                      src="/path/to/image.jpg"
                      alt="Item Image"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Item Name</h3>
                    <p className="text-gray-700">Quantity: 1</p>
                  </div>
                </div>
                <div className="text-lg font-semibold">Price: $100</div>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow flex gap-4 justify-between items-end">
                <div className="flex gap-4">
                  <div>
                    <Image
                      src="/path/to/image.jpg"
                      alt="Item Image"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Item Name</h3>
                    <p className="text-gray-700">Quantity: 1</p>
                  </div>
                </div>
                <div className="text-lg font-semibold">Price: $100</div>
              </div>
            </div>
          </div>
          {/* right part  */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-5">Order Tracking</h2>
            <div className="bg-white border border-gray-200 md:p-10 p-4 rounded-lg shadow">
              <div className="relative space-y-10">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 -z-0"></div>
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 rounded-full p-2 z-1    border border-gray-300 bg-white">
                    <MapPin className="w-8 h-8 " />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-black font-bold">
                      Estimated Delivered in 24 Feb 2025
                    </span>
                    <span className="text-gray-700 text-sm">
                      Products Delivered
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 rounded-full p-2 z-1    border border-gray-300 bg-white">
                    <MapPin className="w-8 h-8 " />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-black font-bold">
                      23 Feb 2025, 10:30 AM
                    </span>
                    <span className="text-gray-700 text-sm">
                      Products being delivered
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 rounded-full bg-primary p-2 z-1 text-white">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col text-primary           gap-2">
                    <span className=" font-bold">
                      20 Feb - Product in courier warehouse
                    </span>
                    <span className=" text-sm">
                      Products in the courier warehouse
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 rounded-full bg-primary p-2 z-1 text-white">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col text-primary gap-2 ">
                    <span className=" font-bold">
                      18 Feb - Product in courier warehouse
                    </span>
                    <span className=" text-sm">
                      Products in the courier warehouse
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-5">Order Summary</h2>
            <div className="bg-white border border-gray-200 p-5 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Shipping:</span>
                <span className="text-gray-900 font-semibold">$10</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Discount:</span>
                <span className="text-gray-900 font-semibold">-$5</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Tax:</span>
                <span className="text-gray-900 font-semibold">$8</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="text-gray-700">Total Cost:</span>
                <span className="text-gray-900 font-bold">$113</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderPage;

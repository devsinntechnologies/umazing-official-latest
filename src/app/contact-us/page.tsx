import Banner from "@/components/sections/Banner";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Banner
        heading="Contact Us"
        para="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <div className="container mx-auto lg:px-16 md:px-10 px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Contact Us
            </h3>
            <h2 className="text-3xl font-semibold mb-4">
              Get in Touch with us{" "}
            </h2>
            <p className="text-gray-600 mb-6 leading-6">
              Have questions or need assistance? Our team is always ready to
              help! Whether you're looking for the best shopping deals, need
              support, or want to collaborate, we're just a message away.
            </p>
            <ul className="flex flex-col gap-8 lg:py-10 py-6">
              <li className="flex items-center gap-4">
                <Image
                  src="/icons/gmail.svg"
                  alt="email"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col">
                  <span className="text-black text-base font-semibold">
                    Email Address
                  </span>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-700 underline"
                  >
                    info@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/icons/phone.svg"
                  alt="phone"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col">
                  <span className="text-black text-base font-semibold">
                    Phone Number
                  </span>
                  <a href="tel:+1234567890" className="text-gray-700 underline">
                    +1 234 567 890
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/icons/location.svg"
                  alt="location"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col">
                  <span className="text-black text-base font-semibold">
                    Address
                  </span>
                  <span className="text-gray-700">
                    123 Main St, Springfield, IL
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <form className="space-y-6 bg-gray-50 md:py-9 md:px-10 py-5 px-3 rounded-lg border border-gray-200">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phno"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

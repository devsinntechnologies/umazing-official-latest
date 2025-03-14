"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="w-full bg-[#232323] px-5 sm:px-6 py-8 md:pb-10 md:pt-20 md:px-10 lg:px-15">
      {/* logo, links */}
      <div className="w-full flex items-start md:items-center justify-center flex-col gap-6">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Umazing-official"
            width={100}
            height={40}
            className="w-42 md:w-[98px]"
          />
        </Link>
        {/* social links */}
        <div className="flex items-center justify-center gap-6">
          {[
            {
              href: "https://facebook.com/",
              icon: "/icons/layout/footer/facebook.svg",
              alt: "Facebook",
            },
            {
              href: "https://twitter.com/",
              icon: "/icons/layout/footer/twitter.svg",
              alt: "Twitter",
            },
            {
              href: "https://instagram.com/",
              icon: "/icons/layout/footer/instagram.svg",
              alt: "Instagram",
            },
            {
              href: "https://linkedin.com/",
              icon: "/icons/layout/footer/linkedin.svg",
              alt: "LinkedIn",
            },
            {
              href: "https://youtube.com/",
              icon: "/icons/layout/footer/youtube.svg",
              alt: "YouTube",
            },
          ].map(({ href, icon, alt }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon}
                alt={alt}
                width={24}
                height={24}
                className="h-6"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* other Actions */}
      <div className="w-full flex justify-between gap-y-8 lg:gap-6 flex-wrap text-white text-base pt-16 pb-8">
        {/* shop */}
        <div className="w-full sm:w-[33%] md:w-auto">
          <h3 className="text-xl font-bold mb-3">Shop</h3>
          <ul className="space-y-2">
            {[
              { label: "New In", href: "#" },
              { label: "Women", href: "#" },
              { label: "Men", href: "/shop?category=men" },
              { label: "Shoes", href: "#" },
              { label: "Bag & Accessories", href: "#" },
              { label: "Top Brands", href: "#" },
              { label: "Sale & Special Offers", href: "#" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* information */}
        <div className="w-full sm:w-[33%] md:w-auto">
          <h3 className="text-xl font-bold mb-3">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* customer */}
        <div className="w-full sm:w-[33%] md:w-auto">
          <h3 className="text-xl font-bold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            {[
              { label: "Search Terms", href: "#" },
              { label: "Advanced Search", href: "#" },
              { label: "Orders & Returns", href: "#" },
              { label: "Contact Us", href: "/contact-us" },
              { label: "Store Locations", href: "#" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* newsletter */}
        <div className="w-full lg:w-[400px]">
          <h3 className="text-xl font-bold mb-3">Newsletter Sign Up</h3>
          <p>
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          {/* input with button */}
          <form className="w-full h-12 bg-white rounded flex items-center drop-shadow-sm overflow-hidden my-3">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-full outline-0 border-0 px-4 text-sm !text-black"
            />
            <Button className="h-full rounded rounded-l-none">
              <SendHorizonal size={24} />
            </Button>
          </form>
        </div>
      </div>
      <hr className="w-full  bg-white"/>
      {/* copyright and payment methods */}
      <div className="w-full flex items-start md:items-center justify-between flex-col-reverse md:flex-row text-white mt-5 md:mt-10 text-center gap-6">
        <p>&copy; {currentYear}, Umazing. All rights reserved.</p>
        <div className="flex items-center justify-start md:justify-center gap-6 mt-2">
          {[
            { src: "/icons/layout/footer/visa.svg", alt: "Visa" },
            { src: "/icons/layout/footer/applePay.svg", alt: "Apple Pay" },
            { src: "/icons/layout/footer/payPal.svg", alt: "PayPal" },
            { src: "/icons/layout/footer/mastercard.svg", alt: "Mastercard" },
          ].map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={40}
              height={24}
              className="w-11 md:w-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

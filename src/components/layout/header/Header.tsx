import Image from "next/image";
import Link from "next/link";
import React from "react";
import Auth from "./Auth";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* top bar for sale */}
      <div className="w-full bg-[#262626] overflow-x-scroll whitespace-nowrap py-3">
        <div className="flex items-center gap-24 px-4">
          {[
            {
              name: "Summer Sale",
              description: "Up to 70% off selected items",
            },
            {
              name: "Summer Sale",
              description: "Up to 70% off selected items",
            },
            {
              name: "Summer Sale",
              description: "Up to 70% off selected items",
            },
            {
              name: "Summer Sale",
              description: "Up to 70% off selected items",
            },
          ].map(({ name, description }, index) => (
            <p
              key={index}
              className="text-xs text-white flex items-center gap-3"
            >
              <Image
                src="/icons/layout/header/spark.svg"
                alt=""
                width={16}
                height={16}
                className="w-4"
              />
              <span className="font-bold">{name}:</span> {description}
            </p>
          ))}
        </div>
      </div>
      {/* main header */}
      <nav className="w-full flex items-center justify-between px-15 py-5">
        <div className="max-w-52 xl:w-64 2xl:w-72">
          <Image
            src="/logo.svg"
            alt="Umazing-official"
            width={100}
            height={40}
            className="w-[98px]"
          />
        </div>
        {/* navlinks */}
        <ul className="flex items-center justify-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/blog", label: "Blog" },
            { href: "/about-us", label: "About Us" },
            { href: "/shop", label: "Shop" },
            { href: "/contact-us", label: "Contact Us" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href ? "text-primary" : "text-secondary"
                } rounded-md`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* authlink */}
        <div className="flex items-center justify-center gap-5 xl:gap-8">
          <div className="flex items-center justify-center gap-3 xl:gap-4">
            {[
              {
                href: "/search",
                icon: "/icons/layout/header/search.svg",
                alt: "search",
              },
              {
                href: "/favourites",
                icon: "/icons/layout/header/heart.svg",
                alt: "favourites",
              },
              {
                href: "/cart",
                icon: "/icons/layout/header/shoppingBag.svg",
                alt: "cart",
              },
            ].map(({ href, icon, alt }) => (
              <Link
                key={href}
                href={href}
                className={`size-9 rounded-full flex items-center justify-center ${
                  pathname === href ? "!text-white bg-primary" : "bg-ring"
                }`}
              >
                <Image
                  src={icon}
                  alt={alt}
                  width={20}
                  height={20}
                  className="w-5"
                />
              </Link>
            ))}
          </div>
          <Auth />
        </div>
      </nav>
    </header>
  );
};

export default Header;

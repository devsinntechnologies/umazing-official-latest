import Image from "next/image";
import Link from "next/link";
import React from "react";
import Auth from "./Auth";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Heart, Menu, Search } from "lucide-react";
import Searchbar from "./Searchbar";
import { useMediaQuery } from "@/hooks/UseMediaQuery";

const Header = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="w-full" suppressHydrationWarning>
      {/* top bar for sale */}
      <div className="w-full bg-[#262626] overflow-x-scroll whitespace-nowrap py-3 no-scrollbar">
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
      <nav className="w-full flex items-center justify-between px-5 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 lg:px-15 lg:py-5">
        <Menu className="block lg:hidden" />
        <div className="w-fit xl:w-64 2xl:w-72 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Umazing-official"
              width={100}
              height={40}
              className="w-30 lg:w-[98px]"
            />
          </Link>
        </div>
        {/* navlinks */}
        <ul className="hidden lg:flex items-center justify-center gap-4 lg:gap-6">
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
                className={`text-sm lg:text-base ${
                  pathname === href ? "text-primary" : "text-secondary"
                } rounded-md`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* authlink */}
        <div
          className={`flex items-center justify-center ${
            isLoggedIn ? "gap-2 sm:gap-3 xl:gap-4" : "gap-3 md:gap-5 xl:gap-8"
          }`}
          suppressHydrationWarning
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 xl:gap-4">
            <Link
              key="/search"
              href="/search"
              className={`hidden size-9 rounded-full md:flex items-center justify-center ${
                pathname === "/search" ? "!text-white bg-primary" : "bg-ring"
              }`}
            >
              {/* <Image
                src="/icons/layout/header/search.svg"
                alt="search"
                width={20}
                height={20}
                className="w-5"
              /> */}
              <Search className="size-5"/>
            </Link>
            <Link
              key="/favourites"
              href="/favourites"
              className={`size-9 rounded-full flex items-center justify-center ${
                pathname === "/favourites"
                  ? "!text-white bg-primary"
                  : "bg-ring"
              }`}
            >
              {/* <Image
                src="/icons/layout/header/heart.svg"
                alt="favourites"
                width={20}
                height={20}
                className="w-5"
              /> */}
              <Heart className="size-5"/>
            </Link>
            <Link
              key="/cart"
              href="/cart"
              className={`size-9 rounded-full flex items-center justify-center ${
                pathname === "/cart" ? "!text-white bg-primary" : "bg-ring"
              }`}
            >
              <Image
                src="/icons/layout/header/shoppingBag.svg"
                alt="cart"
                width={20}
                height={20}
                className="w-5"
              />
            </Link>
          </div>
          <Auth />
        </div>
      </nav>
      {!isDesktop && (
        <div className="w-full px-5 py-2 sm:px-6 sm:py-3">
          <Searchbar />
        </div>
      )}
    </header>
  );
};

export default Header;

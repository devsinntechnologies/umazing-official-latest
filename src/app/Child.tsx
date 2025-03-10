"use client";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Suspense, ReactNode } from "react";

interface ChildProps {
  children: ReactNode;
}

export default function Child({ children }: ChildProps) {
  // const noFooterRoutes = [
  //   '/cart',
  //   '/wishlist',
  //   '/checkout',
  //   '/seller',
  //   '/seller/dashboard',
  // ];

  // const shouldShowFooter = !noFooterRoutes.some(route => pathname?.startsWith(route));

  return (
    <>
      <Header/>
      {/* For Main loader */}
      <Suspense fallback={<>loading...</>}>     
        <div className="px-6 sm:px-10 md:px-15 py-5 w-full min-h-auto">
          {children}
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
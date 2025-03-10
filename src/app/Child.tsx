"use client";

import Header from "@/components/layout/header/Header";
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
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 w-full min-h-auto">
          {children}
        </div>
      </Suspense>
      {/* {shouldShowFooter && <Footer />} */}
    </>
  );
}
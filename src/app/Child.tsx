"use client";

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
      {/* <Navbar /> */}
      {/* For Main loader */}
      <Suspense fallback={<>loading...</>}>     
        <div className=" w-full min-h-auto">
          {children}
        </div>
      </Suspense>
      {/* {shouldShowFooter && <Footer />} */}
    </>
  );
}
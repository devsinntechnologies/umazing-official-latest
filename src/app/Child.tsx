"use client";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Suspense, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ChildProps {
  children: ReactNode;
}

export default function Child({ children }: ChildProps) {
  const pathname = usePathname()
  const noHeaderRoutes = [
    '/auth',
  ];
  const noFooterRoutes = [
    '/auth',
    '/checkout',
  ];

  const showHeader = !noHeaderRoutes.some(route => pathname?.startsWith(route));
  const showFooter = !noFooterRoutes.some(route => pathname?.startsWith(route));

  return (
    <>
      {showHeader && <Header/>}
      {/* For Main loader */}
      <Suspense fallback={<>loading...</>}>     
        <div className="px-6 sm:px-10 md:px-15 py-5 w-full min-h-auto">
          {children}
        </div>
      </Suspense>
      {showFooter && <Footer />}
    </>
  );
}
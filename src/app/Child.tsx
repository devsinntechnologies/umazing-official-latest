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
    '/seller'
  ];
  const noFooterRoutes = [
    '/auth',
    '/checkout',
    '/seller'
  ];

  const showHeader = !noHeaderRoutes.some(route => pathname?.startsWith(route));
  const showFooter = !noFooterRoutes.some(route => pathname?.startsWith(route));

  return (
    <>
      {showHeader && <Header/>}
      {/* For Main loader */}
      <Suspense fallback={<>loading...</>}>     
        <div className="w-full min-h-[420px] pt-3">
          {children}
        </div>
      </Suspense>
      {showFooter && <Footer />}
    </>
  );
}
"use client"
import React from 'react'
import { Calendar, Home, Box, SquareRoundCorner, ChartColumnDecreasing,Star, Layers } from "lucide-react"
import {
  Sidebar as UiSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    title: "Home",
    url: "/seller/",
    icon: Home,
  },
  {
    title: "Product Listings",
    url: "/seller/product-listings",
    icon: Box ,
  },
  {
    title: "Orders",
    url: "/seller/orders",
    icon: SquareRoundCorner,
  },
  {
    title: "Reviews",
    url: "/seller/reviews",
    icon: Star,
  },
  {
    title: "Analytics & Reports",
    url: "/seller/analytics-&-reports",
    icon: ChartColumnDecreasing ,
  },
  {
    title: "Stock Management",
    url: "/seller/stock-management",
    icon: Layers,
  },
]

const SellerSidebar: React.FC  = () => {
  return (
    <UiSidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='w-full items-center flex justify-center pt-10 pb-20'>
          <div className="max-w-52 xl:w-64 2xl:w-72">
        <Link href='/'>
        <Image
            src="/logo.svg"
            alt="Umazing-official"
            width={100}
            height={40}
            className="w-[98px]"
          />
        </Link>
        </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className='hover:bg-[#FFE8D9]'>
                    <a href={item.url} >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UiSidebar>
  )
}

export default SellerSidebar

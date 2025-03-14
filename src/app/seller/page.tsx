"use client"
import React from 'react'
import SalesAnalyticsCard from '@/components/seller/home/SalesAnalyticsCard'
import SalePerformance from '@/components/seller/home/SalePerformance';
import SellingProducts from '@/components/seller/home/SellingProducts';
import ActiveListing from '@/components/seller/home/ActiveListing';

const page: React.FC  = () => {
  return (
    <div className='w-full space-y-4 py-5'>
      <div className='flex flex-col justify-start pb-5 '>
        <h1 className='text-4xl font-bold'>Welcome, John!</h1>
        <p className='text-md'>Here’s an overview of your store’s performance today</p>
      </div>
      <div>
        <h1 className='w-full font-bold text-xl py-2'>Sales Analytics</h1>
        <SalesAnalyticsCard />
      </div>
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'> <SalePerformance /></div>
        <div className='w-[30%]'><SellingProducts /></div>
      </div>
      <ActiveListing />
    </div>
  )
}

export default page
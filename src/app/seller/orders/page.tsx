"use client"
import OrderCards from '@/components/seller/orders/orderCards'
import OrderTable from '@/components/seller/orders/OrderTable'
import React from 'react'

const page: React.FC  = () => {
  return (
    <div className='flex flex-col space-y-4 py-5'>
        <h1 className='text-4xl font-bold pb-5'>Orders</h1>
      <div><OrderCards/></div>
       <div><OrderTable/></div>
    </div>
  )
}

export default page
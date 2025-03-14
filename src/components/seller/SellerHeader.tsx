import React from 'react'
import { Search, BellDot } from 'lucide-react';
import Image from 'next/image';

const SellerHeader: React.FC  = () => {
  return (
    <div className='w-full items-center justify-between  h-24 flex '>

<div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search Product"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
      />
    </div>
   <div className='flex gap-3'>
   <div className='bg-gray-300 p-2 rounded-full border-2'>
    <BellDot />
    </div>
    <div className="flex items-center gap-3">
      <Image
        src={"/images/seller/profile.png"}
        alt="User Avatar"
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
     <div className='flex flex-col '>
     <span className='font-medium'>Azan Asim</span>
     <span className='text-xs'>azanasim7417@gmail.com</span>
     </div>
    </div>
   </div>
    </div>
  )
}

export default SellerHeader
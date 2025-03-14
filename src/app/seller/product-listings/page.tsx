import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image';


const products = [
  {
    id: 1,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
  {
    id: 2,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
  {
    id: 3,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
   {
    id: 4,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  }, 
  {
    id: 5,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  }, 
  {
    id: 6,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
   {
    id: 7,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  }, 
  {
    id: 8,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
   {
    id: 9,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
   {
    id: 10,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
   {
    id: 11,
    name: "Fabric Armchair",
    image: "/images/product-card/armchair.png",
    available: 24,
    sold: 26,
    price: 120.0,
  },
  
];

const page = () => {
  return (
    <div className='flex flex-col space-y-4 py-5'>
<div className='flex w-full justify-between pb-5'>
  <h1 className='text-4xl font-bold'>Product Listing</h1>
  <Button>Add New Product</Button>
</div>
<div className='w-full h-[500px] flex gap-4 '>
  <div className='w-[60%] h-full'>
  <div className='w-full grid grid-cols-2 gap-4 h-[150px]'>
    {/* Sales card */}
      <div className='flex flex-col justify-between w-full border-2 rounded-lg p-5'>
        <h1 className='text-xl font-medium'>Total Sales</h1>
        <div className='flex justify-between items-center'>
          <h2>$325k</h2>
         <p className='px-3 py-1 rounded-lg border-2 border-primary'>13.8%</p>
          <p className='text-xs text-gray-400'>From last month</p>
        </div>
      </div>
    {/* growth card */}
      <div className='flex flex-col justify-between w-full  border-2 rounded-lg p-5'>
        <h1 className='text-xl font-medium'>Monthly Growth</h1>
        <div className='flex justify-between items-center'>
          <h2>$325k</h2>
         <p className='px-3 py-1 rounded-lg border-2 border-red-400'>13.8%</p>
          <p className='text-xs text-gray-400'>From last month</p>
        </div>
      </div>
  
    </div>
    {/* Statistics */}
    <div className='w-full h-full border-2 rounded-lg'></div>
  </div>
  {/* Available Products */}
  <div className="w-[40%] h-full border-2 rounded-lg p-5 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Available Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200"
          >
            <Image
              src={product.image}
              alt={product.name}
              height={100}
              width={100}
              className="w-full object-contain"
            />
            <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm">
              {product.available} Available | {product.sold} Sold
            </p>
            <p className="text-orange-500 font-semibold text-lg">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
</div>
    </div>
  )
}

export default page
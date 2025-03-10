import FeaturedProducts from '@/components/home/FeaturedProducts'
import ProductCategories from '@/components/home/ProductCategories'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full space-y-20'>
      {/* offers */}
      {/* product categories */}
      <ProductCategories/>
      {/* featured products */}
      <FeaturedProducts/>
    </div>
  )
}

export default Page
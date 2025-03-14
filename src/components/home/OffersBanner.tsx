import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const OffersBanner = () => {
  return (
    <div className='w-full md:h-[360px] lg:h-[480px] xl:h-[578px] grid grid-cols-1 md:grid-cols-2'>
      <div className="bg-[#F7F8F2] px-6 py-12 sm:px-10 md:pl-15 md:pr-12 lg:pr-14 xl:pr-15 space-y-6 lg:space-y-8 xl:space-y-10 flex justify-center flex-col">
       <div className="space-y-5 md:space-y-4">
       <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl text-[#1F2937] font-bold'>
          <span className='text-primary'>Sale 30%</span>
          <br />
          Off Everything
        </h1>
        <p className='text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
       </div>
       <Button className='!px-10 w-fit'>
        Shop Now <ArrowRight size={14}/>
       </Button>
      </div>
      <div className="">
        <Image src='/images/home/offerBanner.png' alt='' width={722} height={578} className='size-full'/>
      </div>
    </div>
  )
}

export default OffersBanner
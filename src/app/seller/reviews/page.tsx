"use client"
import ReviewCard from '@/components/seller/reviews/ReviewCard'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col space-y-4 py-5'>
      <h1 className='text-4xl font-bold pb-5'>Reviews</h1>
      <div className='grid grid-cols-3 gap-2'>
        <div className='w-full border-2 h-40 rounded-2xl flex flex-col justify-between space-y-3 p-4 '>
          <h1 className='text-2xl font-bold'>Total Reviews</h1>
          <div className='flex gap-20 items-center'>
            <h1>10.0k</h1>
            <p className='bg-green-200 rounded-3xl px-3 py-1'>5.3</p>
          </div>
          <p>Growth in reviews on this year</p>
        </div>
        <div className='w-full border-2 h-40 rounded-2xl flex flex-col justify-between space-y-3 p-4 '>
          <h1 className='text-2xl font-bold'>Average Rating</h1>
          <div className='flex gap-20 items-center'>
            <h1>10.0k</h1>
            <p className='bg-blue-200 rounded-3xl px-3 py-1'>5.3</p>
          </div>
          <p>Average rating on this year</p>
        </div>
        <div className='w-full border-2 h-40 rounded-2xl flex flex-col justify-between space-y-3 p-4 '>
          <h1 className='text-2xl font-bold'>Total Reviews</h1>
          <div className='flex gap-20 items-center'>
            <h1>10.0k</h1>
            <p className='bg-pink-200 rounded-3xl px-3 py-1'>5.3</p>
          </div>
          <p>Growth in reviews on this year</p>
        </div>

      </div>
      <div>
        <ReviewCard />
      </div>
    </div>
  )
}

export default page
'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

interface SalesData {
  title: string;
  amount: string;
  percentage: string;
  description: string;
  icon: React.ElementType;
}

const salesData: SalesData[] = [
  {
    title: 'Total Sales',
    amount: '$452,863',
    percentage: '+5.4%',
    description: 'Increase total sales by 5.4% from last month',
    icon: TrendingUp,
  },
  {
    title: 'Total Profit',
    amount: '$320,500',
    percentage: '+3.2%',
    description: 'Net revenue grew by 3.2% from last month',
    icon: DollarSign,
  },
  {
    title: 'Total Orders',
    amount: '1,245',
    percentage: '+8.1%',
    description: 'Gained 8.1% more customers this month',
    icon: Users,
  },
];

const SalesAnalyticsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {salesData.map((data, index) => (
        <div key={index} className="bg-white border-2 p-4 rounded-lg h-48 flex w-full items-center">
          <div className='flex flex-col space-y-4 w-[70%]'>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-100 rounded-full">
                <data.icon className="text-purple-600" size={20} />
              </div>
              <span className="font-semibold text-gray-800">{data.title}</span>
            </div>
            <div className='flex gap-5 items-center'>
              <h2 className="text-2xl font-bold">{data.amount}</h2>
              <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-sm font-semibold">
                {data.percentage}
              </span>
            </div>
            <p className="text-gray-500 text-xs">{data.description}</p>
          </div>
          <div className='w-[30%] flex justify-center'>
            <Image
              src="/images/seller/salesgraph.png"
              alt='graph'
              height={80}
              width={80}
            />
          </div>
        </div>
      ))}
    </div>

  );
};

export default SalesAnalyticsCard;
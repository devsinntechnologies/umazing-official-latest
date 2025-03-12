"use client";
import { useState } from 'react';
import withAuth from "@/components/hoc/withAuth";
import Account from '@/components/profile/Account';
import Security from '@/components/profile/Security';

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="container w-full mx-auto px-4 py-8 bg-[#F9F9F9]">
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-8 mx-auto">
        <div className="inline-flex bg-white border rounded-lg p-1">
          <button
            className={`py-2 lg:px-24 md:px-16 px-6 cursor-pointer text-sm font-medium rounded-md transition-all ${
              activeTab === 'account'
                ? 'bg-[hsl(48,96%,89%)] text-primary shadow'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button
            className={`py-2 lg:px-24 md:px-20 cursor-pointer sm:px-16 px-3 text-sm font-medium rounded-md transition-all ${
              activeTab === 'security'
                ? 'bg-[hsl(48,96%,89%)] text-primary shadow'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
        </div>
      </div>

      {/* Tab Content */}
     
        {activeTab === 'account' ? <Account /> : <Security />}
    </div>
  );
};

export default withAuth(EditProfile);

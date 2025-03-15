"use client";

import React, { useEffect } from "react";
import { Search, BellDot } from "lucide-react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "@/slice/authSlice";
import { useGetUserProfileQuery } from "@/hooks/UseAuth";

const SellerHeader: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.authSlice.user?.id);
  const userData = useSelector((state: any) => state.authSlice.userProfile);

  const { data: userProfile, error, isLoading } = useGetUserProfileQuery(userId, {
    skip: !userId, // Only fetch if userId exists
  });
  console.log("userProfile", userProfile);

  useEffect(() => {
    if (userProfile?.data) {
      dispatch(setUserProfile(userProfile.data));
    }
    if (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }, [userProfile, error, dispatch]);

  return (
    <div className="w-full flex items-center justify-between h-24">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search Product"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="bg-gray-300 p-2 rounded-full border-2 cursor-pointer">
          <BellDot />
        </div>
        {userData && (
          <div className="flex items-center gap-3">
            <Image
              src={userData?.imageUrl ? `http://97.74.89.204/${userData.imageUrl}` : "/Images/profileImg.png"}
              alt="User Profile"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold truncate w-[180px]">{userData?.name || "User"}</span>
              <span className="text-md text-gray-500 cursor-pointer">{userData?.email || "User"}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerHeader;

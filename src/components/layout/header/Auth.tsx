"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logOut, setUserProfile } from "@/slice/authSlice";
import { useGetUserProfileQuery } from "@/hooks/UseAuth";
import { LogOut } from "lucide-react";

const Auth = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.authSlice.user?.id);
  const isLoggedIn = useSelector((state: any) => state.authSlice.isLoggedIn);
  const userData = useSelector((state: any) => state.authSlice.userProfile);
  const [triggerFetch, setTriggerFetch] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
  };

  // Trigger API fetch only when userId is set
  useEffect(() => {
    if (userId && isLoggedIn) {
      setTriggerFetch(true);
    }
  }, [userId, isLoggedIn]);

  // Fetch user profile data once userId is available
  const {
    data: userProfile,
    error,
    isLoading,
  } = useGetUserProfileQuery(userId, {
    skip: !triggerFetch, // Skip API call if triggerFetch is false
  });

  useEffect(() => {
    if (userProfile) {
      dispatch(setUserProfile(userProfile.data)); // Store profile data in Redux
    }
    if (error) {
    }
  }, [userProfile, error, dispatch]);

  return (
    <div>
      {!isLoggedIn ? (
        <Link href="/auth/login">
          <Button variant="default">Login</Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="size-9 rounded-full flex items-center justify-center bg-ring cursor-pointer">
              <Image
                src="/icons/layout/header/user.svg"
                alt=""
                width={20}
                height={20}
                className="w-6"
              />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[320px] md:w-[440px] rounded-3xl mx-2 mt-2">
            {/* profile pic and switch button */}
            <div className="cursor-pointer px-6 pt-3 pb-2">
              <div className="w-full flex items-center justify-center gap-1 flex-col">
                {userData && (
                  <div className="w-full flex items-center gap-3 justify-start">
                    <Image
                      src={
                        userData?.imageUrl
                          ? `http://97.74.89.204/${userData?.imageUrl}`
                          : "/icons/layout/header/profileImg.png"
                      }
                      alt=""
                      width={100}
                      height={100}
                      className="size-16 rounded-full"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/icons/layout/header/profileImg.png";
                      }}
                    />
                    <p className="text-sm truncate-multiline-1 w-[180px]">
                      {userData?.name}
                    </p>
                  </div>
                )}
                <button className="border-[1.5px] border-border rounded-lg drop-shadow-xs py-2 px-13 text-sm text-black">
                  Switch to buyer
                </button>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="px-4.5">
              {[
                {
                  href: "/edit-profile",
                  icon: "/icons/layout/header/pencil.svg",
                  label: "Edit Profile",
                },
                {
                  href: "/favourites",
                  icon: "/icons/layout/header/heart.svg",
                  label: "Wishlist/Favourite",
                },
                {
                  href: "/notifications",
                  icon: "/icons/layout/header/bell.svg",
                  label: "Notifications",
                },
                {
                  href: "/address",
                  icon: "/icons/layout/header/mapPin.svg",
                  label: "Address Book",
                },
                {
                  href: "//tracking",
                  icon: "/icons/layout/header/map.svg",
                  label: "Tracking",
                },
              ].map((item, index) => (
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer"
                  key={index}
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <div className="size-7 rounded-full flex items-center justify-center bg-ring cursor-pointer">
                      <Image
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="w-4"
                      />
                    </div>
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <div className="p-1">
              <Button
                className="w-full text-sm tracking-wider bg-destructive text-white py-2"
                onClick={handleLogout}
              >
                <LogOut size={20} className="size-5 text-white" />
                Logout
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default Auth;

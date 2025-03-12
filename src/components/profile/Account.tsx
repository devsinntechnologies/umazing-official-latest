"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useGetUserProfileQuery, useUpdateProfileMutation } from "@/hooks/UseAuth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Account = () => {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.authSlice.isLoggedIn);
  const userId = useSelector((state: RootState) => state.authSlice.user?.id);
  const { data: user, refetch } = useGetUserProfileQuery(userId, { skip: !triggerFetch });
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    imageUrl: "/images/profile/profileImg.png",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.data.name || "",
        email: user.data.email || "",
        phone: user.data.phoneNo || "",
        dob: user.data.dob || "",
        gender: user.data.gender || "",
        imageUrl: user.data.imageUrl
          ? `http://97.74.89.204/${user.data.imageUrl}`
          : "/images/profile/profileImg.png",
      });
    }
  }, [user]);

  useEffect(() => {
    if (userId && isLoggedIn) {
      setTriggerFetch(true);
    }
  }, [userId, isLoggedIn]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setFormData({ ...formData, imageUrl: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleUpdate = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phoneNo", formData.phone);
      formDataToSend.append("dob", formData.dob);
      formDataToSend.append("gender", formData.gender);
      if (selectedImage) {
        formDataToSend.append("imageUrl", selectedImage);
      }

      const response = await updateProfile(formDataToSend).unwrap();
      console.log(response);

      toast.success("Profile updated successfully!");
      refetch(); // Refetch updated user data
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Account Information</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <Image
                  src={formData.imageUrl}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-2xl object-cover border-2 border-gray-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="imageUpload"
                  className="px-3 py-2 border border-gray-300 text-black rounded-md hover:bg-primary/90 text-sm cursor-pointer hover:text-white inline-block"
                >
                  Change Picture
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">Gender</label>
                <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger className="w-full px-4 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white">
                    <SelectValue placeholder={formData.gender || "Select Gender"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <button
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 cursor-pointer"
            onClick={handleUpdate}
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white mt-10 rounded-lg shadow p-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Contact Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="min-w-[250px]">
              <label className="block text-base font-semibold text-gray-700 mb-2">Country</label>
              <input type="text" name="country" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

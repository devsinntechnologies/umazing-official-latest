import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Account = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Account Information</h2>

            {/* Profile Image Section */}
            <div className="flex flex-col md:flex-row  items-center gap-6">
              <div className="relative">
                <Image
                  src="/images/profile/profileImg.png" // Replace with actual image path
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-2xl object-cover border-2 border-gray-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-3 py-2 border border-gray-300 text-black rounded-md hover:bg-primary/90 text-sm">
                  Change Picture
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="min-w-[250px]">
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white">
                    <SelectValue placeholder="Select Gender" />
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

          <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 cursor-pointer">
            Update
          </button>
        </div>
      </div>
      <div className="bg-white mt-10 rounded-lg shadow p-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Contact Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="min-w-[250px]">
              <label className="block text-base font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
                <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your phone number"
                />
            </div>

            <div className="min-w-[250px]">
              <label className="block text-base font-semibold text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your country"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

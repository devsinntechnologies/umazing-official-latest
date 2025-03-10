"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/layout/auth/Footer";
import { useSignupMutation } from "@/hooks/UseAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon } from "lucide-react";
const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signupData, { isLoading, isSuccess, error, data: responseData }] =
    useSignupMutation();

  useEffect(() => {
    toast.dismiss(); 
    if (isLoading) {
      toast("Signing up... Please wait while we create your account.");
    } else if (isSuccess) {
      if (responseData?.success) {
        toast.success("Registration Successful! You can now log in.");
        router.push("/auth/signin");
      } else {
        toast.error(
          "Registration Failed: " +
            (responseData?.message || "Something went wrong.")
        );
      }
    } else if (error) {
      toast.error("Error: Failed to register.");
    }
  }, [isSuccess, isLoading, error, responseData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required.");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      toast.error("Enter a valid email address.");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    if (!formData.phoneNo) {
      toast.error("Phone number is required.");
      return false;
    }
    return true;
  };

  const signup = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const { confirmPassword, ...signupDataPayload } = formData;
    signupData(signupDataPayload);
  };

  return (
    <>
      <div className="flex pt-8 pb-16 items-center justify-center">
        <div className="flex flex-col gap-5 max-w-md w-full mx-2 md:mx-0">
          <div className="flex justify-center">
            <Image src="/umazingLogo.svg" alt="logo" className="w-40 md:w-52" width={200} height={100} />
          </div>
          <div className="space-y-8 md:p-8 p-4 border-2 border-gray-200 bg-white rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 text-left">
                Create Account
              </h2>
            </div>
            <form onSubmit={signup} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNo"
                    className="block text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="phoneNo"
                    name="phoneNo"
                    type="text"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-9 right-3 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeIcon size={20} />
                    ) : (
                      <EyeOffIcon size={20} />
                    )}
                  </button>
                  <p className="text-gray-500 text-sm mt-1">
                    Password must be at least 6 characters long
                  </p>
                </div>

                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Re-enter Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Re-enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-9 right-3 text-gray-500"
                  >
                    {showConfirmPassword ? (
                    <EyeIcon size={20} />
                    ) : (
                      <EyeOffIcon size={20} />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full tracking-wide font-bold flex justify-center py-3 px-4 border border-transparent rounded-full text-sm text-white bg-primary focus:outline-none"
              >
                Continue
              </button>
            </form>
            <div className="text-sm text-gray-500 mt-4">
              By continuing, you agree to umazing{" "}
              <span className="text-primary">Conditions of Use</span> and{" "}
              <span className="text-primary">Privacy Notice</span>
            </div>
            <div>
              <div className="border-t border-gray-300"></div>
              <p className="text-sm font-bold text-black tracking-wide mt-5">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-primary underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

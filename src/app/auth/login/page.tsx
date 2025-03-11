"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/auth/Footer";
import { useLoginMutation } from "@/hooks/UseAuth";
import { useDispatch } from "react-redux";
import { setLogin } from "@/slice/authSlice";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import requireAuth from "@/components/hoc/requieAuth";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [
    login,
    { isSuccess, error: loginError, data: responseData, isLoading },
  ] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    toast.dismiss();

    if (isLoading) {
      toast.loading("Logging in...");
    } else if (isSuccess) {
      if (responseData?.success) {
        toast.success("Login Successful");
        dispatch(setLogin({ token: responseData?.data.token }));
        router.push("/");
      } else {
        toast.error(responseData?.message || "Login Failed");
      }
    } else if (loginError) {
      toast.error("Failed to login");
    }
  }, [isSuccess, isLoading, loginError, responseData, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="flex pt-8 pb-16 items-center justify-center">
        <div className="flex flex-col gap-5 max-w-md w-full mx-2 md:mx-0">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/umazingLogo.svg"
                alt="logo"
                className="w-40 md:w-52"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className="space-y-8 md:p-8 p-4 border-2 border-gray-200 bg-white rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 text-left">
                Log in
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 text-xs focus:outline-none flex items-center text-gray-600 mt-8 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>
              </div>
              <div>
                <Link
                  href="/forgot-password"
                  className="text-primary cursor-pointer underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full tracking-wide font-bold flex justify-center py-3 px-4 border border-transparent rounded-full cursor-pointer text-sm text-white bg-primary focus:outline-none"
              >
                Continue
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">Or</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full gap-2  flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer bg-white hover:bg-gray-50">
                  <Image
                    src="/icons/layout/google.svg"
                    alt="google"
                    width={20}
                    height={20}
                  />
                  <span>Log in with Google</span>
                </button>
                <button className="w-full gap-2 cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700  bg-white hover:bg-gray-50">
                  <Image
                    src="/icons/layout/facebook.svg"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                  <span>Log in with Facebook</span>
                </button>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                By continuing, you agree to umazing{" "}
                <span className="text-primary underline cursor-pointer">
                  Conditions of Use
                </span>{" "}
                and{" "}
                <span className="text-primary underline cursor-pointer">Privacy Notice</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white tracking-wide text-gray-500">
                New to umazing
              </span>
            </div>
          </div>
          <Link
            href="/auth/signup"
            className="flex justify-center py-3 px-4 border border-transparent rounded-full text-sm tracking-wide font-bold cursor-pointer text-white bg-primary focus:outline-none"
          >
            Create your umazing account
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default requireAuth(Page);

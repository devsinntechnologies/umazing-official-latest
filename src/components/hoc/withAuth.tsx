// @ts-nocheck
"use client"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { LockIcon } from "lucide-react"; // Import an icon from lucide-react
import { useRouter } from "next/navigation"; // Import Next.js router
import { toast } from "sonner";

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const token = useSelector((state) => state.authSlice.token);
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        toast.error("Not logged in", {
          description: "Please login first",
        })
        router.push("/auth/signin")
      }
    }, [token, toast]);

    const handleRedirectHome = () => {
      router.push("/");
    };

    if (token) {
      return <WrappedComponent {...props} />;
    }

    return (
      <div className="flex flex-col items-center justify-center space-y-4 w-full h-[80vh]">
        {/* Lock Icon and Message */}
        <div className="flex items-center justify-center space-x-2">
          <LockIcon className="text-primary h-8 w-8" />
          <span className="text-lg font-semibold text-gray-700">
            You are not logged in!
          </span>
        </div>

        {/* Redirect Button */}
        <button
          onClick={handleRedirectHome}
          className="px-6 py-2 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition-all duration-200"
        >
          Go to Home
        </button>
      </div>
    );
  };

  return Auth;
};

export default withAuth;

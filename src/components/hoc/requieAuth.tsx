// @ts-nocheck
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
// import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

const requireAuth = (WrappedComponent, redirectPath = '/') => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const token = useSelector((state) => state.authSlice.token);

    useEffect(() => {
      if (token) {
         toast.success("Already Logged In");
        router.push(redirectPath);
      }
    }, [token, router]);
    if (token) {
        return <div>Loading...</div>;
        // return <LoadingSpinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default requireAuth;

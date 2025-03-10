import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Auth = () => {
  return (
    <div>
      <Link href="/auth/login">
        <Button variant="default">Login</Button>
      </Link>
    </div>
  );
};

export default Auth;

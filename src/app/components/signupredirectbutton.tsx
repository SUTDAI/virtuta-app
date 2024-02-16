"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignupRedirectButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex-initial w-1/3 h-10 bg-[#101010] rounded-full text-white"
      onClick={() => router.push("/signup")}
    >
      Get Started
    </button>
  );
};

export default SignupRedirectButton;

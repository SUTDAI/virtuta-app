"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignupButton = () => {
  const router = useRouter()

  return <button onClick={() => router.push("/signup")}>Signup</button>;
};

export default SignupButton;

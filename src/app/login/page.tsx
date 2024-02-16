import Link from "next/link";
import React from "react";
import Image from "next/image";
import SignupForm from "../components/signupform";

const LoginPage = () => {
  return (
    <div className="flex flex-col place-items-center m-28">
      <Image
        src="/virtuta-logo-removebg-preview.png"
        alt="logo"
        width={300}
        height={200}
      />
      <div className="font-poppins font-black text-2xl mt-10">SIGN IN</div>
      <SignupForm />
    </div>
  );
};

export default LoginPage;

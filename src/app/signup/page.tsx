import React from "react";
import Image from "next/image";
import SignupForm from "../components/signupform";

const SignupPage = () => {
  return (
    <div className="flex flex-col place-items-center m-28">
      <Image
        src="/virtuta-logo-removebg-preview.png"
        alt="logo"
        width={300}
        height={200}
      />
      <div className="font-poppins font-black text-2xl my-10">SIGN UP</div>
      <SignupForm />
    </div>
  )
}

export default SignupPage

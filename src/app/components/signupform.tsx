"use client";
import React from "react";

const SignupForm = () => {
  return (
    <div>
      <form action="" className="flex-row justify-center">
        <div className="m-4">
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="flex-1 font-poppins rounded-md border-2 p-2"
          />
        </div>
        <div className="m-4">
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="flex-1 font-poppins rounded-md border-2 p-2"
          />
        </div>
        <div className="m-4 mt-20">
          <button
            type="submit"
            className="w-56 bg-[#101010] rounded-md text-white p-2"
          >
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

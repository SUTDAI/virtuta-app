"use client";
import React, { useState } from "react";
import { autenticate_user } from "../auth";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const router = useRouter();

  const [candidate, setCandidate] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (candidate.email === "" || candidate.password === "")
      return alert("Email or Password Empty");

    const route = await autenticate_user(candidate);
    if (route) {
      router.push(route);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col justify-center">
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={(e) => {
            setCandidate({
              ...candidate,
              email: e.target.value,
            });
          }}
          className="flex-1 font-poppins rounded-md border-2 p-2 m-2"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => {
            setCandidate({
              ...candidate,
              password: e.target.value,
            });
          }}
          className="flex-1 font-poppins rounded-md border-2 p-2 m-2"
        />
        <button
          type="submit"
          className="flex-1 bg-[#101010] rounded-md text-white p-2 m-2"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default SigninForm;

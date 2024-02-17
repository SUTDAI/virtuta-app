"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SigninForm = () => {
  const endpoint = "http://localhost:3001/user/login";
  const router = useRouter();

  const [candidate, setCandidate] = useState({
    email: "",
    password: "",
  });
  const [user, SetUser] = useState();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (candidate.email === "" || candidate.password === "")
      return alert("Email or Password is empty");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(candidate),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        // Handle specific error status codes
        if (response.status === 400) {
          // Change input HTML style here for bad request (e.g., add a class to highlight inputs)
          return alert(errorMessage.message);
        } else if (response.status === 404) {
          // Change input HTML style here for unauthorized (e.g., add a class to highlight inputs)
          return alert(errorMessage.message);
        } else {
          throw new Error("Failed to login");
        }
      }

      const data = await response.json();
      SetUser(data);
      router.push("/users/student");
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle the error (e.g., show an error message to the user)
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

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupForm = () => {
  const endpoint = "http://localhost:3001/user/add";
  const router = useRouter();

  const [candidate, setCandidate] = useState({
    firstName: "",
    lastName: "",
    accountType: "",
    email: "",
    password: "",
  });

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
        body: JSON.stringify({
          userName: candidate.firstName + " " + candidate.lastName,
          accountType: candidate.accountType,
          email: candidate.email,
          password: candidate.password,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        // Handle specific error status codes
        if (response.status === 500) {
          // Change input HTML style here for bad request (e.g., add a class to highlight inputs)
          return alert(errorMessage.message);
        } else {
          throw new Error("Failed to Signup");
        }
      }
      router.push("/login");
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col justify-center">
        <div className="flex-row">
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            required
            onChange={(e) => {
              setCandidate({
                ...candidate,
                firstName: e.target.value,
              });
            }}
            className="flex-1 font-poppins rounded-md border-2 p-2 m-2"
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            required
            onChange={(e) => {
              setCandidate({
                ...candidate,
                lastName: e.target.value,
              });
            }}
            className="flex-1 font-poppins rounded-md border-2 p-2 m-2"
          />
        </div>
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
        <div className="flex flex-row">
          <div className="flex-1">
            <input
              className="hidden peer"
              id="radio_1"
              type="radio"
              value={1}
              name="accountselect"
              onChange={(e) => {
                setCandidate({
                  ...candidate,
                  accountType: e.target.value,
                });
              }}
            />
            <label
              className="flex flex-col p-4 m-2 rounded-md border-2 peer-checked:border-orange-600 peer-checked:text-orange-600 cursor-pointer"
              htmlFor="radio_1"
            >
              <span className="font-poppins text-m uppercase">
                For Students
              </span>
              <span className="font-poppins text-xs ">for all ages</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              className="hidden peer"
              id="radio_2"
              type="radio"
              value={2}
              name="accountselect"
              onChange={(e) => {
                setCandidate({
                  ...candidate,
                  accountType: e.target.value,
                });
              }}
            />
            <label
              className="flex flex-col p-4 m-2 rounded-md border-2 peer-checked:border-orange-600 peer-checked:text-orange-600 cursor-pointer"
              htmlFor="radio_2"
            >
              <span className="font-poppins text-m uppercase">
                For Teachers
              </span>
              <span className="font-poppins text-xs ">for all educators</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="flex-1 bg-[#101010] rounded-md text-white p-2 m-2"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

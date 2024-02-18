"use client";
import React, { useEffect, useState } from "react";
import { get_details } from "@/app/auth";
import { useRouter } from "next/navigation"

const StudentPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({ id: "", userName: "" });
  useEffect(() => {
    get_details().then((res) => {
      if (res.code === 1 || res.accountType !== 1) {
        router.push("/login");
      } else {
        setUser((prevState) => ({
          ...prevState,
          id: res.id,
          userName: res.userName,
        }));
      }
    });
  }, []);

  const signout = async () => {
    router.push("/landing");
  };
  return (
    <main>
      <div>Student {user.id}</div>
      <button onClick={signout}>Sign Out</button>
    </main>
  );
};

export default StudentPage;

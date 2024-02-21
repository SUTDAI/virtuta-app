"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { get_details } from "@/app/auth";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/navbar";
import Temp from "@/app/components/temp";

const StudentPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({ id: "", userName: "" });
  const [comp, setComp] = useState(0);
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setComp(1);
      console.log((event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = "";
    }
  };

  return (
    <main className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow flex-row bg-[#1D1D1D]">
        <div className="flex-auto w-1/5 flex-col p-6">
          <div className="font-poppins text-white font-bold">Today</div>
          {comp ? (
            <div className="font-poppins text-white ml-4 text-sm">
              Polymerization
            </div>
          ) : (
            <div></div>
          )}
          <div className="font-poppins text-white ml-4 text-sm">
            Manufacturing of Plastic
          </div>
          <br />
          <div className="font-poppins text-white font-bold">Previous days</div>
          <div className="font-poppins text-white ml-4 text-sm">
            Electric Flux
          </div>
          <div className="font-poppins text-white ml-4 text-sm">
            Double integrals
          </div>
        </div>
        <div className="flex-auto w-full flex">
          <div className="flex-1 flex-col bg-[#101010] rounded-3xl mx-5 mb-5">
            <div className="text-white h-full p-10">
              {comp ? (
                <Temp />
              ) : (
                <div className="font-poppins text-6xl text-center">
                  Welcome <div className="text-[#EF6A36]">{user.userName}</div>
                  <div>How can I help?</div>
                  <Image
                    src="/virtuta-logo.png"
                    alt="logo"
                    width={75}
                    height={75}
                    className="ml-[46%]"
                  />
                </div>
              )}
            </div>
            <div className="fixed bottom-5 w-[75%] h-18 m-8">
              <input
                type="text"
                placeholder="Enter your Query"
                className="py-2 px-2 w-full rounded-full bg-[#1D1D1D] text-white"
                onKeyDown={handleKeyPress}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentPage;

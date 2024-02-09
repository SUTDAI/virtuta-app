import React from "react";
import SignupButton from "../components/signupbutton";
import NavBar from "../components/navbar";

const LandingPage = () => {
  return (
    <body>
      <div className="flex flex-row h-screen w-screen bg-[#1D1D1D]">
        <div className="flex-auto flex-col w-1/2 flex justify-center p-10">
          <div className="text-white text-7xl">Learning made easier</div>
          <div className="text-white">
            Meet virtuTA, your virtual teaching assistant! Get instant help 24/7
            and ace your studies effortlessly.
          </div>
          <SignupButton />
        </div>
        <div className="flex-auto w-1/2 flex justify-center items-center">
          <div className="size-11/12 bg-[#101010] rounded-3xl"></div>
        </div>
      </div>
    </body>
  );
};

export default LandingPage;

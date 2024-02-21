import React from "react";
import SignupRedirectButton from "../components/signupredirectbutton";
import NavBar from "../components/landingnavbar";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow flex-row bg-[#1D1D1D]">
        <div className="flex-auto flex-col w-1/2 flex justify-center p-10">
          <div className="text-white text-7xl font-poppins font-black">
            Learning made
          </div>
          <div className="text-white text-7xl font-poppins font-black w-fit typewriter">
            Easier
          </div>
          <div className="text-white font-poppins">
            Meet virtuTA, your virtual teaching assistant!
          </div>
          <div className="text-white font-poppins">
            Get instant help 24/7 and ace your studies effortlessly.
          </div>
          <br></br>
          <SignupRedirectButton />
        </div>
        <div className="flex-auto w-1/2 flex justify-center items-center">
          <div className="size-11/12 bg-[#101010] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

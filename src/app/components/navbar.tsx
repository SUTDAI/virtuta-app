import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row bg-[#1D1D1D] h-14 w-full">
      <Image
        src="/virtuta-logo-removebg-preview.png"
        alt="logo"
        width={180}
        height={200}
        className="p-3 ml-7"
      />
    </div>
  );
};

export default NavBar;

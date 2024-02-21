import Image from "next/image";
import React from "react";

const Temp = () => {
  return (
    <div className="flex-col">
      <div className="flex flex-row">
        <Image
          src="/user-icon.png"
          alt="logo"
          width={30}
          height={25}
          className="rounded-full"
        />
        <div className="font-poppins text-lg px-5 align-middle">Jaden Loh</div>
      </div>
      <div className="font-poppins py-2 text-sm">
        What are the types of polymerization and how do they work?
      </div>
      <br />
      <div className="flex flex-row">
        <Image
          src="/bot-icon.png"
          alt="logo"
          width={30}
          height={25}
          className="rounded-full"
        />
        <div className="font-poppins text-lg px-5 align-middle">VirtuTA</div>
      </div>
      <div className="font-poppins py-2 text-sm">
        <div>{`Sure thing! Let's break it down:`}</div>
        <div className="">{`So, there are two main ways polymers are made:`}</div>
        <br />
        <div className="font-bold">Chain-growth polymerization:</div>
        <div className="pl-4">
          {`Like a chain reaction where small molecules with double bonds link up
          to form a long chain. Think of it like a train adding one car after
          another. Examples of this are stuff like polyethylene or PVC.`}
        </div>
        <br />
        <div className="font-bold">Step-growth polymerization: </div>
        <div className="pl-4">
          {`This is more like a dance where two different molecules join together
          and kick out a small piece, forming a bond. It's like putting together
          a puzzle piece by piece. Nylon and polyester are made this way.`}
        </div>
        <br />
        <div>Hope that makes sense! Got any more questions?</div>
        <div>
          Maybe about How chain-growth polymerization is better than step-growth
          polymerization, or How to form these polymer chains, or even What
          everyday things are made from them?
        </div>
        <br />
        <div className="font-poppins py-2 text-sm font-bold">Sources:</div>
        <div className="flex align-middle border-white border-2 w-1/6"><Image
          src="/document-icon.png"
          alt="logo"
          width={25}
          height={25}
          className="rounded-full"
        />Lesson 4: Polymers</div>
      </div>
    </div>
  );
};

export default Temp;

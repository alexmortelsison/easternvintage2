import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[73vh] flex justify-center items-center mt-250 relative inset-0 w-screen">
      <div className="">
        <div className="bg-linear-to-b from-black/70 via-black/90  to-black/70 absolute inset-0"></div>
        <Image
          src={"/Screenshot 2025-11-17 202755.png"}
          alt={""}
          width={2000}
          height={2000}
          className="object-cover w-screen h-[73vh]"
        />
      </div>
      <div className="absolute text-white/80 items-center justify-center text-center">
        <div className="pt-16 flex flex-col justify-center items-center tracking-tight">
          <h1 className="text-3xl">
            Be First To Discover Our Latest Treasures
          </h1>
          <p className="text-xl text-white/40">
            Join our exclusive circle and receive first access
          </p>
          <div></div>
          <div className="max-w-1/5 pt-4 w-screen">
            <form className="border text-start pl-4 py-4 text-white/40">
              <label className="text-start justify-start">Enter email</label>
            </form>
            <button className="mt-4 border px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer">
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-between w-screen items-center max-w-7xl mx-auto text-start mt-24 font-semibold">
          <div className="">
            <Image
              src={"/EASTERNVINTAGELOGO.png"}
              alt={""}
              width={200}
              height={200}
            />
          </div>
          <div className="flex-col space-y-4 ">
            <p>Home</p>
            <p>Collection</p>
            <p>Story</p>
            <p>Press</p>
            <p>Contact</p>
          </div>
          <div className="flex-col space-y-4">
            <p>FAQ</p>
            <p>Shipping &amp; Returns</p>
            <p>Store Policy</p>
            <p>My Account</p>
          </div>
          <div className="flex items-center text-5xl space-x-4">
            <AiOutlineInstagram />
            <AiOutlineFacebook />
          </div>
        </div>
        <div className="text-white/40 pt-24 pb-2">
          <p>&copy;2025 Eastern Vintage. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

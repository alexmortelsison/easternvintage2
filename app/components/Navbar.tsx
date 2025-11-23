import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="absolute z-60 h-[60] w-screen items-center flex justify-center text-center text-white pt-20">
      <div className="flex justify-between items-center space-x-46">
        <div>
          <Link href={"/shop"}>SHOP</Link>
        </div>
        <div>
          <Link href={"/story"}>STORY</Link>
        </div>
        <div className="px-32">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt={""}
              width={500}
              height={500}
              className="object-cover w-[150]"
            />
          </Link>
        </div>
        <div>
          <Link href={"/shop"}>LOGIN</Link>
        </div>
        <div className="relative">
          <AiOutlineShopping className="text-2xl" />
          <div className="absolute -top-1 -right-3 text-white text-sm border bg-red-500 rounded-full px-1.5">
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}

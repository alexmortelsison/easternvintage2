"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function VideoPlayer2() {
  return (
    <div className="relative inset-0 h-screen">
      <div className="bg-linear-to-b from-black/90 via-black/40 to-black/90 absolute inset-0"></div>
      <div className="">
        <Image src={"/sec2.jpg"} alt={""} width={1200} height={1200} />
      </div>
    </div>
  );
}

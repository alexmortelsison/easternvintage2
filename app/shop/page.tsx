import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

export default function ShopPage() {
  return (
    <div className="h-screen w-screen pt-16 bg-black">
      <div className="grid grid-cols-2 max-w-7xl mx-auto">
        <div className="col-span-1">
          <video
            src={"/Untitled video - Made with Clipchamp 2.mp4"}
            autoPlay
            playsInline
            muted
            loop
            className="pt-24 object-contain h-[800]"
          />
        </div>
        <div className="col-span-1 pt-48">
          <div
            className="grid grid-cols-3 gap-x-8 gap-y-16 text-white/60 tracking-tighter text-sm
          "
          >
            <div className="">
              <Image
                src={"/gvbgb.jpg"}
                alt={""}
                width={250}
                height={250}
                className="object-cover"
              />
              <div className="pt-2">
                <div className="tracking-tight flex justify-between items-center">
                  <h1>Vintage Silk Kimono Jacket</h1>
                  <div>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
                <p className="text-white/40">$900.00</p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/p2.jpg"}
                alt={""}
                width={250}
                height={250}
                className="object-cover"
              />
              <div className="pt-2">
                <div className="tracking-tight flex justify-between items-center">
                  <h1>Vintage Silk Kimono Jacket</h1>
                  <div>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
                <p className="text-white/40">$900.00</p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/p3.jpg"}
                alt={""}
                width={250}
                height={250}
                className="object-cover"
              />
              <div className="pt-2">
                <div className="tracking-tight flex justify-between items-center">
                  <h1>Vintage Silk Kimono Jacket</h1>
                  <div>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
                <p className="text-white/40">$900.00</p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/p4.jpg"}
                alt={""}
                width={250}
                height={250}
                className="object-cover"
              />
              <div className="pt-2">
                <div className="tracking-tight flex justify-between items-center">
                  <h1>Vintage Silk Kimono Jacket</h1>
                  <div>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
                <p className="text-white/40">$900.00</p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/p5.jpg"}
                alt={""}
                width={250}
                height={250}
                className="object-cover"
              />
              <div className="pt-2">
                <div className="tracking-tight flex justify-between items-center">
                  <h1>Vintage Silk Kimono Jacket</h1>
                  <div>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
                <p className="text-white/40">$900.00</p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/p6.jpg"}
                alt={""}
                width={250}
                height={250}
                className="object-cover"
              />
              <div className="pt-2">
                <div className="tracking-tight flex justify-between items-center">
                  <h1>Vintage Silk Kimono Jacket</h1>
                  <div>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
                <p className="text-white/40">$900.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

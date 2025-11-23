"use client";
import {
  AiOutlineArrowDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "auto",
    });
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide">
      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/30 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex items-center pt-32 justify-center space-x-64 z-50">
          <div className="flex items-center">
            <Image
              src={"/shop1.png"}
              alt={""}
              height={2000}
              width={2000}
              className="w-auto h-[800]"
            />
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={"/shop1.1.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop1.2.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop1.3.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-2xl font-bold text-black/60">
                Vintage Silk Kimono Jacket
              </h1>
              <p className="text-lg font-semibold text-black/40 pt-1">$900</p>
              <p className=" text-black/30 pt-4 tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
              <p className="text-black/40 text-sm pt-1 tracking-tighter">
                Black | 0120/840/999
              </p>
              <button className="border text-sm bg-[#2b2b2b] px-8 py-4 mt-6 text-white/90 hover:opacity-90 cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/30 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex items-center pt-32 justify-center space-x-64 z-50">
          <div className="flex items-center">
            <Image
              src={"/shop2.png"}
              alt={""}
              height={2000}
              width={2000}
              className="w-auto h-[800]"
            />
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={"/shop2.1.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />

              <Image
                src={"/shop2.2.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-2xl font-bold text-black/60">
                Vintage Silk Kimono Jacket
              </h1>
              <p className="text-lg font-semibold text-black/40 pt-1">$900</p>
              <p className=" text-black/30 pt-4 tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
              <p className="text-black/40 text-sm pt-1 tracking-tighter">
                Black | 0120/840/999
              </p>
              <button className="border text-sm bg-[#2b2b2b] px-8 py-4 mt-6 text-white/90 hover:opacity-90 cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/30 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex items-center pt-32 justify-center space-x-64 z-50">
          <div className="flex items-center">
            <Image
              src={"/shop3.png"}
              alt={""}
              height={2000}
              width={2000}
              className="w-auto h-[800]"
            />
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={"/shop3.1.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop3.2.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop3.3.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-2xl font-bold text-black/60">
                Vintage Silk Kimono Jacket
              </h1>
              <p className="text-lg font-semibold text-black/40 pt-1">$900</p>
              <p className=" text-black/30 pt-4 tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
              <p className="text-black/40 text-sm pt-1 tracking-tighter">
                Black | 0120/840/999
              </p>
              <button className="border text-sm bg-[#2b2b2b] px-8 py-4 mt-6 text-white/90 hover:opacity-90 cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative snap-start flex items-center justify-center min-h-screen overflow-hidden">
        <div className="bg-linear-to-b from-black/90 via-black/80 to-black/90 absolute inset-0"></div>
        <Image
          src={"/Screenshot 2025-11-17 202755.png"}
          alt={""}
          width={2000}
          height={2000}
          className="object-cover h-[1000]"
        />
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
              <Image src={"/logo.png"} alt={""} width={200} height={200} />
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
          <div className="text-white/40 pt-48 pb-2">
            <p>&copy;2025 Eastern Vintage. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

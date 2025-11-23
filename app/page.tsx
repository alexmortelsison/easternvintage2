"use client";
import {
  AiOutlineArrowDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import VideoPlayer from "./components/VideoPlayer";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "auto",
    });
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide">
      <section className="relative snap-start flex items-center justify-center h-screen">
        <VideoPlayer />
        <div className="absolute inset-0 flex justify-center items-end pb-16 text-white z-10 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto">
            <h1 className="text-white tracking-tight font-semibold pb-2 text-center">
              ONE CHANCE TO OWN
            </h1>
            <p className="text-white/40 text-sm pb-2">SEE DETAILS</p>
            <button
              onClick={handleScrollToNext}
              aria-label="Scroll to next section"
            >
              <Link href={"/shop"}>
                <AiOutlineArrowDown className="text-white/50 cursor-pointer hover:text-white transition-colors" />
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="relative snap-start flex items-center justify-center">
        <div className="bg-linear-to-b from-black/50 via-black/20 to-black/20 absolute inset-0"></div>
        <Image
          src={"/_DSC0023.jpg"}
          alt={""}
          width={2000}
          height={2000}
          className="object-cover h-[1000]"
        />
        <div className="absolute inset-0 flex justify-center items-end pb-32 text-white z-10 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto">
            <h1 className="text-white tracking-tight font-semibold pb-2 text-center">
              A LEGACY WAITING FOR ITS NEXT GUARDIAN
            </h1>
            <p className="text-white/40 text-sm pb-2">SEE STORY</p>
            <button
              onClick={handleScrollToNext}
              aria-label="Scroll to next section"
            >
              <AiOutlineArrowDown className="text-white/50 cursor-pointer hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative snap-start flex items-center justify-center">
        <div className="bg-linear-to-b from-black/50 via-black/20 to-black/20 absolute inset-0"></div>
        <Image
          src={"/_DSC0865.jpg"}
          alt={""}
          width={2000}
          height={2000}
          className="object-cover h-[1000]"
        />
        <div className="absolute inset-0 flex justify-center items-end pb-32 text-white z-10 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto">
            <h1 className="text-white tracking-tight font-semibold pb-2 text-center">
              UNVEIL THE LUXURY OF HERITAGE
            </h1>
            <p className="text-white/40 text-sm pb-2">SEE STORY</p>
            <button
              onClick={handleScrollToNext}
              aria-label="Scroll to next section"
            >
              <AiOutlineArrowDown className="text-white/50 cursor-pointer hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative snap-start flex items-center justify-center">
        <div className="bg-linear-to-b from-black/50 via-black/20 to-black/50 absolute inset-0"></div>
        <Image
          src={"/AdobeStock_335068813.jpeg"}
          alt={""}
          width={2000}
          height={2000}
          className="object-cover h-[1000]"
        />
        <div className="absolute inset-0 flex justify-center items-end pb-32 text-white z-10 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto">
            <h1 className="text-white tracking-tight font-semibold pb-2 text-center">
              A LEGACY OF REFINED TASTE
            </h1>
            <p className="text-white/40 text-sm pb-2">SHOP NOW</p>
            <button
              onClick={handleScrollToNext}
              aria-label="Scroll to next section"
            >
              <AiOutlineArrowDown className="text-white/50 cursor-pointer hover:text-white transition-colors" />
            </button>
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

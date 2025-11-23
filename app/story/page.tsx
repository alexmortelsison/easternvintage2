"use client";
import {
  AiOutlineArrowDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function StoryPage() {
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
        <div className="flex 4 justify-center space-x-32 z-50 max-w-7xl">
          <div className="flex space-x-2 items-center">
            <div className="bg-linear-to-b from-black/10 absolute inset-0"></div>
            <Image
              src={"/bnb.jpg"}
              alt={""}
              height={2000}
              width={2000}
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="z-50 flex justify-center items-center tracking-tighter">
            <div className="max-w-[800]">
              <h1 className="text-5xl font-bold text-black/60">
                Meet The People <br /> Behind The Brand.
              </h1>
              <div className="pt-8 flex justify-center items-center text-start">
                <p className="text-black/50">
                  From private estates to hidden markets, Borum and Bonasa hunt
                  for only the rarest and most exquisite garments—pieces that
                  are not just worn, but are woven with stories of power,
                  elegance, and art. These kimonos are part of a legacy, and
                  owning one is to connect with the past in a way few others
                  can. With every purchase, you&apos;re not just buying a
                  garment, but an investment in timeless luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/60 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex 4 justify-center space-x-16 z-50">
          <div className="flex space-x-2 items-center">
            <div className="bg-linear-to-b from-black/10 absolute inset-0"></div>
            <Image
              src={"/borum.jpg"}
              alt={""}
              height={2000}
              width={2000}
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-5xl font-bold text-black/60">Borum</h1>
              <div className="pt-8 flex justify-center items-center text-start">
                <p className="text-black/50 text-sm">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
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

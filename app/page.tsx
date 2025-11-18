"use client";
import { AiOutlineArrowDown } from "react-icons/ai";
import VideoPlayer from "./components/VideoPlayer";
import Link from "next/link";

export default function HomePage() {
  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "auto",
    });
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide">
      {/* Hero Section */}
      <section className="relative snap-start flex items-center justify-center">
        <VideoPlayer />
        <div className="absolute inset-0 flex justify-center items-end pb-48 text-white z-10 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto">
            <h1 className="text-white tracking-tight font-semibold pb-2 text-center">
              ONE CHANCE TO OWN
            </h1>
            <p className="text-white/40 text-sm pb-2">SEE DETAILS</p>
            <button
              onClick={handleScrollToNext}
              aria-label="Scroll to next section"
            >
              <AiOutlineArrowDown className="text-white/50 cursor-pointer hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Example Next Section - Customize this (e.g., shop preview) */}
      <section className="h-screen snap-start flex items-center justify-center bg-black text-white">
        <div className="text-center px-4">
          <h2 className="text-4xl font-semibold mb-4">Shop Collection</h2>
          <p className="text-lg mb-8">Discover exclusive pieces.</p>
          <Link
            href="/shop"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
}

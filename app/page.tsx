import { AiOutlineArrowDown } from "react-icons/ai";
import VideoPlayer from "./components/VideoPlayer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative inset-0">
      <div className="">
        <VideoPlayer />
      </div>
      <div className="absolute inset-0 flex justify-center items-end pb-48 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-white z-30 tracking-tight font-semibold pb-2">
            ONE CHANCE TO OWN
          </h1>
          <p className="text-white/40 text-sm">SEE DETAILS</p>
          <Link href="/shop">
            <AiOutlineArrowDown className="text-white/50" />
          </Link>
        </div>
      </div>
    </div>
  );
}

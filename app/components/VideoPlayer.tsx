"use client";

import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <div className="relative inset-0" onClick={handleUnmute}>
      <div className="bg-linear-to-b from-black/90 via-black/40 to-black/90 absolute inset-0"></div>
      <div className="">
        <video
          ref={videoRef}
          src={"/final.mp4"}
          autoPlay
          muted={isMuted}
          playsInline
          loop
        />
      </div>
    </div>
  );
}

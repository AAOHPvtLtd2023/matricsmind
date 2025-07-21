"use client";
import Image from "next/image";

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Image
        src="/file.svg"
        alt="star"
        width={40}
        height={40}
        className="absolute top-10 left-10 opacity-30 animate-float"
      />

      <Image
        src="/globe.svg"
        alt="circle"
        width={50}
        height={50}
        className="absolute top-1/2 left-1/3 opacity-20 animate-drift"
      />

      <Image
        src="/next.svg"
        alt="triangle"
        width={60}
        height={60}
        className="absolute bottom-20 right-10 opacity-20 animate-float delay-300"
      />

      <Image
        src="/vercel.svg"
        alt="star2"
        width={30}
        height={30}
        className="absolute bottom-1/4 left-1/4 opacity-30 animate-wiggle"
      />
    </div>
  );
}

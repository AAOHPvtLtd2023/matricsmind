"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function HighlightHeading() {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, { once: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <section className="w-full px-6 py-12 bg-[#0B0E1C]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight relative inline-block">
          <span>From Strategy to Screens — </span>
          <span className="relative inline-block text-yellow-400 font-medium">
            We Create What Brands Need
            <svg
              ref={pathRef}
              viewBox="0 0 260 20"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 -bottom-2 w-full h-4 md:h-5"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 C50 25, 200 5, 260 15"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className={animate ? "stroke-animation" : ""}
              />
            </svg>
          </span>
        </h2>
      </div>
    </section>
  );
}

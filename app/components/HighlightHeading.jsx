"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function HighlightHeading() {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, { once: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <section className="w-full py-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white leading-sung relative inline-block">
          <span className="block text-[#fff] leading-none">From Strategy to Screens</span>
          <span className="relative inline-block text-[#ff9100] font-semibold leading-none">
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
                stroke="#1c3784"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className={`transition-all duration-[1s] ease-in-out ${
                  animate ? "path-visible" : "path-hidden"
                }`}
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Custom CSS (Scoped or Global) */}
      <style jsx>{`
        .path-hidden {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
        }
        .path-visible {
          stroke-dasharray: 300;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1s ease-out;
        }
      `}</style>
    </section>
  );
}

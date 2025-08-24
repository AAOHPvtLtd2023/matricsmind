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
    <section className="w-full py-12 sm:py-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-light text-white leading-none relative inline-block">
          <span className="block text-white leading-none text-3xl sm:text-3xl md:text-4xl lg:text-4xl ">From Strategy to Screens</span>
          <span className="relative inline-block text-[#ff9100] font-extrabold leading-none mt-2 text-xl sm:text-4xl md:text-5xl lg:text-5xl sm:mt-1 md:mt-0">
            We Create What Brands Need
            {/* <svg
              ref={pathRef}
              viewBox="0 0 260 20"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 -bottom-1 w-full h-4 md:h-8"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 C50 25, 200 5, 260 15"
                stroke="#fff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className={`${animate ? "path-visible" : "path-hidden"}`}
              />
            </svg> */}
          </span>
        </h2>
      </div>

      {/* Scoped CSS for SVG animation */}
      <style jsx>{`
        .path-hidden {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
        }
        .path-visible {
          stroke-dasharray: 300;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1.2s ease-out;
        }
      `}</style>
    </section>
  );
}

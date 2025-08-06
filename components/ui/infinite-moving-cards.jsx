"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const cloned = item.cloneNode(true);
      scrollerRef.current.appendChild(cloned);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration =
      speed === "fast" ? "20s" : speed === "slow" ? "60s" : "40s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      setOffset(-yOffset * 0.1); // Slight parallax
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6 px-4",
          start && "animate-infinite-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="group relative w-[80vw] sm:w-[260px] md:w-[320px] shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.015]"
          >
            <blockquote className="flex flex-col justify-between h-full">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-lg mb-4 transform transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <p className="text-sm text-white/90 leading-relaxed mb-4">
                {item.quote}
              </p>
              <div className="mt-auto">
                <h3 className="text-sm font-semibold text-[#ff9100]">{item.name}</h3>
                <p className="text-xs text-[#1c3784]">{item.title}</p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

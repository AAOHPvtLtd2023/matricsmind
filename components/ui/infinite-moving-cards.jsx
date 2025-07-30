"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

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

    const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="group relative w-[85vw] sm:w-[250px] md:w-[380px] shrink-0 rounded-xl border border-zinc-200 bg-gradient-to-b from-[#fafafa] to-[#f5f5f5] px-4 py-4 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900 transition-all duration-300 hover:shadow-xl"
          >
            <blockquote>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-lg mb-3 transition-transform duration-300 group-hover:scale-105"
                />
              )}

              <p className="text-sm text-neutral-800 dark:text-gray-100 mb-3">
                {item.quote}
              </p>

              <div className="flex flex-col gap-0.5 mt-4">
                <span className="text-sm font-medium text-neutral-700 dark:text-gray-300">
                  {item.name}
                </span>
                <span className="text-xs text-neutral-500 dark:text-gray-500">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

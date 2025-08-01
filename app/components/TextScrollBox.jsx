"use client";

import { TextScroll } from "../../components/ui/text-scroll";
import { useState } from "react";
import clsx from "clsx";

export const TextScrollBox = ({
  text,
  default_velocity = 6,
  itemClassName = "",
  className = "",
  containerClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const wrappedText = text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line, i) => (
      <span
        key={i}
        className={clsx(
          "inline-block whitespace-nowrap px-4 py-1 mx-2 rounded-full border border-[#ff9100] text-white text-lg font-medium bg-[#1c1c1c] hover:bg-[#ff9100] hover:text-white transition-all duration-300 shadow-sm mt-2",
          itemClassName
        )}
      >
        {line.trim()}
      </span>
    ));

  return (
    <div
      className={clsx(
        "relative overflow-hidden w-full bg-[#0b0b0b]",
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade left */}
      <div className="absolute top-0 left-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0b0b0b] to-transparent" />
      {/* Fade right */}
      <div className="absolute top-0 right-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0b0b0b] to-transparent" />

      {/* Scrolling content */}
      <TextScroll
        default_velocity={isHovered ? 0 : default_velocity}
        className={clsx("whitespace-nowrap flex gap-4 items-center", className)}
      >
        {wrappedText}
      </TextScroll>
    </div>
  );
};

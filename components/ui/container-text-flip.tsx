"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import React, { useId } from "react";

// Utility function to join classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContainerTextFlip({
  words = [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Bahrain",
    "Kuwait",
    "Oman",
    "CANADA",
    "INDIA",
    "Australia",
    "UK",
    "USA",
  ],
  interval = 3000,
  className,
  textClassName = "",
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef(null);

  const updateWidthForWord = () => {
    if (typeof window !== "undefined" && textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateWidthForWord();
    }
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white",
        "[background:linear-gradient(160deg,rgba(255,145,0,1)_0%,rgba(28,55,132,1)_100%)]",
        "shadow-[inset_0_-1px_rgba(255,145,0,0.3),inset_0_0_0_1px_rgba(255,145,0,0.4),_0_4px_8px_rgba(255,145,0,0.2)]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}

"use client";

import { useState, useEffect, useRef, ReactNode, JSX } from "react";
import { motion, Variants } from "framer-motion";
import React, { useId } from "react";

// Utility function to join classNames
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["UAE", "Saudi","Arabia", "Qatar", "Bahrain" , "Kuwait", "Oman", "CANADA", "INDIA", "Australia", "UK", "USA"],
  interval = 3000,
  className,
  textClassName = "",
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef<HTMLDivElement>(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
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
        "[background:linear-gradient(to_bottom,rgba(168,85,247,0.8),rgba(236,72,153,0.8))]",
        "shadow-[inset_0_-1px_rgba(168,85,247,0.3),inset_0_0_0_1px_rgba(168,85,247,0.4),_0_4px_8px_rgba(168,85,247,0.2)]",
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

export default function ResponsiveHeroSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 1, 1], // Cubic bezier format
      },
    },
  };

  const flipComponentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: [0.42, 0, 1, 1],
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 sm:gap-8 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] sm:leading-tight max-w-4xl lg:max-w-6xl"
      >
        <motion.span variants={itemVariants} className="inline-block">
          Make your websites look
        </motion.span>

        <motion.div
          variants={flipComponentVariants}
          className="inline-block mx-2 sm:mx-4"
        >
          <ContainerTextFlip
            words={["stunning", "modern", "beautiful", "amazing", "professional"]}
            interval={2500}
            className="mx-2 sm:mx-4"
            animationDuration={600}
          />
        </motion.div>

        <br className="hidden sm:block" />

        <motion.span
          variants={itemVariants}
          className="block sm:inline mt-2 sm:mt-0"
        >
          and captivating
        </motion.span>
      </motion.div>
    </section>
  );
}

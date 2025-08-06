"use client";

import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "UAE",
    href: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    image: "/images/Country/uae.jpg",
  },
  {
    id: 2,
    title: "Saudi Arabia",
    href: "https://en.wikipedia.org/wiki/Saudi_Arabia",
    image: "/images/Country/saudi_arabia.jpg",
  },
  {
    id: 3,
    title: "Qatar",
    href: "https://en.wikipedia.org/wiki/Qatar",
    image: "/images/Country/qatar.jpg",
  },
  {
    id: 4,
    title: "Bahrain",
    href: "https://en.wikipedia.org/wiki/Bahrain",
    image: "/images/Country/bahrain.jpg",
  },
  {
    id: 5,
    title: "Kuwait",
    href: "https://en.wikipedia.org/wiki/Kuwait",
    image: "/images/Country/kuwait.jpg",
  },
  {
    id: 6,
    title: "Oman",
    href: "https://en.wikipedia.org/wiki/Oman",
    image: "/images/Country/oman.jpg",
  },
  {
    id: 7,
    title: "Canada",
    href: "https://en.wikipedia.org/wiki/Canada",
    image: "/images/Country/canada.jpg",
  },
  {
    id: 8,
    title: "India",
    href: "https://en.wikipedia.org/wiki/India",
    image: "/images/Country/india.jpg",
  },
  {
    id: 9,
    title: "Australia",
    href: "https://en.wikipedia.org/wiki/Australia",
    image: "/images/Country/australia.jpg",
  },
  {
    id: 10,
    title: "UK",
    href: "https://en.wikipedia.org/wiki/United_Kingdom",
    image: "/images/Country/uk.jpg",
  },
  {
    id: 11,
    title: "USA",
    href: "https://en.wikipedia.org/wiki/United_States",
    image: "/images/Country/usa.jpg",
  },
];

export default function CountryCard() {
  const baseX = useMotionValue(0);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scrolling logic
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      baseX.set(baseX.get() - 0.1 * delta);
      if (scrollRef.current) {
        const width = scrollRef.current.scrollWidth / 2;
        if (Math.abs(baseX.get()) >= width) {
          baseX.set(0); // Reset scroll
        }
      }
    }
  });

  return (
    <div className="overflow-hidden w-full py-10 select-none ">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          We covered{" "}
          <span className="relative inline-flex items-center justify-center mx-1">
            {/* Animated glow ring */}
            <motion.span
              className="absolute w-full h-full rounded-full border-2 border-blue-400"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10 bg-transparent text-blue-500 font-bold rounded-full px-4 py-1 text-base sm:text-lg shadow-md">
              50+
            </span>
          </span>
          clients over the countries
        </h3>
      </div>

      {/* Marquee Carousel */}
      <motion.div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 w-max px-4"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        style={{ x: baseX }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {[...cards, ...cards].map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`}
            whileHover={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link
              href={card.href}
              className="block w-[200px] sm:w-[240px] md:w-[260px] h-[300px] sm:h-[320px] rounded-xl overflow-hidden shadow-md "
            >
              <motion.div className="w-full h-48 relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </motion.div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-center text-white">
                  {card.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

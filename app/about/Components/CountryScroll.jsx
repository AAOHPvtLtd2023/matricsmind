"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const cards = [
  { id: 1, title: "Design Thinking", image: "/images/design.jpg", href: "/course/design" },
  { id: 2, title: "Frontend Magic", image: "/images/frontend.jpg", href: "/course/frontend" },
  { id: 3, title: "Backend Power", image: "/images/backend.jpg", href: "/course/backend" },
  { id: 4, title: "AI Revolution", image: "/images/ai.jpg", href: "/course/ai" },
  { id: 5, title: "Cloud Systems", image: "/images/cloud.jpg", href: "/course/cloud" },
];

export default function CountryCard() {
  const baseX = useMotionValue(0);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scrolling logic
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      baseX.set(baseX.get() - 0.05 * delta);
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
              300+
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
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800">
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

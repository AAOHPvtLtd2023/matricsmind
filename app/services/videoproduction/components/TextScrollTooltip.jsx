"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const scrollItems = [
  {
    id: "html",
    label: "HTML",
    tooltip: "Markup for web pages",
    icon: "🌐",
  },
  {
    id: "css",
    label: "CSS",
    tooltip: "Style rules for layout and visuals",
    icon: "🎨",
  },
  {
    id: "js",
    label: "JavaScript",
    tooltip: "Logic & interactivity for the web",
    icon: "⚙️",
  },
  {
    id: "react",
    label: "React",
    tooltip: "Modern JavaScript UI library",
    icon: "⚛️",
  },
  {
    id: "next",
    label: "Next.js",
    tooltip: "React framework for fullstack apps",
    icon: "🚀",
  },
  {
    id: "node",
    label: "Node.js",
    tooltip: "Backend JS runtime",
    icon: "🟢",
  },
];

const duplicatedItems = [...scrollItems, ...scrollItems];

export default function TextScrollTooltip() {
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [pausedRow, setPausedRow] = useState(null);

  const handleEnter = (item, e, row) => {
    setPausedRow(row);
    setHovered(item);
    if (e?.clientX) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMove = (e) => {
    if (hovered && e?.clientX) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
  };

  const handleLeave = () => {
    setHovered(null);
    setPausedRow(null);
  };

  // For mobile touch
  const handleTouch = (item, row) => {
    if (hovered?.id === item.id) {
      setHovered(null);
      setPausedRow(null);
    } else {
      setHovered(item);
      setPausedRow(row);
    }
  };

  const Row = ({ index, direction, speed }) => (
    <motion.div
      className={`flex gap-10 px-4 py-3 whitespace-nowrap ${direction === "right" ? "flex-row-reverse" : ""}`}
      animate={{ x: pausedRow === index ? 0 : direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
      onMouseMove={handleMove}
    >
      {duplicatedItems.map((item, idx) => (
        <motion.span
          key={`${item.id}-${idx}-${index}`}
          onMouseEnter={(e) => handleEnter(item, e, index)}
          onMouseLeave={handleLeave}
          onClick={() => handleTouch(item, index)} // for mobile
          className="flex items-center gap-2 text-white/90 hover:text-cyan-400 text-lg sm:text-xl font-medium transition cursor-pointer select-none"
          whileHover={{ scale: 1.1 }}
        >
          <span>{item.icon}</span>
          {item.label}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="relative w-full py-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Fade Edges */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Rows */}
      <div className="flex flex-col gap-4 z-0">
        <Row index={0} direction="left" speed={25} />
        <Row index={1} direction="right" speed={30} />
        <Row index={2} direction="left" speed={35} />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mouse.x + 15,
              y: mouse.y - 20,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="fixed z-50 pointer-events-none bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-md shadow-xl text-sm"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            {hovered.tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

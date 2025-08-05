"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FancyQuoteButton({ text = "Get a Free Quote Today", link = "#" }) {
  const isExternal = link.startsWith("http");

  const ButtonContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                 bg-gradient-to-br from-[#ff9100] to-[#1c3784] 
                 text-white font-semibold text-lg shadow-lg 
                 transition-all duration-300 hover:shadow-2xl 
                 w-[90vw] max-w-md mx-auto"
    >
      {/* Glow Behind */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ff9100]/40 to-[#1c3784]/40 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 z-[-1]" />

      {/* Button Text */}
      <span>{text}</span>

      {/* Animated Arrow */}
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ArrowRight size={20} />
      </motion.span>
    </motion.button>
  );

  return isExternal ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {ButtonContent}
    </a>
  ) : (
    <Link href={link}>{ButtonContent}</Link>
  );
}

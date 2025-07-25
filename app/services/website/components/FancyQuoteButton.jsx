"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FancyQuoteButton({ text = "Get a Free Quote Today" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#000d29] text-white font-semibold text-lg shadow-md transition-all duration-300 hover:shadow-xl w-[90vw] justify-self-center"
    >
      {text}
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
}

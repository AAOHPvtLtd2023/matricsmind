"use client";

import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

const roles = [
  { title: "Digital Marketing Strategy", bg: "bg-[#ff910020]", delay: 0 },
  { title: "CGI", bg: "bg-[#1c378420]", delay: 0.1 },
  { title: "Google ads", bg: "bg-[#ff910010]", delay: 0.2 },
  { title: "Web solution", bg: "bg-[#1c378420]", delay: 0.3 },
  { title: "Influencer Marketing", bg: "bg-[#ff9100] text-white", delay: 0.4 },
  { title: "Content marketing", bg: "bg-[#ff910015]", delay: 0.5 },
  { title: "UX/UI Design", bg: "bg-[#1c378420]", delay: 0.6 },
];

const fallVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  }),
};

const shineVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export default function CardFalling() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden px-6">
      {/* Shiny animated title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#ff9100] via-white to-[#1c3784] bg-clip-text text-transparent bg-[length:300%_300%]"
        variants={shineVariants}
        animate="animate"
      >
        Delivering Digital Solutions That Drive Growth
      </motion.h2>

      {/* Falling animated role cards */}
      <div className="flex flex-wrap gap-4 justify-center max-w-5xl">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium shadow-md ${role.bg} text-white hover:scale-105 transition-transform duration-300`}
            custom={role.delay}
            initial="hidden"
            animate="visible"
            variants={fallVariants}
          >
            {role.title}
          </motion.div>
        ))}
      </div>

      {/* Floating emoji or icon */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
        className="absolute top-10 right-10 text-4xl text-[#ff9100]"
      >
        <ThumbsUp className="text-[#ff9100]" size={32} />
      </motion.div>
    </div>
  );
}

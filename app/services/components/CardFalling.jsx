"use client";

import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

const roles = [
  { title: "Digital Marketing Strategy", bg: "bg-gray-200", delay: 0 },
  { title: "CGI", bg: "bg-purple-300", delay: 0.1 },
  { title: "Google ads", bg: "bg-green-100", delay: 0.2 },
  { title: "Web solution", bg: "bg-orange-100", delay: 0.3 },
  { title: "Influencer Marketing", bg: "bg-purple-500 text-white", delay: 0.4 },
  { title: "Content marketing", bg: "bg-gray-100", delay: 0.5 },
  { title: "UX/UI Design", bg: "bg-green-100", delay: 0.6 },
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

export default function CardFalling() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-black overflow-hidden px-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-gray-400 text-center mb-8">
        Delivering Digital Solutions That Drive Growth
      </h2>

      <div className="flex flex-wrap gap-4 justify-center max-w-5xl">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow-md ${role.bg} text-black`}
            custom={role.delay}
            initial="hidden"
            animate="visible"
            variants={fallVariants}
          >
            {role.title}
          </motion.div>
        ))}
      </div>

      {/* Emoji or Icon */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
        className="absolute top-10 right-10 text-4xl"
      >
        👍
        {/* Or Lucide Icon: <ThumbsUp className="text-white" size={32} /> */}
      </motion.div>
    </div>
  );
}

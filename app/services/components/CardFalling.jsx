"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TextWithLinks from "../../components/TextWithLinks";

const roles = [
  { title: "Digital Marketing Strategy", bg: "bg-[#ff910020]", delay: 0 },
  { title: "CGI", bg: "bg-[#1c378420]", delay: 0.1 },
  { title: "Google ads", bg: "bg-[#ff910010]", delay: 0.2 },
  { title: "Web solution", bg: "bg-[#1c378420]", delay: 0.3 },
  { title: "Influencer Marketing", bg: "bg-[#ff910010] text-white", delay: 0.4 },
  { title: "Content marketing", bg: "bg-[#ff910015]", delay: 0.5 },
  { title: "UX/UI Design", bg: "bg-[#1c378420]", delay: 0.6 },
];

const fallVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 90,
      damping: 12,
    },
  }),
};

const shineVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 6, ease: "linear", repeat: Infinity },
  },
};

export default function CardFalling() {
  const [particles, setParticles] = useState([]);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const isMobile = viewport.width < 640;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", () =>
        setViewport({ width: window.innerWidth, height: window.innerHeight })
      );
    }
  }, []);

  useEffect(() => {
    const newParticles = [];
    const count = isMobile ? 8 : 15;
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isMobile ? 2.5 : 4) + 1.5,
        delay: Math.random() * 3,
        duration: Math.random() * 4 + 6,
      });
    }
    setParticles(newParticles);
  }, [isMobile]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${
        isMobile ? "min-h-[35vh]" : "min-h-[35vh]"
      } overflow-hidden px-3`}
    >
      {/* Background Stars */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Rocket */}
      <motion.div
        className="absolute z-10"
        initial={{ x: "100vw", y: "60vh", rotate: -45 }}
        animate={{
          x: [viewport.width, viewport.width * 0.5, -100],
          y: [viewport.height * 0.7, viewport.height * 0.4, -100],
          rotate: [-45, -80, -120],
        }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
        style={{ scale: isMobile ? 0.5 : 0.9 }}
      >
        <svg
          width={isMobile ? "36" : "56"}
          height={isMobile ? "36" : "56"}
          viewBox="0 0 100 100"
          className="drop-shadow-lg"
        >
          <path d="M50 10 L35 70 L50 60 L65 70 Z" fill="#ff9100" stroke="#ff7700" strokeWidth="2" />
          <circle cx="50" cy="15" r="8" fill="#ffb347" />
          <path d="M35 50 L25 65 L35 70 Z" fill="#1c3784" />
          <path d="M65 50 L75 65 L65 70 Z" fill="#1c3784" />
          <circle cx="50" cy="35" r="6" fill="#87ceeb" stroke="#4682b4" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        className={`relative z-20 font-extrabold text-center bg-gradient-to-r from-[#ff9100] via-white to-[#1c3784] bg-clip-text text-transparent bg-[length:300%_300%] leading-tight tracking-tight ${
          isMobile ? "text-2xl" : "text-2xl sm:text-5xl"
        }`}
        variants={shineVariants}
        animate="animate"
      >
        Delivering Digital Solutions That Drive Growth
      </motion.h2>

      {/* Role Tags */}
      <div
        className={`relative z-20 mt-4 flex flex-wrap gap-2 justify-center ${
          isMobile ? "max-w-sm" : "max-w-4xl"
        }`}
      >
        {roles.map((role, i) => (
          <motion.div
            key={i}
            className={`rounded-full font-medium ${role.bg} text-white shadow-md hover:scale-105 transition-transform duration-300 ${
              isMobile ? "px-3 py-1.5 text-xs" : "px-5 py-2 text-sm sm:text-base lg:text-lg"
            }`}
            custom={role.delay}
            initial="hidden"
            animate="visible"
            variants={fallVariants}
          >
            <TextWithLinks text={role.title} className="text-center" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

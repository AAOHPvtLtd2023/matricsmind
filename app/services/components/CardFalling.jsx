"use client";
import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 3,
        duration: Math.random() * 4 + 6,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[30vh] overflow-hidden">
      
      {/* Animated Background Stars */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Rocket SVG */}
      <motion.div
        className="absolute z-10"
        initial={{ x: "100vw", y: "60vh", rotate: -45 }}
        animate={{
          x: [window.innerWidth, window.innerWidth * 0.5, -100],
          y: [window.innerHeight * 0.7, window.innerHeight * 0.4, -100],
          rotate: [-45, -80, -120],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" className="drop-shadow-lg">
          {/* Rocket Body */}
          <path
            d="M50 10 L35 70 L50 60 L65 70 Z"
            fill="#ff9100"
            stroke="#ff7700"
            strokeWidth="2"
          />
          {/* Rocket Tip */}
          <circle cx="50" cy="15" r="8" fill="#ffb347" />
          {/* Rocket Wings */}
          <path d="M35 50 L25 65 L35 70 Z" fill="#1c3784" />
          <path d="M65 50 L75 65 L65 70 Z" fill="#1c3784" />
          {/* Window */}
          <circle cx="50" cy="35" r="6" fill="#87ceeb" stroke="#4682b4" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Dynamic Smoke Trail */}
      <motion.div
        className="absolute z-5"
        initial={{ x: "100vw", y: "60vh" }}
        animate={{
          x: [window.innerWidth + 50, window.innerWidth * 0.5 + 50, -50],
          y: [window.innerHeight * 0.7 + 20, window.innerHeight * 0.4 + 20, -80],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-gray-400 via-gray-300 to-transparent"
            style={{
              width: 15 + i * 8,
              height: 15 + i * 8,
              left: -i * 25,
              top: -i * 10,
            }}
            animate={{
              opacity: [0.8 - i * 0.1, 0.4 - i * 0.05, 0],
              scale: [0.5 + i * 0.1, 1.2 + i * 0.1, 0.8 + i * 0.1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Fire/Exhaust Effect */}
      <motion.div
        className="absolute z-5"
        initial={{ x: "100vw", y: "60vh" }}
        animate={{
          x: [window.innerWidth + 40, window.innerWidth * 0.5 + 40, -60],
          y: [window.innerHeight * 0.7 + 35, window.innerHeight * 0.4 + 35, -65],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 8 + i * 3,
              height: 8 + i * 3,
              left: -i * 15,
              top: -i * 5,
              background: i < 2 ? '#ff4500' : i < 4 ? '#ff8c00' : '#ffd700',
            }}
            animate={{
              opacity: [1 - i * 0.15, 0.6 - i * 0.1, 0],
              scale: [0.8, 1.5, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Scattered Ash Particles */}
      <motion.div
        className="absolute z-5"
        initial={{ x: "100vw", y: "60vh" }}
        animate={{
          x: [window.innerWidth + 60, window.innerWidth * 0.5 + 60, -40],
          y: [window.innerHeight * 0.7 + 10, window.innerHeight * 0.4 + 10, -90],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-400"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              left: -i * 20 + Math.random() * 40,
              top: -i * 8 + Math.random() * 20,
            }}
            animate={{
              opacity: [0.9, 0.3, 0],
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.h2
        className="relative z-20 text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-[#ff9100] via-white to-[#1c3784] bg-clip-text text-transparent bg-[length:300%_300%] leading-none pb-2 mb-3"
        variants={shineVariants}
        animate="animate"
      >
        Delivering Digital Solutions That Drive Growth
      </motion.h2>

      <div className="relative z-20 flex flex-wrap gap-1 justify-center max-w-5xl">
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

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
        className="absolute top-10 right-10 text-4xl text-[#ff9100] z-20"
      >
        <ThumbsUp className="text-[#ff9100]" size={32} />
      </motion.div>
    </div>
  );
}
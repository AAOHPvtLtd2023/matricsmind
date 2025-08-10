import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingBeamBackground = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [beams, setBeams] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push({
          id: i,
          x: Math.random() * 100,
          y: -5,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 3,
        });
      }
      setStars(arr);
    };

    const generateBeams = () => {
      const arr = [];
      for (let i = 0; i < 12; i++) {
        arr.push({
          id: i,
          x: Math.random() * 120 - 10,
          y: Math.random() * 120 - 10,
          width: Math.random() * 400 + 200,
          height: Math.random() * 4 + 2,
          rotation: Math.random() * 360,
        });
      }
      setBeams(arr);
    };

    const generateParticles = () => {
      const arr = [];
      for (let i = 0; i < 50; i++) {
        arr.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
        });
      }
      setParticles(arr);
    };

    generateStars();
    generateBeams();
    generateParticles();
  }, []);

  return (
    <div className="relative w-full min-h-full">
      {/* Beams */}
      <div className="fixed inset-0 z-0">
        {beams.map((beam, idx) => (
          <motion.div
            key={beam.id}
            className="absolute"
            initial={{ opacity: 0.3, rotate: beam.rotation }}
            animate={{
              x: [0, 15, -10, -15, 0],
              y: [0, -10, -15, 10, 0],
              opacity: [0.3, 0.6, 0.8, 0.5, 0.3],
              rotate: [
                beam.rotation,
                beam.rotation + 2,
                beam.rotation + 5,
                beam.rotation + 3,
                beam.rotation,
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
            style={{
              left: `${beam.x}%`,
              top: `${beam.y}%`,
              width: beam.width,
              height: beam.height,
              background:
                idx % 3 === 0
                  ? "linear-gradient(to right, transparent, rgba(255,145,0,0.5), transparent)"
                  : idx % 3 === 1
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)"
                  : "linear-gradient(to right, transparent, rgba(28,55,132,0.6), transparent)",
            }}
          />
        ))}
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-0">
        {particles.map((p, i) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/60 blur-sm"
            initial={{ opacity: 0.4, x: 0, y: 0 }}
            animate={{
              x: [0, 20, -15, 0],
              y: [0, -30, 10, 0],
              opacity: [0.4, 0.8, 0.6, 0.4],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.map((s, i) => (
          <motion.div
            key={s.id}
            className="absolute bg-white rounded-full"
            initial={{ opacity: 0, y: -120 }}
            animate={{
              opacity: [0, 1, 0],
              y: ["-120px", "100vh"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            style={{
              left: `${s.x}%`,
              width: s.size * 2,
              height: s.size * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingBeamBackground;

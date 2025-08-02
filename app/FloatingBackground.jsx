import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  // Generate floating orbs with varied properties
  const floatingOrbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 80,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 10,
  }));

  // Generate smaller accent dots
  const accentDots = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black" />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 145, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 145, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main floating orbs */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
            background: orb.id % 3 === 0 
              ? `radial-gradient(circle, rgba(255, 145, 0, 0.4) 0%, rgba(255, 145, 0, 0.1) 40%, transparent 70%)`
              : orb.id % 3 === 1
              ? `radial-gradient(circle, rgba(28, 55, 132, 0.4) 0%, rgba(28, 55, 132, 0.1) 40%, transparent 70%)`
              : `radial-gradient(circle, rgba(255, 145, 0, 0.2) 0%, rgba(28, 55, 132, 0.2) 50%, transparent 70%)`,
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -120, 80, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.4, 0.8, 0.3, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Large background shapes */}
      <motion.div
        className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 145, 0, 0.1) 0%, transparent 60%)',
          filter: 'blur(3px)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(28, 55, 132, 0.15) 0%, transparent 60%)',
          filter: 'blur(3px)'
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating accent dots */}
      {accentDots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.initialX}%`,
            top: `${dot.initialY}%`,
            background: dot.id % 2 === 0 ? '#ff9100' : '#1c3784',
            boxShadow: dot.id % 2 === 0 
              ? '0 0 20px rgba(255, 145, 0, 0.6)' 
              : '0 0 20px rgba(28, 55, 132, 0.6)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Animated light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #ff9100, transparent)',
          filter: 'blur(2px)',
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #1c3784, transparent)',
          filter: 'blur(2px)',
        }}
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scaleX: [1, 2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Subtle animated mesh overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(255, 145, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(28, 55, 132, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 145, 0, 0.05) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner accent glows */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, #ff9100, transparent)',
          filter: 'blur(60px)',
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 opacity-15"
        style={{
          background: 'radial-gradient(circle, #1c3784, transparent)',
          filter: 'blur(60px)',
        }}
        />
    </div>
  );
};
export default FloatingBackground;

// Demo component with dark theme
// const FloatingBackground = () => {
//   return (
//     <div className="relative min-h-screen">
//       <FloatingBackgroundDemo />
      
//       {/* Content overlay */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center">
//         <div className="text-center p-8 bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-4">
//           <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
//             Creative Studio
//           </h1>
//           <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//             Immersive design experiences with cutting-edge aesthetics
//           </p>
//           <div className="flex gap-6 justify-center items-center">
//             <div 
//               className="w-12 h-12 rounded-full shadow-2xl border-2 border-white/20"
//               style={{ 
//                 backgroundColor: '#ff9100',
//                 boxShadow: '0 0 30px rgba(255, 145, 0, 0.5)'
//               }}
//             />
//             <div 
//               className="w-12 h-12 rounded-full shadow-2xl border-2 border-white/20"
//               style={{ 
//                 backgroundColor: '#1c3784',
//                 boxShadow: '0 0 30px rgba(28, 55, 132, 0.5)'
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';

const FloatingBeamBackground = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [beams, setBeams] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 20; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: -5,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 3 + 2,
          delay: Math.random() * 8,
          twinkleDelay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    const generateBeams = () => {
      const newBeams = [];
      for (let i = 0; i < 12; i++) {
        newBeams.push({
          id: i,
          x: Math.random() * 120 - 10,
          y: Math.random() * 120 - 10,
          width: Math.random() * 400 + 200,
          height: Math.random() * 4 + 2,
          rotation: Math.random() * 360,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 5,
        });
      }
      setBeams(newBeams);
    };

    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 10,
        });
      }
      setParticles(newParticles);
    };

    generateStars();
    generateBeams();
    generateParticles();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0" />
      
      {/* Fixed Animated mesh background */}
      <div className="fixed inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff9100]/30 via-[#1c3784]/20 to-white/10 animate-pulse" 
             style={{ animationDuration: '8s' }} />
      </div>

      {/* Fixed Main Floating Beams */}
      <div className="fixed inset-0 z-0">
        {beams.map((beam, index) => (
          <div
            key={beam.id}
            className="absolute"
            style={{
              left: `${beam.x}%`,
              top: `${beam.y}%`,
              transform: `rotate(${beam.rotation}deg)`,
              animation: `floatBeam ${beam.duration}s ease-in-out infinite`,
              animationDelay: `${beam.delay}s`,
            }}
          >
            <div
              className={`
                ${index % 3 === 0 ? 'bg-gradient-to-r from-transparent via-[#ff9100]/50 to-transparent' : ''}
                ${index % 3 === 1 ? 'bg-gradient-to-r from-transparent via-white/40 to-transparent' : ''}
                ${index % 3 === 2 ? 'bg-gradient-to-r from-transparent via-[#1c3784]/60 to-transparent' : ''}
                shadow-2xl blur-sm
              `}
              style={{
                width: `${beam.width}px`,
                height: `${beam.height}px`,
              }}
            />
            {/* Beam glow effect */}
            <div
              className={`
                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                ${index % 3 === 0 ? 'bg-gradient-to-r from-transparent via-[#ff9100]/30 to-transparent' : ''}
                ${index % 3 === 1 ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : ''}
                ${index % 3 === 2 ? 'bg-gradient-to-r from-transparent via-[#1c3784]/40 to-transparent' : ''}
                blur-xl
              `}
              style={{
                width: `${beam.width * 1.5}px`,
                height: `${beam.height * 4}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Fixed Floating Particles */}
      <div className="fixed inset-0 z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/60 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Fixed Enhanced Falling Stars - Full Screen Coverage */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100vw', height: '100vh' }}>
        {stars.map((star, index) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}%`,
              animation: `meteorFall ${12 + star.speed}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          >
            {/* Star with enhanced glow */}
            <div className="relative">
              {/* Outer glow */}
              <div
                className={`
                  absolute rounded-full blur-xl
                  ${index % 3 === 0 ? 'bg-[#ff9100]/80' : ''}
                  ${index % 3 === 1 ? 'bg-white/80' : ''}
                  ${index % 3 === 2 ? 'bg-[#1c3784]/80' : ''}
                `}
                style={{
                  width: `${star.size * 8}px`,
                  height: `${star.size * 8}px`,
                  animation: `starGlow ${2 + star.twinkleDelay}s ease-in-out infinite`,
                }}
              />
              
              {/* Middle glow */}
              <div
                className="absolute bg-white/90 rounded-full blur-md"
                style={{
                  width: `${star.size * 4}px`,
                  height: `${star.size * 4}px`,
                  top: `${star.size * 2}px`,
                  left: `${star.size * 2}px`,
                }}
              />
              
              {/* Star core */}
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: `${star.size * 2}px`,
                  height: `${star.size * 2}px`,
                  top: `${star.size * 3}px`,
                  left: `${star.size * 3}px`,
                }}
              />
            </div>
            
            {/* Enhanced trail */}
            <div
              className={`
                absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full
                ${index % 3 === 0 ? 'bg-gradient-to-b from-[#ff9100]/70 via-[#ff9100]/40 to-transparent' : ''}
                ${index % 3 === 1 ? 'bg-gradient-to-b from-white/70 via-white/40 to-transparent' : ''}
                ${index % 3 === 2 ? 'bg-gradient-to-b from-[#1c3784]/70 via-[#1c3784]/40 to-transparent' : ''}
                blur-sm
              `}
              style={{
                width: `${star.size * 1.5}px`,
                height: `${star.size * 40}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Fixed Dynamic Light Orbs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#ff9100]/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-[#1c3784]/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#ff9100]/6 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '3s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        @keyframes floatBeam {
          0%, 100% {
            transform: translateX(0px) translateY(0px) rotate(var(--rotation, 0deg));
            opacity: 0.3;
          }
          25% {
            transform: translateX(15px) translateY(-10px) rotate(calc(var(--rotation, 0deg) + 2deg));
            opacity: 0.6;
          }
          50% {
            transform: translateX(-10px) translateY(-15px) rotate(calc(var(--rotation, 0deg) + 5deg));
            opacity: 0.8;
          }
          75% {
            transform: translateX(-15px) translateY(10px) rotate(calc(var(--rotation, 0deg) + 3deg));
            opacity: 0.5;
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          33% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.8;
          }
          66% {
            transform: translateY(10px) translateX(-15px);
            opacity: 0.6;
          }
        }

        @keyframes meteorFall {
          0% {
            transform: translateY(-120px) translateX(-50px) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(calc(100vh + 120px)) translateX(50px) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes starGlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
};


export default FloatingBeamBackground;

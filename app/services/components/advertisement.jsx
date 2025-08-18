"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TextWithLinks from "../../components/TextWithLinks"; // adjust path if needed

const AdvertisementSectionComponent = ({
  title = "Default",
  description = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [title]);

  const normalizedTitle = title.trim().toLowerCase().replace(/\s+/g, "");

  const configMap = {
    techsolution: {
      route: "/services/website",
      backgroundImage: "/images/Services/website.jpg",
    },
    brandsolution: {
      route: "/services/branding",
      backgroundImage: "/images/Services/branding.jpg",
    },
    visualsolution: {
      route: "/services/videoproduction",
      backgroundImage: "/images/Services/videoproduction.jpg",
    },
  };

  const { route, backgroundImage } = configMap[normalizedTitle] || {
    route: "/",
    backgroundImage: "/images/default-bg.jpg",
  };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.98 }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 30px rgba(255, 145, 0, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-[90vw] mx-auto mb-8 overflow-hidden bg-cover bg-center rounded-2xl shadow-xl"
      style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center items-center text-center h-full px-4 sm:px-8">
        <h1
          className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FF9100] to-[#1C3784] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-wide transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {title.toUpperCase()}
        </h1>

        <div
          className={`space-y-2 sm:space-y-3 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-white/90 text-lg sm:text-xl">
            <TextWithLinks text={description} />
          </p>
          <p className="text-white/80 text-base sm:text-lg">
            From{" "}
            <span className="text-[#FF9100] font-medium">
              {title.toLowerCase()}
            </span>{" "}
            essence to visual identity.
          </p>
        </div>

        {/* CTA with blur and glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 rounded-xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
        >
          <Link href={route} passHref>
            <button className="group inline-flex items-center gap-2 text-white text-sm sm:text-base font-semibold">
              View More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdvertisementSectionComponent;

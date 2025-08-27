"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowLeft, Code, Sparkles, ChevronDown, Star } from "lucide-react";

export default function ImmersiveProjectPage({ params }) {
  const router = useRouter();
  const { slug } = params || {};
  const title =
    slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) ||
    "Amazing Project";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroInView = useInView(heroRef, { once: true });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Example images
  const images = [
    { src: "/images/sample1.jpg", caption: "Overview of the system" },
    { src: "/images/sample2.jpg", caption: "Architecture diagram" },
    { src: "/images/sample3.jpg", caption: "Real-world usage" },
  ];

  // Extra image section
  const extraImages = [
    { src: "/images/sample4.jpg", caption: "User interface showcase" },
    { src: "/images/sample5.jpg", caption: "Workflow in action" },
    { src: "/images/sample6.jpg", caption: "Team collaboration" },
    { src: "/images/sample7.jpg", caption: "Data insights visualization" },
  ];

  // Example info cards
  const infoCards = [
    {
      title: "Background",
      text: "Explain the background of the topic here. Describe when it started, its motivation, and context.",
    },
    {
      title: "Applications",
      text: "Show how this topic/project can be applied in real-world scenarios across industries.",
    },
    {
      title: "Benefits",
      text: "List out the advantages, improvements, or value this brings to users or organizations.",
    },
    {
      title: "Future Scope",
      text: "Discuss how this topic might evolve in the future and possible improvements.",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-800/5" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/10 to-blue-800/10 blur-3xl"
          animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => router.back()}
          className="fixed top-8 left-8 z-50 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </motion.button>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 opacity-20"
        >
          <Code size={80} className="text-orange-400" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 left-20 opacity-20"
          style={{ animationDelay: "3s" }}
        >
          <Sparkles size={60} className="text-blue-400" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-blue-800/20 px-4 py-2 rounded-full border border-orange-500/30"
              >
                <Star size={16} className="text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">
                  Featured Topic
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-800 bg-clip-text text-transparent">
                  {title}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-white/90 leading-relaxed max-w-2xl"
              >
                Explore insights, images, and details about this topic in one
                immersive page. Learn its background, applications, and future
                scope while enjoying a visual experience.
              </motion.p>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div style={{ y: parallaxY }} className="relative group">
                <img
                  src="/images/hero-sample.jpg" // <-- replace with your hero image
                  alt="Hero Visual"
                  className="rounded-3xl shadow-2xl border border-white/10 object-cover w-full h-[450px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
          >
            <span className="text-white/70 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} className="text-orange-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Images + Info Section */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 space-y-20">
          {/* Topic Overview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              About {title}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              This section gives detailed information about the topic. You can
              describe its purpose, benefits, and why it matters.
            </p>
          </motion.div>
          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  {card.title}
                </h3>
                <p className="text-white/90 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
          {/* Extra Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
              More Visuals
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {extraImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-lg"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-white text-sm font-medium text-center px-2">
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

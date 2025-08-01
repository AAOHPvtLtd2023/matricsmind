"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Code,
  Zap,
  Layers,
  Sparkles,
  Eye,
  Download,
  Share2,
  ChevronDown,
  Star,
  Globe,
  Database
} from 'lucide-react';

export default function ImmersiveProjectPage({ params }) {
   const router = useRouter();
  const { slug } = params || {};
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Amazing Project";
  
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);
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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const techStack = [
    { name: "Next.js", icon: "⚡", color: "from-orange-500 to-orange-600" },
    { name: "React", icon: "⚛️", color: "from-blue-800 to-blue-900" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-orange-400 to-orange-500" },
    { name: "Node.js", icon: "🟢", color: "from-blue-700 to-blue-800" },
    { name: "MongoDB", icon: "🍃", color: "from-orange-600 to-orange-700" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for performance with 99+ Lighthouse scores"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modern Architecture",
      description: "Built with cutting-edge technologies and best practices"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Ready",
      description: "Internationalization support with multi-language capabilities"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Backend",
      description: "Robust database design that grows with your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-800/5" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/10 to-blue-800/10 blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-orange-400/30 rounded-full pointer-events-none"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            opacity: 0 
          }}
          animate={{ 
            y: [null, -100, null],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

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
          style={{ animationDelay: '3s' }}
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
                <span className="text-orange-300 text-sm font-medium">Featured Project</span>
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
                A revolutionary web application that pushes the boundaries of modern development. 
                Experience cutting-edge technology combined with stunning design and seamless user experience.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2 text-white"
                >
                  <ExternalLink size={20} />
                  <span>View Live Project</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-800/20 backdrop-blur-md px-8 py-4 rounded-xl font-semibold border border-blue-800/40 hover:bg-blue-800/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { label: "Performance", value: "99" },
                  { label: "Accessibility", value: "100" },
                  { label: "Best Practices", value: "95" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                style={{ y: parallaxY }}
                className="relative group"
              >
                {/* Project Preview */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-blue-800/20 flex items-center justify-center relative">
                    {/* Mock Browser UI */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800/80 flex items-center px-4 space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-700/50 rounded mx-4 h-6 flex items-center px-3">
                        <span className="text-xs text-gray-400">https://amazing-project.com</span>
                      </div>
                    </div>

                    {/* Play Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300"
                    >
                      <Play size={32} className="text-white ml-1" />
                    </motion.button>

                    {/* Animated Glow */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-800/20 blur-xl"
                    />
                  </div>
                </div>

                {/* Floating Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-4"
                >
                  {[
                    { icon: <Eye size={20} />, label: "Preview" },
                    { icon: <Download size={20} />, label: "Download" },
                    { icon: <Share2 size={20} />, label: "Share" }
                  ].map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1, x: -5 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                      title={action.label}
                    >
                      {action.icon}
                    </motion.button>
                  ))}
                </motion.div>
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

      {/* Content Sections */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
              {['overview', 'features', 'tech-stack'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    Project Overview
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">
                    This project represents the pinnacle of modern web development, combining cutting-edge 
                    technologies with intuitive design to create an exceptional user experience. Every aspect 
                    has been carefully crafted to ensure maximum performance, accessibility, and scalability.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Challenge</h3>
                    <p className="text-white/90 leading-relaxed">
                      Creating a solution that balances complex functionality with simplicity, 
                      ensuring every user interaction feels natural and intuitive while maintaining 
                      enterprise-level performance and security standards.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Solution</h3>
                    <p className="text-white/90 leading-relaxed">
                      Implemented a microservices architecture with modern frontend frameworks, 
                      utilizing advanced caching strategies and progressive enhancement to 
                      deliver a lightning-fast, accessible, and scalable application.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    Key Features
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 group hover:border-orange-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'tech-stack' && (
              <motion.div
                key="tech-stack"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    Technology Stack
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Built with the most advanced and reliable technologies in the industry
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                    >
                      <div className={`bg-gradient-to-br ${tech.color} p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 text-center`}>
                        <div className="text-4xl mb-4">{tech.icon}</div>
                        <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-800/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Ready to Experience This Project?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Dive into the live experience and see how modern web development can create amazing user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2 text-white"
                >
                  <ExternalLink size={20} />
                  <span>Visit Live Project</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-800/20 backdrop-blur-md px-8 py-4 rounded-xl font-semibold border border-blue-800/40 hover:bg-blue-800/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
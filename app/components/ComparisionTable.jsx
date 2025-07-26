"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Users, Palette, Cog, MapPin, Rocket } from "lucide-react";

const tableItems = [
  {
    feature: "Focus",
    icon: <Zap className="w-5 h-5" />,
    others: "General services",
    we: "Specialized in branding & web design",
  },
  {
    feature: "Client Approach",
    icon: <Users className="w-5 h-5" />,
    others: "One-size-fits-all",
    we: "Personalized & aligned with latest industry trends",
  },
  {
    feature: "Design Philosophy",
    icon: <Palette className="w-5 h-5" />,
    others: "Uses generic templates",
    we: "Custom, creative, and brand-first design",
  },
  {
    feature: "Technical Process",
    icon: <Cog className="w-5 h-5" />,
    others: "Limited or surface-level",
    we: "In-depth, collaborative & partnership-oriented",
  },
  {
    feature: "Project Planning",
    icon: <MapPin className="w-5 h-5" />,
    others: "No clear direction",
    we: "Structured roadmap with milestones",
  },
  {
    feature: "Project Execution",
    icon: <Rocket className="w-5 h-5" />,
    others: "Reactive, unorganized",
    we: "Efficient, timely, and agile execution",
  },
];

// Enhanced animations
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const rowVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const headerVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ComparisonTable() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us?
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          See how we stand apart from the competition with our unique approach to design and development
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
        
        <div className="relative bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Header */}
          <motion.div
            variants={headerVariant}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-b border-white/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-12 md:col-span-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Features</h3>
              </div>
              <div className="col-span-12 md:col-span-4 flex items-center justify-center space-x-2">
                <X className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-red-400">Others</h3>
              </div>
              <div className="col-span-12 md:col-span-4 flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-400">We Deliver</h3>
              </div>
            </div>
          </motion.div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {tableItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={rowVariant}
                whileHover={{ 
                  scale: 1.01,
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  transition: { duration: 0.2 }
                }}
                className="grid grid-cols-12 gap-4 p-6 group transition-all duration-300"
              >
                {/* Feature Column */}
                <div className="col-span-12 md:col-span-4 flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-semibold text-white text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {item.feature}
                  </h4>
                </div>

                {/* Others Column */}
                <div className="col-span-12 md:col-span-4 flex items-center justify-center">
                  <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-4 w-full text-center group-hover:border-red-500/40 transition-all duration-300">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-red-300 font-medium uppercase tracking-wide">Typical Approach</span>
                    </div>
                    <p className="text-red-200 text-sm leading-relaxed">{item.others}</p>
                  </div>
                </div>

                {/* We Column */}
                <div className="col-span-12 md:col-span-4 flex items-center justify-center">
                  <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4 w-full text-center group-hover:border-green-500/40 transition-all duration-300">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-300 font-medium uppercase tracking-wide">Our Way</span>
                    </div>
                    <p className="text-green-200 text-sm leading-relaxed font-medium">{item.we}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

         
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
}
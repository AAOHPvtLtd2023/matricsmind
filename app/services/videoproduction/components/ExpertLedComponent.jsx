"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Camera, // Capital 'C' is required
  Clock,
  Globe,
} from "lucide-react";
import TextWithLinks from "../../../components/TextWithLinks"; // adjust path if needed

const features = [
  {
    icon: Users,
    title: "Led by Creative Strategists",
    description:
      "Driven by branding professionals with the expertise to bring your ideas to life",
  },
  {
    icon: FileText,
    title: "Creative Scripting & Storyboard Design",
    description:
      "Strategic scriptwriting and storyboard design crafted to match your brand identity and vision",
  },
  {
    icon: Camera, // Capital 'C'
    title: "Premium Video Equipment",
    description:
      "Equipped with professional-grade visuals, lighting precision, and next-gen editing solutions.",
  },
  {
    icon: Clock,
    title: "On-Time & On-Point Delivery",
    description: "On-time delivery, customized to your project needs.",
  },
  {
    icon: Globe,
    title: "Proven Results with Global Clients",
    description: "Proven track record with leading global clients.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ExpertLedComponent = () => {
  return (
    <div className="py-12 w-[90vw] flex justify-center rounded-2xl mx-auto shadow-lg">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-[#FF9100] uppercase tracking-wide">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-[#1C3784] dark:text-white">
            Your Standard is High — So Is Ours.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            We deliver customized solutions with smooth execution, making sure
            every detail works in your favor.
          </p>
        </div>

        {/* Scrollable Cards */}
        <motion.div
          className="mt-10 overflow-x-auto scrollbar-hide"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="flex gap-6 min-w-max px-4 sm:px-0">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
  key={index}
  variants={cardVariants}
  className="relative bg-[#1C3784] p-6 rounded-xl text-left flex-shrink-0 w-64 sm:w-72 hover:shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden"
>
  {/* Glow Background */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF9100] opacity-10 blur-2xl rounded-full z-0 group-hover:opacity-20 transition-opacity duration-300"></div>

  <div className="relative z-10">
    <div className="text-white group-hover:scale-110 transition-transform duration-300">
      <IconComponent className="h-12 w-12" />
    </div>
    <h3 className="mt-4 text-md font-semibold text-white group-hover:text-orange-200 transition-colors duration-300">
      <TextWithLinks text={feature.title} />
    </h3>
    <p className="mt-2 text-sm text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
      <TextWithLinks text={feature.description} />
    </p>
  </div>
</motion.div>

              );
            })}
          </div>
        </motion.div>

        {/* Grid for Mobile Fallback */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative bg-[#1C3784] p-6 rounded-xl text-center group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF9100] opacity-10 blur-2xl rounded-full z-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="mx-auto text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-orange-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertLedComponent;

"use client";

import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Built for Developers",
      description: "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of Use",
      description: "As intuitive as using an Apple, minus the cost.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. No credit card required. No nonsense.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "Share access. Scale fast. Stay secure.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description: "We’re here for you. Anytime. Anywhere.",
      icon: <IconHelp />,
    },
    {
      title: "Money-back Promise",
      description: "If you don’t love us, we’ll make it right.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Everything Else",
      description: "We ran out of copy ideas. Please forgive us.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-12 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col py-10 relative group/feature border border-[#1C3784]/30 dark:border-white/10",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {/* Hover Glow */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full",
          index < 4
            ? "bg-gradient-to-t from-[#FF9100]/10 to-transparent"
            : "bg-gradient-to-b from-[#FF9100]/10 to-transparent"
        )}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-[#FF9100] dark:text-orange-400">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#1C3784]/40 group-hover/feature:bg-[#FF9100] transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-[#1C3784] dark:text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

"use client";

import { cn } from "../../lib/utils";
import {
  IconClipboardText,
  IconCreditCard,
  IconSearch,
  IconPencil,
  IconBrush,
  IconPresentation,
  IconMessageCircle,
  IconRepeat,
  IconCheckCircle, // ✅ Replacing IconBadgeCheck
  IconCash,
  IconFileText,
  IconDownload,
} from "@tabler/icons-react";



import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "01. Project Brief",
      description:
        "Understand the client's requirements and project objectives.",
      icon: <IconClipboardText />,
    },
    {
      title: "02. 50% Advance Payment",
      description: "Secure initial payment to commence work.",
      icon: <IconCreditCard />,
    },
    {
      title: "03. Research Work",
      description:
        "Conduct thorough research on industry, competitors, and audience.",
      icon: <IconSearch />,
    },
    {
      title: "04. Sketching Ideas",
      description: "Explore and outline rough concepts and directions.",
      icon: <IconPencil />,
    },
    {
      title: "05. Design Creation",
      description:
        "Develop detailed design based on approved concept direction.",
      icon: <IconBrush />,
    },
    {
      title: "06. Initial Presentation",
      description: "Present first draft of the design to the client.",
      icon: <IconPresentation />,
    },
    {
      title: "07. Client Feedback",
      description: "Gather input and suggestions for refinement.",
      icon: <IconMessageCircle />,
    },
    {
      title: "08. Two Revisions",
      description: "Incorporate up to two rounds of revisions.",
      icon: <IconRepeat />,
    },
    {
      title: "09. Final Presentation",
      description: "Showcase the final design for client approval.",
      icon: <IconCheckCircle />,
    },
    {
      title: "10. 50% Remaining Payment",
      description: "Collect final payment before delivery.",
      icon: <IconCash />,
    },
    {
      title: "11. Delivery Guidelines",
      description: "Outline usage and technical specifications.",
      icon: <IconFileText />,
    },
    {
      title: "12. File Delivery",
      description: "Hand over final files in agreed formats.",
      icon: <IconDownload />,
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

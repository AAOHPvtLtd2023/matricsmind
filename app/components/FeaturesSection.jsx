"use client";

import { cn } from "../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import {
  IconClipboardText,
  IconCreditCard,
  IconSearch,
  IconPencil,
  IconBrush,
  IconPresentation,
  IconMessageCircle,
  IconRepeat,
  IconCheck, // ✅ Use this one instead
  IconCash,
  IconFileText,
  IconDownload,
} from "@tabler/icons-react";
import TextWithLinks from "../components/TextWithLinks"; // adjust path if needed

import { motion } from "framer-motion";

export default function FeaturesSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
const features = [
  {
    title: "Project Brief",
    description: "Understand the client's requirements and project objectives.",
    icon: (isMobile) => <IconClipboardText size={isMobile ? 32 : 48} />,
  },
  {
    title: "50% Advance Payment",
    description: "Secure initial payment to commence work.",
    icon: (isMobile) => <IconCreditCard size={isMobile ? 32 : 48} />,
  },
  {
    title: "Research Work",
    description: "Conduct thorough research on industry, competitors, and audience.",
    icon: (isMobile) => <IconSearch size={isMobile ? 32 : 48} />,
  },
  {
    title: "Sketching Ideas",
    description: "Explore and outline rough concepts and directions.",
    icon: (isMobile) => <IconPencil size={isMobile ? 32 : 48} />,
  },
  {
    title: "Design Creation",
    description: "Develop detailed design based on approved concept direction.",
    icon: (isMobile) => <IconBrush size={isMobile ? 32 : 48} />,
  },
  {
    title: "Initial Presentation",
    description: "Present first draft of the design to the client.",
    icon: (isMobile) => <IconPresentation size={isMobile ? 32 : 48} />,
  },
  {
    title: "Client Feedback",
    description: "Gather input and suggestions for refinement.",
    icon: (isMobile) => <IconMessageCircle size={isMobile ? 32 : 48} />,
  },
  {
    title: "Two Revisions",
    description: "Incorporate up to two rounds of revisions.",
    icon: (isMobile) => <IconRepeat size={isMobile ? 32 : 48} />,
  },
  {
    title: "Final Presentation",
    description: "Showcase the final design for client approval.",
    icon: (isMobile) => <IconCheck size={isMobile ? 32 : 48} />,
  },
  {
    title: "50% Remaining Payment",
    description: "Collect final payment before delivery.",
    icon: (isMobile) => <IconCash size={isMobile ? 32 : 48} />,
  },
  {
    title: "Delivery Guidelines",
    description: "Outline usage and technical specifications.",
    icon: (isMobile) => <IconFileText size={isMobile ? 32 : 48} />,
  },
  {
    title: "File Delivery",
    description: "Hand over final files in agreed formats.",
    icon: (isMobile) => <IconDownload size={isMobile ? 32 : 48} />,
  },
];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-12 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} icon={feature.icon(isMobile)} />
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
      <div className="mb-4 relative z-10 px-10 text-[#FF9100] dark:text-orange-400 text-6xl">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#1C3784]/40 group-hover/feature:bg-[#FF9100] transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-[#fff] dark:text-white">
        <TextWithLinks text={title} />
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-100 max-w-xs relative z-10 px-10">
        <TextWithLinks text={description} />
      </p>
    </motion.div>
  );
};

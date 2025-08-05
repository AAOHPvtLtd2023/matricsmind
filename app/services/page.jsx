"use client";

import HowItWorks from "./components/howitworks";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { UnderlineHighlight } from "../components/underline";
import { motion } from "framer-motion";
import AdvertisementSectionComponent from "./components/advertisement";
import ComparisonTable from "../components/ComparisionTable";
import Testimonials from "../components/testimonials";
import CompanyPartner from "../components/CompanyPartner";

export default function ServicePage() {
  return (
    <section className="w-full">
      {/* Hero / Header */}
      <AuroraBackground className="relative w-[90vw] sm:w-[95vw] lg:w-[90vw] h-[50vh] sm:h-[60vh] lg:h-[75vh] mx-auto my-10 rounded-2xl shadow-2xl flex items-center justify-center px-4 sm:px-8 overflow-hidden border border-white/10 bg-gradient-to-br from-[#FF9100]/30 via-[#1C3784]/20 to-[#1C3784]/50 backdrop-blur-md">
        {/* Optional Animated Glow Background */}
        <div className="absolute inset-0 -z-10 animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF9100]/20 via-transparent to-transparent opacity-40 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-4 items-center text-center w-full"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug sm:leading-tight drop-shadow-md">
            Thoughts worth{" "}
            {/* <UnderlineHighlight className="text-[#ff9100]"> */}
              sharing
            {/* </UnderlineHighlight> */}
            ,
            <br className="hidden sm:block" />
            strategies worth trying.
          </h2>
        </motion.div>
      </AuroraBackground>

      {/* Advertisement Sections */}
      <div className="space-y-16 sm:space-y-20 lg:space-y-24 px-4 sm:px-6 lg:px-12">
        <AdvertisementSectionComponent title="Tech Solution" description="We Build Tech That Connects People and Powers Growth" />
        <AdvertisementSectionComponent title="Brand Solution" description="Your Brand, Clearly Defined and Powerfully Delivered" />
        <AdvertisementSectionComponent title="Visual Solution" description=" Designs That Capture Eyes  — & Minds" />
      </div>

      {/* How it Works */}

      <HowItWorks />

      {/* Company Partners */}
      <CompanyPartner />
    </section>
  );
}

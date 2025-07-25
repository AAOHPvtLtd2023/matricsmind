"use client";

import React from "react";
import ExpertLedComponent from "./components/ExpertLedComponent";
import { AuroraBackground } from "../../../components/ui/aurora-background";
import { UnderlineHighlight } from "../../components/underline";
import { motion } from "framer-motion";
import Testimonials from "../../components/testimonials";
import CompanyPartner from "../../components/CompanyPartner";
import { TextScroll } from "../../../components/ui/text-scroll";
import VideoPlayerComponent from "./components/videoPlayer";
import { SparklesCore } from "../../../components/ui/sparkles";
import { Rocket, Sparkles } from "lucide-react";
import TextScrollTooltip from "./components/TextScrollTooltip";

export default function videoProductionPage() {
  return (
    <section>
      <AuroraBackground className="h-[50vh] w-[90vw] border rounded-lg shadow-lg self-center justify-self-center">
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="relative flex flex-col gap-6 items-center justify-center px-4 w-full h-full"
  >
    {/* Heading */}
    <div className="w-full flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug">
        Thoughts worth <UnderlineHighlight>sharing</UnderlineHighlight>,
        <br />
        strategies worth <UnderlineHighlight>trying</UnderlineHighlight>.
      </h2>
    </div>

    {/* Fancy Buttons */}
    <div className="flex gap-4 mt-6 flex-wrap justify-center">
      {/* Get Started */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white font-medium shadow-lg transition-all duration-300"
      >
        <SparklesCore className="w-5 h-5" />
        Get Started
      </motion.button>

      {/* Learn More */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white font-medium shadow-lg transition-all duration-300"
      >
        <Rocket className="w-5 h-5" />
        Learn More
      </motion.button>
    </div>
  </motion.div>
</AuroraBackground>
<TextScrollTooltip/>
      <ExpertLedComponent />
      <VideoPlayerComponent />
      <Testimonials />
      <CompanyPartner />

    </section>
  );
}

"use client";
import React from "react";

import { UnderlineHighlight } from "../components/underline";
import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import {MinimalCardDemo} from "./components/cardContainer";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <AuroraBackground className="h-[50vh] w-full border rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-full h-full"
        >
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug">
              Thoughts worth <UnderlineHighlight>sharing</UnderlineHighlight>,
              <br />
              strategies worth <UnderlineHighlight>trying</UnderlineHighlight>.
            </h2>
          </div>
        </motion.div>
      </AuroraBackground>
      <MinimalCardDemo />
    </div>
  );
}

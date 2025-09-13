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
import FancyQuoteButton from "../website/components/FancyQuoteButton";
import VideoGallery from "./components/VideoGallery";

export default function videoProductionPage() {
  return (
    <>
      <head>
        <title>
          Video Production Services | Creative Business Videos - Matrics Mind
        </title>
        <meta
          name="description"
          content="Matrics Mind provides professional video production services, including corporate films, product videos, and brand storytelling to engage your audience."
        />
      </head>

      <section>
        <AuroraBackground className="h-[50vh] w-[90vw] border rounded-lg shadow-lg self-center justify-self-center mb-15">
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
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
                We Build Tech That Connects People —
                <br />
                and Powers Growth
              </h2>
            </div>
          </motion.div>
        </AuroraBackground>
        {/* <TextScrollTooltip/> */}
        <VideoGallery />
        <FancyQuoteButton
          link="https://docs.google.com/forms/d/1Zp_1DX8cEyYZCj5BGn1hnQU82ByXAN0K4MpQoI9-LZo/edit"
          className="mt-15"
        />
        <ExpertLedComponent />
        <VideoPlayerComponent />
        <Testimonials />
        <CompanyPartner />
      </section>
    </>
  );
}

"use client";

import { AuroraBackground } from "../../../components/ui/aurora-background";
import { UnderlineHighlight } from "../../components/underline";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import Gallery from "../../components/Gallery";
import CompanyPartner from "../../components/CompanyPartner";
import Testimonials from "../../components/testimonials";
import FeaturesSection from "../../components/FeaturesSection";

export default function brandingPage() {
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
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-full h-full"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug">
              Thoughts worth <UnderlineHighlight>sharing</UnderlineHighlight>,
              <br />
              strategies worth <UnderlineHighlight>trying</UnderlineHighlight>.
            </h2>
          </div>
        </motion.div>
      </AuroraBackground>
      <InfiniteMovingCards
        className="mt-8 cursor-pointer flex self-center justify-self-center"
        items={[
          {
            image: "/team/alex.jpg", // path to image in public folder
            quote: "This platform changed how we work!",
            name: "Alex Johnson",
            title: "CEO, FutureCorp",
          },
          {
            image: "/team/sarah.jpg",
            quote: "Intuitive, powerful, and scalable.",
            name: "Sarah Lee",
            title: "Product Manager, InnovateX",
          },
        ]}
        itemClassName="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      />
      <Gallery/>
      <FeaturesSection/>
      <Testimonials/>
      <CompanyPartner />
    </section>
  );
}

"use client";

import { AuroraBackground } from "../../../components/ui/aurora-background";
import { UnderlineHighlight } from "../../components/underline";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import Gallery from "../../components/Gallery";
import CompanyPartner from "../../components/CompanyPartner";
import WebsiteServiceCards from "./components/WebsiteServiceCards";
import FancyQuoteButton from "./components/FancyQuoteButton";
export default function websitePage() {
  return (
    <section>
      <AuroraBackground className="h-[40vh] w-[90vw] sm:h-[52vh] sm:w-[90vw] border rounded-lg shadow-lg self-center justify-self-center mb-5 sm:mb-10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-0 items-center justify-center px-0 w-full h-full"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-black dark:text-white leading-snug text-center">
             Designs That Capture Eyes and Minds
            </h2>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* <InfiniteMovingCards
  className="mt-8 mx-auto"
  items={[
    {
      image: "/team/alex.jpg",
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
    {
      image: "/team/michael.jpg",
      quote: "We saved weeks of development time.",
      name: "Michael Tan",
      title: "CTO, DevLoop",
    },
  ]}
/> */}

      <FancyQuoteButton link="https://docs.google.com/forms/d/1b8X2U9V437vletbTzQagIQSn4gu8cWP4AhsoaAvEVWg/edit" />
      <Gallery />
      <WebsiteServiceCards />
      <CompanyPartner />
    </section>
  );
}

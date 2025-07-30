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
      <AuroraBackground className="w-[90vw] sm:w-[95vw] lg:w-[90vw] h-[50vh] sm:h-[60vh] lg:h-[70vh] mx-auto my-10 border rounded-xl shadow-lg flex items-center justify-center px-4 sm:px-8">
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
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug sm:leading-tight">
            Thoughts worth <UnderlineHighlight>sharing</UnderlineHighlight>,
            <br className="hidden sm:block" />
            strategies worth <UnderlineHighlight>trying</UnderlineHighlight>.
          </h2>
        </motion.div>
      </AuroraBackground>

      {/* Advertisement Sections */}
      <div className="space-y-16 sm:space-y-20 lg:space-y-24 px-4 sm:px-6 lg:px-12">
        <AdvertisementSectionComponent title="Branding" />
        <AdvertisementSectionComponent title="Website" />
        <AdvertisementSectionComponent title="Video Production" />
      </div>

      {/* How it Works */}
      {/* <div className="px-4 sm:px-6 lg:px-12 mt-24"> */}
        <HowItWorks />
      {/* </div> */}

      {/* Company Partners */}
      {/* <div className="px-4 sm:px-6 lg:px-12 mt-24"> */}
        <CompanyPartner />
      {/* </div> */}
    </section>
  );
}

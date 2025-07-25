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
      <AdvertisementSectionComponent title="Branding" />
      <AdvertisementSectionComponent title="Website" />
      <AdvertisementSectionComponent title="Video Production" />
      <HowItWorks />
      {/* <ComparisonTable/>
      <Testimonials /> */}
      <CompanyPartner />
    </section>
  );
}

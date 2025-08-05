"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import AboutUs1 from "../components/aboutus";
import ComparisionTable from "../components/ComparisionTable";
import HeroSectionWithGirl from "../HeroSection/page";
import CompanyMilestones from "./Components/CompanyMilestones";
import Team2 from "../../components/mvpblocks/team-2";
import FaqSection from "../components/FaqSection";
import CompanyPartner from "../components/CompanyPartner";

// Scroll reveal variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <section className="animate-fadeIn min-h-screenoverflow-y-scroll scroll-smooth snap-y snap-mandatory hide-scrollbar">
      <div className="">
        <motion.div
          className="snap-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <AboutUs1 />
        </motion.div>

        <motion.div
          className="snap-start pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ComparisionTable />
        </motion.div>

        <motion.div
          className="snap-start pt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <HeroSectionWithGirl />
        </motion.div>

        <motion.div
          className="snap-start pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <CompanyMilestones />
        </motion.div>

        <motion.div
          className="snap-start pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Team2 />
        </motion.div>

        <motion.div
          className="snap-start pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <FaqSection />
        </motion.div>

        <motion.div
          className="snap-start pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <CompanyPartner />
        </motion.div>
      </div>
    </section>
  );
}

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
import Image from "next/image";
import TextWithLinks from "../components/TextWithLinks";

import girl from "../../public/girl.jpg";

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
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-[90vw] flex justify-self-center">
    <div className="md:flex">
      {/* Content Section */}
      <div className="md:w-2/3 p-5 md:p-12">
        <div className="mb-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Priyanka Mohanty
          </h2>
          <p className="text-sm md:text-lg text-blue-600 font-semibold mb-0">
            Consulting Technology Officer & Marketing Head
          </p>
        </div>

        <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
          <p className="text-lg mb-3">
            <TextWithLinks text="With a passion for blending creativity and strategy, Priyanka has transformed Matrics Mind into a results-driven creative agency that helps brands grow and stand out in competitive markets." />
          </p>

          <p className="text-lg mb-3">
            <TextWithLinks text="Since its inception, she has led every project with a marketing-first approach — crafting designs that not only look stunning but also drive engagement, generate leads, and boost brand visibility." />
          </p>

          <p className="text-lg">
            <TextWithLinks text="Her vision has positioned Matrics Mind as a go-to partner for businesses seeking creativity with measurable impact." />
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            <a href="https://www.linkedin.com/in/priyanka-m-10b844245/">
              Connect on LinkedIn
            </a>
          </button>
        </div>
      </div>

      {/* Photo Section */}
      <div className="md:w-1/3 p-8 flex items-center justify-center relative ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 backdrop-blur-sm"></div>
        <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl p-3 border border-white/30 shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="text-center">
            <Image
              src={girl}
              alt="Girl"
              className="object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
              priority
              height={350}
              width={350}
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400/40 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400/30 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
      </div>

      <motion.div
        className="snap-start pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <CompanyMilestones />
      </motion.div>

      {/* <motion.div
        className="snap-start pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Team2 />
      </motion.div> */}

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
    </section>
  );
}

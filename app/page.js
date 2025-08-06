"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import BrandMarquee from "./components/BrandMarquee";
const ElasticCarousel = dynamic(() => import("./components/ElasticCarousel"), {
  ssr: false,
});
import CardTest from "./components/cardTest";
import Testimonials from "./components/testimonials";
const ContainerTextFlip = dynamic(
  () => import("../components/ui/container-text-flip"),
  { ssr: false }
);
import CompanyPartner from "./components/CompanyPartner";
import SectionHighlightScroll from "./components/ScrollAndHighlightHeading";

const HeroSectionWithGirl = dynamic(() => import("./HeroSection/page.jsx"), {
  ssr: false,
});
import ComparisonTable from "./components/ComparisionTable";
import { motion } from "framer-motion";
import CardFalling from "./services/components/CardFalling.jsx"
import GetInTouchForm from "./components/GetInTouchForm.jsx";
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 md:space-y-12 lg:space-y-16"
    >
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20 gap-4 sm:gap-6">
        <h1 className="text-white font-bold max-w-5xl leading-tight tracking-tight">
          <span
            className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Across Boundaries. Beyond Limits.
          </span>
          <span
            className={`block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Built with Matrics Mind
          </span>
          <div className="mt-3">
            <ContainerTextFlip isVisible={isVisible} />
          </div>

          <span
            className={`block mt-6 text-base sm:text-lg md:text-xl text-[#ff9100] transition-all duration-700 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            We served over 50+ clients all over the world.
          </span>
        </h1>
      </section>
      <section className="py-6 md:py-8">
        <ElasticCarousel />
      </section>
      <section className="py-4 md:py-6">
        <BrandMarquee />
      </section>
      <section className="py-6 md:py-8">
        <CardTest />
      </section>
      <section className="py-6 md:py-8">
        <CardFalling />
      </section>
      <section className="py-8 md:py-10">
        <HeroSectionWithGirl />
      </section>
      <section className="py-6 md:py-8">
        <ComparisonTable />
      </section>
      <section className="py-8 md:py-10">
        <SectionHighlightScroll />
      </section>
      <section className="py-6 md:py-3">
        <Testimonials />
      </section>
      <section className="py-6 md:py-3">
        <CompanyPartner />
      </section>
      <section className="py-8 md:py-3">
        <GetInTouchForm />
      </section>
    </motion.div>
  );
}

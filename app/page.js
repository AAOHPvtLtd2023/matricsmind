"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import BrandMarquee from "./components/BrandMarquee";
import CardTest from "./components/cardTest";
import Testimonials from "./components/testimonials";
import ContainerTextFlip from "../components/ui/container-text-flip";
import CompanyPartner from "./components/CompanyPartner";
import SectionHighlightScroll from "./components/ScrollAndHighlightHeading";
import ComparisonTable from "./components/ComparisionTable";
import CardFalling from "./services/components/CardFalling.jsx";
import GetInTouchForm from "./components/GetInTouchForm.jsx";
import FloatingBeamBackground from "./FloatingBeamBackground.jsx";
import LazySection from "./LazySection.jsx";

// Dynamic imports (for heavy components)
const ElasticCarousel = dynamic(() => import("./components/ElasticCarousel"), {
  ssr: false,
});
const HeroSectionWithGirl = dynamic(() => import("./HeroSection/page.jsx"), {
  ssr: false,
});

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FloatingBeamBackground>
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] text-center px-4">
          <h1 className="text-white max-w-3xl sm:max-w-4xl lg:max-w-5xl leading-snug sm:leading-tight tracking-tight">
            {/* Heading Line 1 */}
            <span
              className={`block text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-heading transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Across Boundaries. Beyond Limits.
            </span>

            {/* Heading Line 2 */}
            <span
              className={`block mt-2 text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-heading transform transition-all duration-700 ease-out delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Built with{" "}
              <span className="text-[#ff9100] text-[1.2em] tracking-wide drop-shadow-[0_2px_6px_rgba(255,145,0,0.6)]">
                Matrics Mind
              </span>
            </span>

            {/* Text Flip */}
            <ContainerTextFlip isVisible={isVisible} />

            {/* Sub Text */}
            <span
              className={`block mt-4 text-base sm:text-lg md:text-xl text-[#ff9100]/90 font-body transform transition-all duration-700 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              We’ve served{" "}
              <span className="font-heading text-white">50+ clients</span>{" "}
              worldwide.
            </span>
          </h1>
        </section>

        {/* All sections lazy-loaded */}
        <LazySection>
          <ElasticCarousel />
        </LazySection>
        <LazySection>
          <BrandMarquee />
        </LazySection>
        <LazySection>
          <CardTest />
        </LazySection>
        <LazySection>
          <CardFalling />
        </LazySection>
        <LazySection>
          <HeroSectionWithGirl />
        </LazySection>
        <LazySection>
          <ComparisonTable />
        </LazySection>
        <LazySection>
          <SectionHighlightScroll />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <CompanyPartner />
        </LazySection>
        <LazySection>
          <GetInTouchForm />
        </LazySection>
      </div>
    </FloatingBeamBackground>
  );
}

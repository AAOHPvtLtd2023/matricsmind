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
      <head>
  <title>Matrics Mind | Web Development & Digital Solutions Company in India</title>
  <meta name="description" content="Matrics Mind is a leading web development and digital solutions company in India. We provide website design, SEO, and IT services to help businesses grow online."/>
</head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[65vh] md:min-h-[60vh] text-center">
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-6xl">
          {/* Heading Line 1 */}
          <h1
            className={`block text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight tracking-tight transform transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Across Boundaries. Beyond Limits.
          </h1>

          {/* Heading Line 2 */}
          <h2
            className={`block mt-1 mb-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-snug sm:leading-tight transform transition-all duration-700 ease-out delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Built with{" "}
            <span className="text-[#ff9100] text-[1.15em] tracking-wide">
              Matrics Mind
            </span>
          </h2>

          {/* Text Flip */}
          <ContainerTextFlip isVisible={isVisible} />

          {/* Sub Text */}
          <p
            className={`block mt-3 text-sm sm:text-base md:text-lg text-[#ff9100]/90 font-body transform transition-all duration-700 ease-out delay-200 mb-0 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            We’ve served{" "}
            <span className="font-heading text-white">50+ clients</span>{" "}
            worldwide.
          </p>
        </div>
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
    </FloatingBeamBackground>
  );
}

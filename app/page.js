"use client";
import { useState, useEffect } from 'react';
import MarqueeSection from "./components/BrandMarquee";
import BrandMarquee from "./components/BrandMarquee";
import ElasticCarousel from "./components/ElasticCarousel";
import FeaturedProjects from "./components/featuredProjects";
import FloatingBackground from "./FloatingBackground";
import CardTest from "./components/cardTest";
// import { TextScroll } from "@/components/ui/text-scroll";
import FooterGlow from "./components/Footer";
import ContactUs1 from "./components/ContactUs";
import AboutUs1 from "./components/aboutus";
import Testimonials from "./components/testimonials";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import FeaturesSection from "./components/FeaturesSection";
import CompanyPartner from "./components/CompanyPartner";
import Gallery from "./components/Gallery";
import FaqSection from "./components/FaqSection";
import HighlightHeading from "./components/HighlightHeading";
import DualMarquee from "./components/DualMarquee";
import { TextScroll } from "../components/ui/text-scroll";
import { TextScrollBox } from "./components/TextScrollBox";
import SectionHighlightScroll from "./components/ScrollAndHighlightHeading";
import GetInTouchForm from "./getinTouchForm/page";
import HeroSectionWithGirl from "./HeroSection/page.jsx";
import Header1 from "../components/mvpblocks/header-1.jsx";
import ComparisonTable from "./components/ComparisionTable";
import { motion } from "framer-motion";
import CardFalling from "./services/components/CardFalling.jsx";

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
    <>
      <main className="pt-24 px-4">
        <section className="flex flex-col items-center justify-center gap-6 sm:gap-8 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-white leading-[1.1] sm:leading-tight max-w-4xl lg:max-w-6xl">
        <span className={`inline-block transition-all duration-800 ease-out text-2xl${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          Across Boundaries. Beyond Limits. 
        </span>{' '}
        <span className={`inline-block transition-all duration-800 ease-out text-6xl ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
           Built with Matrics Mind
        </span>{' '}
        <ContainerTextFlip isVisible={isVisible} />{' '}
        <br className="hidden sm:block" />
        <span className={`block sm:inline transition-all duration-800 delay-300 ease-out text-xl ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          We served over 50+ clients all over the world.
        </span>
      </h1>
    </section>
        <ElasticCarousel />
        <BrandMarquee />
        <CardTest />
        <CardFalling />
        <HeroSectionWithGirl />
        <ComparisonTable />
        <SectionHighlightScroll />
        <Testimonials />
        <CompanyPartner />
        <GetInTouchForm />
      </main>
    </>
  );
}

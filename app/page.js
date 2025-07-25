"use client";
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

export default function HomePage() {
  return (
    <>
      
      <main className="pt-24 px-4">
        <section className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Make your websites look <ContainerTextFlip /> <br />
          </h1>
        </section>
        <ElasticCarousel />
        <BrandMarquee />
        <CardTest />
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

"use client";
import MarqueeSection from "./components/BrandMarquee";
import BrandMarquee from "./components/BrandMarquee";
import ElasticCarousel from "./components/ElasticCarousel";
import FeaturedProjects from "./components/featuredProjects";
import Header from "./components/Header";
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

export default function HomePage() {
  return (
    <>
      <FloatingBackground />
      {/* <Header /> */}
      <Header1 />
      <main className="pt-24 px-4">
        {/* Hero Text Block */}
        <section className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Make your websites look <br />
            <span className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-extrabold">
              10x{" "}
              {/* <span className="inline-block px-4 py-1 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white shadow-md">
                modern
              </span> */}
              <ContainerTextFlip />
            </span>
          </h1>
        </section>

        <FeaturesSection />
        <CompanyPartner />
        <HeroSectionWithGirl />
        <Gallery />
        <FaqSection />
        <SectionHighlightScroll />

        <GetInTouchForm />
       
      </main>

      <FooterGlow />
    </>
  );
}

// import { TextScroll } from "../ui/text-scroll"

// export function TextScrollDemo() {
//   return (
//     <TextScroll
//       className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
//       text="Skiper UI  "
//       default_velocity={5}
//     />
//   );
// }
{
  /* <ElasticCarousel />
<BrandMarquee />
<CardTest />
<Testimonials /> */
}
{
  /* <TextScrollDemo /> */
}

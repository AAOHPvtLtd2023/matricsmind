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

export default function HomePage() {
  return (
    <>
      <FloatingBackground />
      <Header />
      <main className="pt-24 px-4">
        <ElasticCarousel />
        <BrandMarquee />
        <CardTest />
        {/* <TextScrollDemo /> */}

        {/* <ContactUs1/>
        <AboutUs1/> */}
        <Testimonials />
      </main>
      <FooterGlow />
    </>
  );
}

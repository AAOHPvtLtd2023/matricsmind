"use client";

import { AuroraBackground } from "../../../components/ui/aurora-background";
import { UnderlineHighlight } from "../../components/underline";
// Removed: import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import Gallery from "../../components/Gallery";
import CompanyPartner from "../../components/CompanyPartner";
import Testimonials from "../../components/testimonials";
import FeaturesSection from "../../components/FeaturesSection";
import MasonryGallery from "../../../components/mvpblocks/masonry-grid-1";
import FancyQuoteButton from "../website/components/FancyQuoteButton";

export default function BrandingPage() {
  return (
    <section>
      <AuroraBackground className="h-[50vh] w-[90vw] border rounded-lg shadow-lg self-center justify-self-center">
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 w-full h-full animate-fade-in-down transition-opacity duration-700 ease-in-out">
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug text-center">
              Your Brand, Clearly Defined
              <br />
              and Powerfully Delivered
            </h2>
          </div>
        </div>
      </AuroraBackground>

      <InfiniteMovingCards
        className="mt-8 cursor-pointer flex self-center justify-self-center"
        items={[
          {
            image: "/team/alex.jpg",
            quote: "This platform changed how we work!",
            name: "Alex Johnson",
            title: "CEO, FutureCorp",
          },
          {
            image: "/team/sarah.jpg",
            quote: "Intuitive, powerful, and scalable.",
            name: "Sarah Lee",
            title: "Product Manager, InnovateX",
          },
        ]}
        itemClassName="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      />

      <FancyQuoteButton link="https://docs.google.com/forms/d/1HsjudHf81IZC8VaC-eptpGOyFdYkjM7GQAkZjyvf7gU/edit" />

      <MasonryGallery />

      <FeaturesSection />

      {/* <Testimonials/> */}
      <CompanyPartner />
    </section>
  );
}

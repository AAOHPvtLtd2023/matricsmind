"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AboutUs1 from "../components/aboutus";
import ComparisionTable from "../components/ComparisionTable";
import CountryCard from "./Components/CountryScroll";
import HeroSectionWithGirl from "../HeroSection/page";
import CompanyMilestones from "./Components/CompanyMilestones";
import Team2 from "../../components/mvpblocks/team-2";
import FaqSection from "../components/FaqSection";
import CompanyPartner from "../components/CompanyPartner";

export default function AboutPage() {
  return (
    <section className="animate-fadeIn min-h-screen">
      <AboutUs1 />

      <ComparisionTable />
      <HeroSectionWithGirl />
      <CompanyMilestones />
      <Team2 />
      <FaqSection />
      <CompanyPartner />
    </section>
  );
}

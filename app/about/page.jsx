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
    <div className="animate-fadeIn min-h-screen">
      <Link
        href="/"
        className="group absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <AboutUs1 />
      <CountryCard/>

      <ComparisionTable />
      <HeroSectionWithGirl/>
      <CompanyMilestones />
      <Team2/>
      <FaqSection/>
      <CompanyPartner/>
    </div>
  );
}

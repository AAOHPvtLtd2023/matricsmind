"use client";

import HighlightHeading from "./HighlightHeading";
import { TextScrollBox } from "./TextScrollBox";

export default function SectionHighlightScroll() {
  return (
    <>
      <HighlightHeading />
     <TextScrollBox
  text={`Digital Marketing Strategy
Social Media Marketing (SMM)
Search Engine Optimization (SEO)
Pay-Per-Click Advertising (PPC)
Content Marketing
Website Design & Development
Email & WhatsApp Marketing
Online Reputation Management (ORM)
Analytics & Performance Reporting
E-commerce Marketing Solutions
Branding & Creative Design
Influencer & Affiliate Marketing
Lead Generation & CRM Automation
Mobile App Marketing
GTM integration
Video Marketing & YouTube Ads
Video Production
CGI`}
  default_velocity={1}
  containerClassName="my-10"
  itemClassName="text-base"
/>

    </>
  );
}

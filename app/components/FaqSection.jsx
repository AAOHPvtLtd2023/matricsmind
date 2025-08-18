"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; 

// Custom Accordion Components
const Accordion = ({ children, type = "single", collapsible = false, className = "" }) => {
  return <div className={className}>{children}</div>;
};

const AccordionItem = ({ children, value, className = "" }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className={className} data-value={value}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, className = "", isOpen, setIsOpen }) => {
  return (
    <button
      className={`w-full text-left flex items-center justify-between ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg
        className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

const AccordionContent = ({ children, className = "", isOpen }) => {
  return (
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};
const Typewriter = ({ text, speed = 10 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

// SEO links mapping
const seoLinks = {
  "services": "/services",
  "branding": "/services/branding",
  "web development": "/services/website",
  "CGI": "/services/videoproduction",
  "VFX": "/services/videoproduction",
  "performance marketing": "/services/branding",
  "graphic design": "/services/videoproduction",
  "motion videos": "/services/videoproduction",
  "2D": "/services/videoproduction",
  "3D": "/services/videoproduction",
  "clients": "/about",
  "projects": "/home",
  "GCC region": "/about",
  "web design": "/services/website",
  "design": "/services/branding",
  "marketing": "/services/branding"
};

// Component to add hover links to text
const TextWithHoverLinks = ({ text }) => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const processText = (text) => {
    const matches = [];

    // Find all matches and their positions
    Object.entries(seoLinks).forEach(([keyword, link]) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          keyword: match[0],
          start: match.index,
          end: match.index + match[0].length,
          link: link
        });
      }
    });

    // Sort matches by start position
    matches.sort((a, b) => a.start - b.start);

    // If no matches, return original text
    if (matches.length === 0) {
      return text;
    }

    // Build result array with text and linked elements
    const result = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      // Add text before the match
      if (match.start > lastIndex) {
        result.push(text.substring(lastIndex, match.start));
      }

      // Add the linked element
     result.push(
  <Link
    key={`${match.keyword}-${index}`}
    href={match.link}
    className="relative cursor-pointer text-[#ff9100] decoration-dotted underline-offset-2 transition-colors"
    onMouseEnter={(e) => {
      setHoveredWord(match.link);
      handleMouseMove(e);
    }}
    onMouseLeave={() => setHoveredWord(null)}
    onMouseMove={handleMouseMove}
  >
    {match.keyword}
  </Link>
);

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result;
  };

  return (
    <div className="relative">
      <div>{processText(text)}</div>
      
      {/* Hover tooltip */}
      {hoveredWord && (
        <div
          className="fixed z-50 px-3 py-2 text-xs bg-black/90 text-white rounded-lg border border-white/20 backdrop-blur-sm pointer-events-none"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 40,
          }}
        >
          <div className="flex items-center gap-2">
            <span>View: {hoveredWord}</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We specialize in branding, web development, CGI & VFX, performance marketing, graphic design, and 2D & 3D motion videos. Our tailored solutions are designed to help your business stand out and reach its goals.",
  },
  {
    question: "How many clients have you worked with?",
    answer:
      "We have successfully partnered with over 300 clients across the globe, delivering more than 1000 creative projects that are customized to meet each client's unique needs.",
  },
  {
    question: "What regions do you serve?",
    answer:
      "While we provide services globally, our main focus is on the GCC region. We have delivered branding and web development solutions in 6 different countries.",
  },
  {
    question: "What is the expertise of your team?",
    answer:
      "Our team consists of professionals with diverse expertise in branding, web development, design, and marketing, all dedicated to enhancing your brand experience.",
  },
  {
    question: "What sets your web design services apart?",
    answer:
      "More than just designers, we are problem solvers. We collaborate closely with visionaries across industries to deliver solutions that are uniquely tailored to your brand, ensuring measurable results and global trust.",
  },
];

export default function FaqSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-3xl mx-auto px-4 py-20 text-white relative"
    >
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-gray-400">
          F.A.Q. SECTION
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold hover:bg-white/10 transition">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-sm text-gray-300">
              <TextWithHoverLinks text={faq.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
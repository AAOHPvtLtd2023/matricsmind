"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Users,
  Palette,
  Cog,
  MapPin,
  Rocket,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";

// 🔗 SEO Links
const seoLinks = {
  services: "/services",
  branding: "/services/branding",
  "web development": "/services/website",
  CGI: "/services/videoproduction",
  VFX: "/services/videoproduction",
  "performance marketing": "/services/branding",
  "graphic design": "/services/videoproduction",
  "motion videos": "/services/videoproduction",
  "2D": "/services/videoproduction",
  "3D": "/services/videoproduction",
  clients: "/about",
  projects: "/home",
  "GCC region": "/about",
  "web design": "/services/website",
  design: "/services/branding",
  marketing: "/services/branding",
};

// 📝 Component to replace keywords with links
const TextWithLinks = ({ text }) => {
  const processText = (text) => {
    const matches = [];
    Object.entries(seoLinks).forEach(([keyword, link]) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          keyword: match[0],
          start: match.index,
          end: match.index + match[0].length,
          link: link,
        });
      }
    });

    matches.sort((a, b) => a.start - b.start);
    if (matches.length === 0) return text;

    const result = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      if (match.start > lastIndex) {
        result.push(text.substring(lastIndex, match.start));
      }

      // 🔑 Add title attribute here
      result.push(
        <Link
          key={`${match.keyword}-${index}`}
          href={match.link}
          title={`Learn more about ${match.keyword}`}
          // className="text-blue-600 underline hover:text-blue-800"
        >
          {match.keyword}
        </Link>
      );

      lastIndex = match.end;
    });

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result;
  };

  return <>{processText(text)}</>;
};

// 🔹 Data
const data = [
  {
    feature: "Target / Support Services",
    icon: <Zap className="w-6 h-6 text-[#1c3784]" />,
    others: "Delivering Exceptional Branding and Tech Solutions",
    we: "Delivering Exceptional Branding and Tech Solutions",
  },
  {
    feature: "Client Engagement Strategy",
    icon: <Users className="w-6 h-6 text-[#1c3784]" />,
    others: "Standardized Solution",
    we: "Strategically personalized to match modern industry practices",
  },
  {
    feature: "Design Approach",
    icon: <Palette className="w-6 h-6 text-[#1c3784]" />,
    others: "Employs standard templates",
    we: "Creative, on-brand, and made just for you",
  },
  {
    feature: "Behind the Build",
    icon: <Cog className="w-6 h-6 text-[#1c3784]" />,
    others: "Baseline Service",
    we: "Deep-dive, co-creative, and built for lasting partnerships",
  },
  {
    feature: "Project Strategy",
    icon: <MapPin className="w-6 h-6 text-[#1c3784]" />,
    others: "Unclear objectives",
    we: "Step-by-step roadmap aligned with key milestones",
  },
  {
    feature: "Project Implementation",
    icon: <Rocket className="w-6 h-6 text-[#1c3784]" />,
    others: "Last-minute and messy",
    we: "Effective, punctual, and responsive project delivery",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const shimmerTitle = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 6, ease: "linear", repeat: Infinity },
  },
};

export default function ComparisonSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff9100] via-white to-[#1c3784] bg-clip-text text-transparent bg-[length:300%_300%] leading-none pb-2"
          variants={shimmerTitle}
          animate="animate"
        >
          Why Clients Choose MatricsMind
        </motion.h2>
        <p className="text-lg text-[#ff9100] max-w-2xl mx-auto">
          Over 50 <TextWithLinks text="clients" /> across the globe trust our{" "}
          <TextWithLinks text="branding and marketing services" />.
        </p>
      </motion.div>

      {/* Responsive Layout */}
      <AnimatePresence mode="wait">
        {isMobile ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-6 border border-[#ff910030] rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <div className="flex flex-col items-center text-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-[#1c3784]/10 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {item.feature}
                  </h3>
                </div>

                <div className="bg-[#f3f4f6] rounded-lg p-4 mb-3">
                  <div className="flex justify-center items-center gap-2 text-sm text-[#1c3784] font-medium">
                    <X className="w-4 h-4" />
                    Others
                  </div>
                  <p className="text-center text-[#1c3784] text-sm mt-1">
                    <TextWithLinks text={item.others} />
                  </p>
                </div>

                <div className="bg-[#ff9100] rounded-lg p-4 text-white shadow-md">
                  <div className="flex justify-center items-center gap-2 text-sm font-semibold">
                    <Check className="w-4 h-4" />
                    We Deliver
                  </div>
                  <p className="text-center text-sm font-medium mt-1">
                    <TextWithLinks text={item.we} />
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="table"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <table className="w-full text-sm overflow-hidden rounded-xl border border-[#1c3784]/10">
              <thead className="bg-[#1c3784] text-white uppercase text-left">
                <tr>
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold text-center">Others</th>
                  <th className="p-4 font-bold text-center">We Deliver</th>
                </tr>
              </thead>
              <tbody className="bg-[#fdfdfd]">
                {data.map((item, index) => (
                  <motion.tr
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-[#1c3784]/10 hover:bg-[#f3f4f6]"
                  >
                    <td className="p-4 flex items-center gap-3 font-semibold text-[#1c3784]">
                      <div className="w-9 h-9 bg-[#1c3784]/10 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      {item.feature}
                    </td>
                    <td className="p-4 text-center text-[#1c3784] bg-[#f9fafb]">
                      <TextWithLinks text={item.others} />
                    </td>
                    <td className="p-4 text-center font-semibold text-white bg-[#ff9100]">
                      <TextWithLinks text={item.we} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

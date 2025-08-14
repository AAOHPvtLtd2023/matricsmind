"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "../../components/ui/spotlight";
import { BorderBeam } from "../../components/ui/border-beam";
import { CardHoverEffect } from "../../components/ui/pulse-card";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import CountryCard from "../about/Components/CountryScroll";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues: AboutUsProps["values"] = [
  {
    title: "Innovation",
    description:
      "We, as Matrics Mind, believe innovation is our heartbeat. We constantly explore fresh ideas, embrace emerging technologies, and design forward-thinking strategies that keep our clients ahead in a rapidly evolving digital world.",
    icon: "Lightbulb",
  },
  {
    title: "Collaboration",
    description:
      "By working hand-in-hand with our clients, we build lasting trust, spark fresh ideas, and craft powerful solutions that leave a meaningful and lasting impact.",
    icon: "Users",
  },
  {
    title: "Excellence",
    description:
      "Every project we take on is delivered with precision, creativity, and the highest standards of quality — ensuring our clients not only meet their goals but exceed them.",
    icon: "Sparkles",
  },
  {
    title: "Impact",
    description:
      "Our aim is to create impact that lasts. Through bold ideas, smart strategies, and measurable results, we help our clients spark change, drive growth, and leave a mark that truly matters.",
    icon: "Globe",
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: "About Us",
    subtitle:
      "Building the future of web development with beautiful, reusable components.",
    mission:
      "At Matrics Mind, our mission is clear — to take your business to the next level. Through innovation, collaboration, excellence, and integrity, we craft strategies and solutions that fuel growth, elevate your brand, and deliver lasting success.",
    vision:
      "We put our clients first, working with integrity, excellence, and innovation to deliver measurable results. Through collaboration and shared goals, we turn ideas into impactful outcomes.",
    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255, 145, 0, 0.08) 0%, rgba(255, 145, 0, 0.04) 50%, rgba(255, 145, 0, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(255, 145, 0, 0.08) 0%, rgba(255, 145, 0, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(255, 145, 0, 0.06) 0%, rgba(255, 145, 0, 0.06) 80%, transparent 100%)"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />

              <div className="mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-[#ff9100]" />
              </div>

              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>

                <p className="text-lg leading-relaxed text-white">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-lg leading-relaxed text-white">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <CountryCard />

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  className="h-full" // ✅ Makes the wrapper fill available height
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    className="h-full flex flex-col" // ✅ Ensures the card itself stretches
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                        ? "blue"
                        : index === 2
                        ? "amber"
                        : "rose"
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

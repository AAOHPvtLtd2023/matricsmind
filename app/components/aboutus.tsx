"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head"; // ✅ for SEO meta
import Link from "next/link";
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
import TextWithLinks from "./TextWithLinks"; 

const iconComponents = {
  Users,
  Heart,
  Lightbulb,
  Globe,
  Sparkles,
  Rocket,
  Target,
};

const defaultValues = [
  {
    title: "Innovation",
    description:
      "We, at Matrics Mind, believe innovation is our heartbeat. We constantly explore fresh ideas, embrace emerging technologies, and design forward-thinking strategies that keep our clients ahead in a rapidly evolving digital world.",
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
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* ✅ SEO Meta */}
      <Head>
        <title>About Us | Matrics Mind</title>
        <meta
          name="description"
          content="Learn about Matrics Mind, our mission, vision, and values. We craft innovative digital solutions to help businesses grow and make a lasting impact."
        />
        <meta
          name="keywords"
          content="About Matrics Mind, Digital Agency, Web Development, Mission, Vision, Innovation, Collaboration"
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Matrics Mind",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
              description:
                "Matrics Mind is a digital solutions company specializing in innovation, collaboration, and excellence.",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/yourcompany",
              ],
            }),
          }}
        />
      </Head>

      <section className="relative w-full overflow-hidden pt-20">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255, 145, 0, 0.08) 0%, rgba(255, 145, 0, 0.04) 50%, rgba(255, 145, 0, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(255, 145, 0, 0.08) 0%, rgba(255, 145, 0, 0.04) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(255, 145, 0, 0.06) 0%, rgba(255, 145, 0, 0.06) 80%, transparent 100%)"
        />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          {/* Header */}
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
            >
              {aboutData.title}
            </motion.h1>
            <p className="mt-6 text-lg sm:text-xl text-white">
              {aboutData.subtitle}
            </p>
          </header>

          {/* Mission & Vision */}
          <section
            ref={missionRef}
            className="relative mx-auto mb-24 max-w-7xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-12 md:grid-cols-2"
            >
              <article
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
                aria-labelledby="mission-title"
              >
                <BorderBeam
                  duration={8}
                  size={300}
                  className="from-transparent via-primary/40 to-transparent"
                />
                <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5">
                  <Rocket
                    className="h-8 w-8 text-[#ff9100]"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="mission-title"
                  className="text-3xl font-bold text-transparent bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text"
                >
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-white">
                  <TextWithLinks text={aboutData.mission} />
                </p>
              </article>

              <article
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
                aria-labelledby="vision-title"
              >
                <BorderBeam
                  duration={8}
                  size={300}
                  className="from-transparent via-blue-500/40 to-transparent"
                  reverse
                />
                <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5">
                  <Target
                    className="h-8 w-8 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="vision-title"
                  className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text"
                >
                  Our Vision
                </h2>
                <p className="mt-4 text-lg text-white">
                  <TextWithLinks text={aboutData.vision} />
                </p>
              </article>
            </motion.div>
          </section>

          {/* Countries Section */}
          <CountryCard />

          {/* Core Values */}
          <section ref={valuesRef} className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-white via-white to-white bg-clip-text sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
                The principles that guide everything we do and every decision we
                make.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {aboutData.values.map((value, index) => {
                const IconComponent = iconComponents[value.icon];
                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="h-full flex flex-col"
                  >
                    <CardHoverEffect
                      className="h-full flex flex-col"
                      icon={
                        <IconComponent className="h-6 w-6" aria-hidden="true" />
                      }
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
                      glowEffect
                      size="lg"
                    />
                  </motion.article>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

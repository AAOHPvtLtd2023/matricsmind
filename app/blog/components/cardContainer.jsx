"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "../../components/spiner"; // <- Import the spinner above

export function MinimalCardDemo() {
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      title: "How to Build a Magnetic Brand Identity",
      description:
        "A complete guide to designing a brand that emotionally connects with your audience.",
      slug: "how-to-build-a-magnetic-brand-identity",
      src: "/blog/brand.jpg",
    },
    {
      title: "Mastering UI Animation with Framer Motion",
      description:
        "Learn how to animate your interfaces with smooth transitions and gestures.",
      slug: "mastering-ui-animation-framer-motion",
      src: "/blog/animation.jpg",
    },
    {
      title: "Next.js 15: What’s New and What Matters",
      description:
        "Explore the new features, layouts, and improvements in the latest Next.js release.",
      slug: "nextjs-15-new-features",
      src: "/blog/nextjs15.jpg",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {cards.map((card, index) => (
            <Link href={`/blog/${card.slug}`} key={index}>
              <div className="m-2 w-[360px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-[#ff9100]/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="relative h-[240px]">
                  {loading ? (
                    <div className="flex items-center justify-center h-full bg-black/10">
                      <Spinner />
                    </div>
                  ) : (
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      className="object-cover transition-opacity duration-500"
                    />
                  )}
                </div>
                <div className="p-6">
                  {loading ? (
                    <>
                      <div className="h-5 bg-white/20 rounded w-3/4 mb-4" />
                      <div className="h-4 bg-white/10 rounded w-full mb-2" />
                      <div className="h-4 bg-white/10 rounded w-5/6" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-white font-bold text-lg mb-3 hover:text-[#ff9100] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
                        <span>Read more</span>
                        <span className="text-[#ff9100] font-semibold">
                          &rarr;
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "../../components/spiner";

export function MinimalCardDemo() {
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      title: "Why Matrics Mind is the #1 Advertising Company in Abu Dhabi",
      description:
        "Explore how Matrics Mind delivers impactful advertising solutions in Abu Dhabi through creative storytelling, strategic campaigns, and measurable results.",
      slug: "why-matrics-mind-best-advertising-company-abu-dhabi",
      src: "/images/Blog/blog1.jpg",
    },
    {
      title:
        "From Startups to Enterprises: Partner with the Best SEO Company in Abu Dhabi",
      description:
        "Discover how Metrics Mind helps businesses of every size climb search rankings in Abu Dhabi’s competitive market using proven SEO strategies.",
      slug: "why-matrics-mind-best-seo-company-abu-dhabi",
      src: "/images/Blog/blog2.jpg",
    },
    {
      title: "10 Winning Digital Marketing Strategies for Jewellery Brands",
      description:
        "A practical guide to digital marketing techniques that boost visibility, highlight craftsmanship, and increase sales for jewellery businesses.",
      slug: "top-10-digital-marketing-strategies-jewellery-business",
      src: "/images/Blog/blog3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {cards.map((card, index) => (
          <Link href={`/blog/${card.slug}`} key={index} className="w-full">
            <div className="group flex flex-col h-full max-w-sm w-full bg-[#1C1F2A]/80 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#ff9100]/50 hover:shadow-[0_8px_30px_rgba(255,145,0,0.3)] cursor-pointer hover:scale-105">
              
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                {loading ? (
                  <div className="flex items-center justify-center h-full bg-black/10">
                    <Spinner />
                  </div>
                ) : (
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                {loading ? (
                  <>
                    <div className="h-5 bg-white/20 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-white/10 rounded w-full mb-2" />
                    <div className="h-4 bg-white/10 rounded w-5/6" />
                  </>
                ) : (
                  <>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#ff9100] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
                      <span className="group-hover:text-white">
                        Read more
                      </span>
                      <span className="text-[#ff9100] font-semibold group-hover:translate-x-1 transition-transform duration-300">
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
  );
}

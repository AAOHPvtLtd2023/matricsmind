"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "../../components/spiner"; // <- Import the spinner above

export function MinimalCardDemo() {
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      title:
        "Why Metrics Mind is Your Best Choice for Advertising Company in Abu Dhabi",
      description:
        "Discover what makes Metrics Mind stand out as the premier advertising company in Abu Dhabi, focusing on unique storytelling and results-driven campaigns.",
      slug: "why-metrics-mind-best-advertising-company-abu-dhabi",
      src: "/blog/advertising-abu-dhabi.jpg",
    },
    {
      title:
        "From Startups to Enterprises: Why Metrics Mind is the Best SEO Company in Abu Dhabi",
      description:
        "Learn how Metrics Mind helps businesses of all sizes dominate search rankings in Abu Dhabi's competitive digital landscape.",
      slug: "metrics-mind-best-seo-company-abu-dhabi",
      src: "/blog/seo-abu-dhabi.jpg",
    },
    {
      title: "Top 10 Digital Marketing Strategies for Jewellery Business",
      description:
        "Comprehensive guide to digital marketing strategies that help jewellery businesses showcase craftsmanship and drive sales online and offline.",
      slug: "top-10-digital-marketing-strategies-jewellery-business",
      src: "/blog/jewellery-digital-marketing.jpg",
    },
    {
      title:
        "Pharmaceutical Digital Marketing Agency: Metrics Mind – Your Growth Engine in the Digital Era",
      description:
        "Discover how Metrics Mind helps pharmaceutical companies unlock growth through compliant, data-driven digital marketing strategies.",
      slug: "pharmaceutical-digital-marketing-agency-metrics-mind",
      src: "/blog/pharmaceutical-digital-marketing.jpg",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col justify-center rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 place-items-center">
          {cards.map((card, index) => (
            <Link href={`/blog/${card.slug}`} key={index}>
              <div className="m-2 w-[420px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-[#ff9100]/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="relative h-[200px]">
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

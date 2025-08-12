"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "../../components/spiner"; // <- Import the spinner above

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
    slug: "matrics-mind-best-seo-company-abu-dhabi",
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

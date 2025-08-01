"use client";

import Link from "next/link";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "../../../components/ui/minimal-card";

export function MinimalCardDemo() {
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

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {cards.map((card, index) => (
            <Link href={`/blog/${card.slug}`} key={index}>
              <MinimalCard className="m-2 w-[460px] cursor-pointer hover:shadow-lg transition-all">
                <MinimalCardImage
                  className="h-[320px] object-cover"
                  src={card.src}
                  alt={card.title}
                />
                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

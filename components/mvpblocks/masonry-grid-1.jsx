"use client";

import { useState } from "react";
import Image from "next/image";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/Brand_solution/${i + 1}.jpg`,
  alt: `Brand solution image ${i + 1}`,
}));

export default function MasonryGallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4 transition-all">
        {images.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative overflow-hidden rounded-2xl shadow-lg break-inside-avoid"
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${
                  hovered === null
                    ? "blur-0 scale-100"
                    : hovered === index
                    ? "blur-0 scale-105"
                    : "blur-[1px] opacity-80"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

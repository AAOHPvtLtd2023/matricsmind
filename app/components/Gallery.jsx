"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "/gallery/1.jpg",
    span: "col-span-2 row-span-2",
    alt: "Big tile",
  },
  {
    src: "/gallery/2.jpg",
    span: "col-span-1 row-span-1",
    alt: "Small tile 1",
  },
  {
    src: "/gallery/3.jpg",
    span: "col-span-1 row-span-1",
    alt: "Small tile 2",
  },
  {
    src: "/gallery/4.jpg",
    span: "col-span-2 row-span-1",
    alt: "Wide tile",
  },
  {
    src: "/gallery/5.jpg",
    span: "col-span-1 row-span-2",
    alt: "Tall tile",
  },
  {
    src: "/gallery/6.jpg",
    span: "col-span-1 row-span-1",
    alt: "Small tile 3",
  },
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-2xl ${item.span} group`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

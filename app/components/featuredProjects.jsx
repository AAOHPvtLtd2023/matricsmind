"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

const featuredProjects = [
  {
    title: "Regain control of your performances.",
    image: "/projects/project1.jpg",
  },
  {
    title: "How to Succeed through Market Segmentation",
    image: "/projects/project2.jpg",
  },
  {
    title: "Market & Run Your Own Successful Business",
    image: "/projects/project3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Featured Projects</h2>
        <p className="text-gray-500 text-sm">
          Educational insights and innovative approaches to creative work
        </p>
      </div>

      {/* Horizontal scroll cards */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="relative min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            <button className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2">
              <Heart size={18} className="text-white" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white font-semibold text-lg">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Cool 3D illustration */}
      <div className="mt-16 text-center">
        <Image
          src="/illustrations/3d-character.png"
          alt="3D Illustration"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
    </section>
  );
}

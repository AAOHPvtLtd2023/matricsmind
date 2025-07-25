"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ProjectPage({ params }) {
  const { slug } = params;
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || slug;

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-4 sm:px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Row Layout: Title and Image */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          {/* Title Section */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              {title}
            </h1>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              A complete overview of the {title} project with key features,
              technologies used, and visual presentation.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <Image
              src="/images/image1.jpg"
              alt={`${title} preview`}
              width={800}
              height={500}
              className="rounded-xl shadow-lg object-cover w-[20vw] h-auto"
            />
          </div>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Overview</h2>
          <p className="text-slate-300 leading-relaxed">
            {title} is a complete, responsive, and scalable web solution. It includes modern UI/UX,
            clean performance optimization, backend integration, and more—designed for real-world usage.
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Key Features</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Fully responsive layout</li>
            <li>Modern design with smooth animations</li>
            <li>Optimized for performance and SEO</li>
            <li>Easy to integrate and customize</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-700/30 text-sm px-4 py-1 rounded-full border border-cyan-500 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
            Want to see this project live?
          </h3>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Visit Project
          </a>
        </section>
      </div>
    </main>
  );
}

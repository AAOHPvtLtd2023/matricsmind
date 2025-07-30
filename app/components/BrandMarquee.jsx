"use client";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "OpenAI",
  "Netflix",
  "Apple",
  "Tesla",
  "Adobe",
  "Spotify",
];

export default function BrandMarquee() {
  return (
    <section className="relative w-full py-10 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-[#111] tracking-tight">
         Your Industry, Our Innovation
        </h1>

        <p className="text-sm mt-2" style={{ color: "#ff9100" }}>
          Empowering Every Industry Through Smart Innovation
        </p>
      </div>

      {/* Marquee Track */}
      <div className="whitespace-nowrap flex gap-16 animate-marquee px-4 group-hover:[animation-play-state:paused]">
        {[...companies, ...companies].map((name, idx) => (
          <span
            key={idx}
            className="text-[#1c3784] hover:text-white transition duration-300 text-lg font-semibold cursor-pointer"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

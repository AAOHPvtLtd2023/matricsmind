"use client";

const tags = [
  "Canva Designer",
  "Motion Designer",
  "Video Editor",
  "AI Experts",
  "Brand Designer",
  "Visual Designer",
];

export default function DualMarquee() {
  const repeatedTags = [...tags, ...tags]; // Must duplicate to allow looping

  return (
    <section className="bg-[#0B0E1C] overflow-hidden py-8 space-y-4">
      {/* Top Line */}
      <div className="relative w-full overflow-hidden h-[48px]">
        <div className="flex min-w-max animate-marquee gap-6 whitespace-nowrap">
          {repeatedTags.map((tag, idx) => (
            <span
              key={`top-${idx}`}
              className={`inline-block px-6 py-2 rounded-full border text-sm font-semibold ${
                idx % 2 === 0
                  ? "bg-yellow-400 text-[#0B0E1C]"
                  : "border-yellow-400 text-yellow-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative w-full overflow-hidden h-[48px]">
        <div className="flex min-w-max animate-marquee-reverse gap-6 whitespace-nowrap">
          {repeatedTags.map((tag, idx) => (
            <span
              key={`bottom-${idx}`}
              className={`inline-block px-6 py-2 rounded-full border text-sm font-semibold ${
                idx % 2 === 1
                  ? "bg-yellow-400 text-[#0B0E1C]"
                  : "border-yellow-400 text-yellow-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const companies = [
  { imageSrc: "/images/CompanyPartner/1.png" },
  { imageSrc: "/images/CompanyPartner/2.png" },
  { imageSrc: "/images/CompanyPartner/3.png" },
  { imageSrc: "/images/CompanyPartner/4.png" },
  { imageSrc: "/images/CompanyPartner/5.png" },
  { imageSrc: "/images/CompanyPartner/6.png" },
  { imageSrc: "/images/CompanyPartner/7.png" },
  { imageSrc: "/images/CompanyPartner/8.png" },
  { imageSrc: "/images/CompanyPartner/9.png" },
  { imageSrc: "/images/CompanyPartner/10.png" },
];

export default function BrandMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-6 sm:py-10">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-10 px-0 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#fff8] tracking-tight leading-none sm:leading-tight">
          Your Industry, Our Innovation
        </h1>

        <p className="mt-2 font-[var(--font-body)] text-xs sm:text-sm md:text-base lg:text-lg text-[#ff9100]">
          Empowering Every Industry Through Smart Innovation
        </p>
      </div>

      {/* Marquee Track */}
      <div className="flex gap-6 sm:gap-10 md:gap-16 whitespace-nowrap animate-marquee px-4 group-hover:[animation-play-state:paused]">
        {[...companies, ...companies].map((company, idx) => (
          <Image
            key={idx}
            src={company.imageSrc}
            alt={`Partner ${idx + 1}`}
            width={100}
            height={50}
            className="w-14 h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 object-contain cursor-pointer hover:grayscale-[20%] transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}

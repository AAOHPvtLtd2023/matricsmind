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
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#fff8] tracking-tight leading-tight sm:leading-none pb-1 sm:pb-2">
          Your Industry, Our Innovation
        </h1>

        <p className="font-[var(--font-body)] text-sm sm:text-base md:text-lg text-[#ff9100]">
          Empowering Every Industry Through Smart Innovation
        </p>
      </div>

      {/* Marquee Track */}
      <div className="whitespace-nowrap flex gap-8 sm:gap-16 animate-marquee px-4 group-hover:[animation-play-state:paused]">
        {[...companies, ...companies].map((company, idx) => (
          <Image
            key={idx}
            src={company.imageSrc}
            alt=""
            width={60}
            height={30}
            className="hover:grayscale-10 transition duration-300 cursor-pointer object-contain sm:w-[80px] sm:h-[40px]"
          />
        ))}
      </div>
    </section>
  );
}

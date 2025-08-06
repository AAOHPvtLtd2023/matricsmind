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
    <section className="relative w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#fff8] tracking-tight leading-none pb-2">
          Your Industry, Our Innovation
        </h1>

        <p className="text-lg mt-2" style={{ color: "#ff9100" }}>
          Empowering Every Industry Through Smart Innovation
        </p>
      </div>

      {/* Marquee Track */}
      <div className="whitespace-nowrap flex gap-16 animate-marquee px-4 group-hover:[animation-play-state:paused]">
        {[...companies, ...companies].map((company, idx) => (
          <Image
            key={idx}
            src={company.imageSrc}
            alt=""
            width={80}
            height={40}
            className="hover:grayscale-10 transition duration-300 cursor-pointer object-contain"
          />
        ))}
      </div>
    </section>
  );
}

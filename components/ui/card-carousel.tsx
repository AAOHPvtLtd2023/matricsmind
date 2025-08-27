"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SparklesIcon } from "lucide-react";
import { Badge } from "./badge";
import { Archivo_Black, Noto_Sans } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

interface CarouselProps {
  images: { src: string; alt: string; slug: string; title: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
}

const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2000,
  showPagination = true,
}) => {
  const router = useRouter();

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[90rem] px-3 sm:px-4">
        <div className="relative flex flex-col rounded-2xl border border-white/10 bg-neutral-800/10 backdrop-blur-md p-3 sm:p-5 shadow-lg">
          {/* Badge */}
          <Badge
            variant="outline"
            className="absolute left-3 top-3 sm:left-6 sm:top-6 rounded-lg border text-xs sm:text-sm md:text-base"
          >
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          </Badge>

          {/* Heading */}
          <div className="mt-10 sm:mt-14 mb-4 sm:mb-6 text-center px-2">
            <h2
              className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#ff9100] leading-snug sm:leading-tight font-extrabold uppercase`}
            >
              A Journey of Possibilities
            </h2>
            <p
              className={`${notoSans.variable} font-sans text-white/70 text-xs sm:text-sm md:text-base lg:text-lg mt-1`}
            >
              Multi-Industry Marketing Excellence
            </p>
          </div>

          {/* Carousel */}
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={showPagination}
            navigation={{
              enabled: true,
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="!w-[180px] sm:!w-[220px] md:!w-[280px] lg:!w-[320px]"
              >
                <div
                  className="relative group rounded-lg sm:rounded-xl overflow-hidden cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/projects/${image.slug}?title=${encodeURIComponent(
                        image.title
                      )}`
                    )
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="rounded-lg sm:rounded-xl object-cover w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px]"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg sm:rounded-xl">
                    <p
                      className={`${notoSans.variable} font-sans text-white text-xs sm:text-sm md:text-base font-semibold px-2 sm:px-4 text-center`}
                    >
                      {image.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Desktop-only arrows */}
            <div className="hidden md:block swiper-button-prev !text-white/80 hover:!text-[#ff9100] transition-colors"></div>
            <div className="hidden md:block swiper-button-next !text-white/80 hover:!text-[#ff9100] transition-colors"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;

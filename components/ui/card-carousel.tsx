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
  weight: "400", // Archivo Black has only one weight
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"], // regular + medium + bold
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

interface CarouselProps {
  images: { src: string; alt: string; slug: string; title: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const router = useRouter();

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[90rem] px-2 sm:px-4">
        <div className="relative flex flex-col rounded-[16px] sm:rounded-[24px] border border-white/10 bg-neutral-800/10 backdrop-blur-md p-3 sm:p-4 shadow-lg">
          <Badge
            variant="outline"
            className="absolute left-3 top-4 sm:left-6 sm:top-6 rounded-[12px] border text-sm sm:text-base"
          >
            <SparklesIcon className="w-4 h-4 mr-1" />
          </Badge>

          <div className="mt-12 sm:mt-16 mb-3 sm:mb-4 text-center px-2">
            <h2
              className={`${archivoBlack.variable} font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#ff9100] leading-none`}
            >
              A Journey of Possibilities
            </h2>
            <p
              className={`${notoSans.variable} font-sans text-white/70 text-sm sm:text-base md:text-lg`}
            >
              Multi-Industry Marketing Excellence
            </p>
          </div>

          <Swiper
            spaceBetween={20}
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
            navigation={
              showNavigation && typeof window !== "undefined" && window.innerWidth >= 640
            }
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="!w-[220px] sm:!w-[260px] md:!w-[300px]"
              >
                <div
                  className="relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
                  // onClick={() =>
                  //   router.push(
                  //     `/projects/${image.slug}?title=${encodeURIComponent(
                  //       image.title
                  //     )}`
                  //   )
                  // }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="rounded-xl object-cover w-full h-[220px] sm:h-[260px] md:h-[300px]"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <p
                      className={`${notoSans.variable} font-sans text-white text-sm sm:text-lg font-semibold px-4 text-center`}
                    >
                      {image.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;

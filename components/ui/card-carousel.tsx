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
      <div className="mx-auto w-full max-w-[90rem] px-4">
        <div className="relative flex flex-col rounded-[24px] border border-white/10 bg-neutral-800/10 backdrop-blur-md p-4 shadow-lg">
          <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border text-base md:left-6"
          >
            <SparklesIcon className="w-4 h-4 mr-1" />
            
          </Badge>

          <div className="mt-16 mb-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#cef133]">
              A Journey of Possibilities
            </h2>
            <p className="text-white/70 text-sm mt-1">
             Multi-Industry Marketing Excellence
            </p>
          </div>

          <Swiper
            spaceBetween={40}
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
            navigation={showNavigation}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="!w-[300px]">
                <div
                  className="relative group rounded-2xl overflow-hidden cursor-pointer"
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
                    className="rounded-xl object-cover w-full h-[300px]"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <p className="text-white text-lg font-semibold px-4 text-center">
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

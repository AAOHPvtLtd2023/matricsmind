"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ElasticCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef(null);

  const images = ["/images/web1.jpg", "/images/web2.jpg", "/images/web3.jpg"];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 1 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  useEffect(() => {
    if (!slider.current) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 5000);
    };

    autoplay();

    const container = sliderRef.current;
    const stop = () => timer.current && clearInterval(timer.current);
    const start = () => autoplay();

    container?.addEventListener("mouseenter", stop);
    container?.addEventListener("mouseleave", start);

    return () => {
      stop();
      container?.removeEventListener("mouseenter", stop);
      container?.removeEventListener("mouseleave", start);
    };
  }, [slider]);

  return (
    <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider rounded-lg">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[650px]">
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                className="object-contain p-0 md:object-cover rounded-lg md:rounded-none"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      {loaded && slider.current && (
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <button
            onClick={() => slider.current?.prev()}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {loaded && slider.current && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

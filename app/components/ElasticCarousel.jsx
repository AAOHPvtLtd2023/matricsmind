"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ElasticCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef; // ✅ Fixed

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
    <div className="flex justify-center items-center max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg sm:max-w-6xl">
      <div ref={sliderRef} className="keen-slider rounded-lg">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:h-[650px]">
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                className="object-contain md:object-cover rounded-lg md:rounded-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ElasticCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef(null);

 const [sliderRef, slider] = useKeenSlider({
  loop: true,
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel);
  },
  created() {
    setLoaded(true);
  },
  animation: {
    duration: 1200, // longer = smoother
    easing: (t) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2, // easeInOutCubic
  },
  slides: {
    origin: "center",
    perView: 1,
    spacing: 15,
  },
});


  // Autoplay every 4s
  useEffect(() => {
    if (!slider) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 4000);
    };

    autoplay();
    return () => clearInterval(timer.current);
  }, [slider]);

  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  return (
    <div className="relative max-w-3xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider rounded-lg">
        {images.map((src, index) => (
          <div
            className="keen-slider__slide flex justify-center items-center"
            key={index}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]"
            />
          </div>
        ))}
      </div>

      {/* Arrows: bottom right */}
      {loaded && (
        <div className="absolute bottom-4 right-4 flex space-x-4 z-10">
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

      {/* Slide Indicators: bottom left */}
      {loaded && (
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
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

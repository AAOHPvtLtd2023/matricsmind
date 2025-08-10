import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Kaustubh Singh Baghal",
    username: "@kaustubh",
    imageSrc: "/images/Testimonials/kaustubh-singh-baghal.jpg",
    text: "The team delivered high-quality, visually stunning motion graphics that really elevated our brand's storytelling. The animations were not only professional but also perfectly aligned with our vision. Their SEO work on our YouTube channel significantly improved our video rankings and visibility. We've seen noticeable growth in both traffic and subscribers thanks to their strategic approach. They handled our social media campaigns end-to-end, and the results were outstanding. Engagement rates went up, our audience grew steadily, and the brand presence across platforms became much stronger. Highly recommend Matrics Mind to anyone looking for creative and data-driven digital marketing support!",
  },
  {
    name: "Engineer Reveals",
    username: "@engineerreveals",
    imageSrc: "/images/Testimonials/engineer-reveals.jpg",
    text: "They delivered end-to-end website design, impactful YouTube SEO, and high-quality video editing with motion graphics—all of which significantly boosted our online presence, audience engagement, and content performance. Truly a data-driven and creative team! We highly recommend Metrics Mind to anyone seeking creative and results-driven digital marketing solutions!",
  },
  {
    name: "Saffron Patriot",
    username: "@saffronpatriot",
    imageSrc: "/images/Testimonials/saffron-patriot.jpg",
    text: "They create high-quality and engaging YouTube videos that truly reflect our brand and keep our audience interested. The visuals and editing are always on point! Highly recommend Metrics Mind for creative and results-driven digital marketing!",
  },
  {
    name: "Vichaarone",
    username: "@vichaarone",
    imageSrc: "/images/Testimonials/vichaarone.jpg",
    text: "We're impressed with Metrics Mind's content creation, motion graphics, video editing, and YouTube SEO – professional work with great outcomes!",
  },
  {
    name: "Gourav Kumar Singh",
    username: "@gouravkumar",
    imageSrc: "/images/Testimonials/gourav-singh.jpg",
    text: "Metrics Mind did a great job with our website creation and SEO audit. The site looks clean and professional, and the SEO insights helped us improve our visibility and performance.",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 5);

const TestimonialsColumn = ({
  className = "",
  testimonials,
  duration = 10,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const columnRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (columnRef.current) {
      observer.observe(columnRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass =
    direction === "down" ? "animate-scroll-down" : "animate-scroll-up";

  return (
    <div className={`${className} overflow-hidden`} ref={columnRef}>
      <div
        className={`flex flex-col gap-6 transition-transform duration-1000 ease-linear ${
          isVisible ? animationClass : ""
        }`}
        style={{
          animation: isVisible
            ? `scroll-${direction} ${duration}s linear infinite`
            : "none",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username }, idx) => (
              <div
                key={`${text}-${index}-${idx}`}
                className="group relative w-full max-w-[90vw] sm:max-w-sm overflow-hidden rounded-2xl border-2 p-4 sm:p-8 shadow-[...]"
                style={{
                  background:
                    "linear-gradient(145deg, #fff 0%, rgba(255,255,255,0.95) 100%)",
                  borderColor: "#1c3784",
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-2xl border-2 border-orange-500"
                    style={{ borderColor: "#ff9100" }}
                  ></div>
                </div>

                {/* Quote mark */}
                <div
                  className="absolute -top-2 -left-2 text-4xl sm:text-5xl font-serif transform rotate-12"
                  style={{ color: "#ff9100" }}
                >
                  &quot;
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="text-xs sm:text-sm leading-relaxed mb-6 line-clamp-6"
                    style={{ color: "#1c3784" }}
                  >
                    {text}
                  </div>

                  {/* Profile section with enhanced styling */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={imageSrc}
                        alt={name}
                        width={56}
                        height={56}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ border: `2px solid #1c3784` }}
                      />

                      {/* Status indicator */}
                      <div
                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 shadow-md"
                        style={{
                          backgroundColor: "#ff9100",
                          borderColor: "#fff",
                        }}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="font-semibold text-sm sm:text-base leading-tight mb-1"
                        style={{ color: "#1c3784" }}
                      >
                        {name}
                      </div>
                      <div
                        className="text-xs sm:text-sm leading-tight font-medium"
                        style={{ color: "#ff9100" }}
                      >
                        {username}
                      </div>
                    </div>
                    {/* Star rating */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 animate-pulse"
                          style={{
                            color: "#ff9100",
                            animationDelay: `${i * 0.1}s`,
                          }}
                        >
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div
                    className="absolute top-4 left-4 w-2 h-2 rounded-full animate-bounce"
                    style={{
                      backgroundColor: "#1c3784",
                      opacity: 0.3,
                      animationDelay: "0s",
                    }}
                  ></div>
                  <div
                    className="absolute top-8 right-6 w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      backgroundColor: "#ff9100",
                      opacity: 0.4,
                      animationDelay: "0.5s",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-6 left-8 w-1 h-1 rounded-full animate-bounce"
                    style={{
                      backgroundColor: "#1c3784",
                      opacity: 0.2,
                      animationDelay: "1s",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .line-clamp-6 {
            -webkit-line-clamp: 5;
          }
        }

        @media (min-width: 641px) {
          .line-clamp-6 {
            -webkit-line-clamp: 6;
          }
        }
      `}</style>

      <section id="testimonials" className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
            style={{ backgroundColor: "#1c3784", opacity: 0.1 }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl animate-pulse"
            style={{
              backgroundColor: "#ff9100",
              opacity: 0.1,
              animationDelay: "1s",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full blur-xl animate-pulse"
            style={{
              backgroundColor: "#1c3784",
              opacity: 0.08,
              animationDelay: "2s",
            }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={sectionRef}
            className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Enhanced Header */}
            <div className="relative inline-block px-0 py-2 mx-auto mt-6">
              <h2 className="relative bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-center text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-transparent leading-none">
                Words From Our Partners
                {/* Glowing text effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-[#ff910090] bg-clip-text text-transparent opacity-30 blur-sm">
                  Words From Our Partners
                </span>
              </h2>

              {/* Enhanced glowing background */}
              <div className="absolute inset-0 mx-auto w-full max-w-md h-[60px] blur-3xl rounded-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 -z-10 animate-pulse"></div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Client Experiences That{" "}
              <span className="font-semibold" style={{ color: "#ff9100" }}>
                Speak Volumes
              </span>
            </p>
          </div>

          {/* Enhanced Testimonials Grid with alternating directions */}
          <div className="overflow-hidden mt-12 sm:mt-20 max-h-[700px] lg:max-h-[800px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            {/* Mobile: Single column */}
            <div className="block sm:hidden">
              <TestimonialsColumn
                testimonials={[...firstColumn, ...secondColumn, ...thirdColumn]}
                duration={28}
                direction="up"
              />
            </div>

            {/* Desktop: Three columns */}
            <div className="hidden sm:flex justify-center gap-6 lg:gap-8">
              <TestimonialsColumn
                testimonials={firstColumn}
                duration={25}
                direction="up"
              />
              <TestimonialsColumn
                testimonials={secondColumn}
                duration={30}
                direction="down"
              />
              <TestimonialsColumn
                testimonials={[...thirdColumn, ...firstColumn.slice(0, 1)]}
                duration={28}
                direction="up"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

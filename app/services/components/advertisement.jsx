import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AdvertisementSectionComponent = ({ title = 'Default' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [title]);

  // Mapping titles to their respective page routes and background images
  const config = {
    Branding: { route: '/branding', backgroundImage: '/images/branding-bg.jpg' },
    Website: { route: '/website', backgroundImage: '/images/website-bg.jpg' },
    VideoGraphy: { route: '/videography', backgroundImage: '/images/videography-bg.jpg' },
  };

  const { route, backgroundImage } = config[title] || { route: '/', backgroundImage: '/images/default-bg.jpg' };

  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden bg-cover bg-center border rounded-2xl w-[90vw] flex justify-self-center self-center justify-center mb-7" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center px-4 sm:px-6 py-8 sm:py-12 h-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-wide transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {title.toUpperCase()}
          </h1>

          {/* Subheading */}
          <div className={`space-y-1 sm:space-y-2 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-base sm:text-lg md:text-xl text-white font-light">
              Create a seamless experience.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white font-light">
              From {title.toLowerCase()} essence to visual identity.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Link href={route} passHref>
              <button className="group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-900 hover:bg-blue-800 text-sm sm:text-base text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View More
                <ArrowRight className="ml-1 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AdvertisementSectionComponent;
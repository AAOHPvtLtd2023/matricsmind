import React, { useState, useEffect, useRef } from 'react';

export default function CompanyMilestones() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 1000,
      suffix: '+',
      description: 'We have completed over 1000+ creative projects for brands and companies, each one unique and tailored to the client\'s needs.'
    },
    {
      number: 300,
      suffix: '+',
      description: 'Businesses Served: Partnering globally, we deliver tailored branding, web & marketing solutions to meet diverse needs and goals.'
    },
    {
      number: 13,
      suffix: '+',
      description: 'Our team, consisting of 13+ talented individuals with varied backgrounds, is dedicated to elevating your brand and web experience.'
    },
    {
      number: 6,
      suffix: '',
      description: 'We are proud to have delivered our branding and web development services across 6 different countries, with a focus on the GCC region.'
    }
  ];

  // Intersection Observer to trigger animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-sm text-gray-600 mb-4 font-medium tracking-wide">
              Trusted Worldwide
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Design and web solution
            </h1>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Collaborating with Visionaries Across</span>
              <br />
              Industries for Innovative Solutions.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Large Number */}
              <div className="mb-8">
                <span className="text-5xl lg:text-6xl font-bold text-gray-900 block leading-none">
                  {counters[index].toLocaleString()}{stat.suffix}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
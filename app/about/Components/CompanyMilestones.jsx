"use client";

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

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
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
            const updated = [...prev];
            updated[index] = Math.floor(current);
            return updated;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[10vh] bg-gray-50 py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full mx-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
          <div className="lg:w-1/2">
            <p className="text-sm text-gray-600 mb-3 font-medium tracking-wide">
              Trusted Worldwide
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ff9100] leading-snug">
              Design and Web Solution
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pl-12 text-left lg:text-right">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Collaborating with Visionaries Across</span>
              <br className="hidden sm:block" />
              Industries for Innovative Solutions.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Stat Number */}
              <div className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c3784] block leading-none">
                  {counters[index].toLocaleString()}{stat.suffix}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

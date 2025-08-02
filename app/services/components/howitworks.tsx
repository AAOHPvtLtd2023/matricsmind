"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  FileText,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      number: "01",
      title: "Share Your Requirements in Detail",
      description:
        "Tell us exactly what you need. The more details you provide, the better we can tailor our solution to your specific requirements.",
      icon: MessageSquare,
      color: "from-[#1C3784] to-[#FF9100]",
    },
    {
      number: "02",
      title: "Get Your Personalized Quote",
      description:
        "Receive a custom quote based on your requirements within 24 hours. No hidden fees, transparent pricing.",
      icon: FileText,
      color: "from-[#4f46e5] to-[#ec4899]",
    },
    {
      number: "03",
      title: "Get Your Project Delivered",
      description:
        "Sit back and relax while we deliver your project on time with the highest quality standards.",
      icon: CheckCircle2,
      color: "from-[#10b981] to-[#22d3ee]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative w-[90vw] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-self-center rounded-2xl shadow-2xl backdrop-blur-md">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(28,55,132,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,145,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05),transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <p className="text-[#FF9100] text-xs sm:text-lg font-semibold uppercase tracking-widest">
          Simple Steps to Get Started
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-5">
          How It Works?
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From start to finish, our process is crafted for clarity, speed, and results.
        </p>
      </div>

      {/* Step Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isActive = activeStep === index;

          return (
            <div key={index} className="relative group">
              {/* Arrow Connection */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-14 h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0">
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-slate-500" />
                </div>
              )}

              <div
                onClick={() => setActiveStep(index)}
                className={`relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:shadow-lg hover:bg-slate-800/70 cursor-pointer group ${
                  isActive
                    ? "ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/20 animate-pulse"
                    : ""
                }`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    step.color
                  } opacity-5 rounded-3xl transition-opacity duration-500 ${
                    isActive ? "opacity-10" : "group-hover:opacity-10"
                  }`}
                />

                {/* Badge & Icon */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} text-xl font-bold shadow-inner shadow-white/10`}
                  >
                    {step.number}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 rounded-full p-2">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.description}
                </p>

                {/* Active Dot Pulse */}
                {isActive && (
                  <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Selector - Dots for Mobile */}
      <div className="relative z-10 flex justify-center mt-10 space-x-3 lg:hidden">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === index
                ? "bg-cyan-400 scale-125"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

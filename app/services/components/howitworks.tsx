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
      title: "Share a Clear Overview of Your Expectations",
      description:
        "Let us know exactly what you're looking for — clarity helps us align our work with your vision.",
      icon: MessageSquare,
      color: "from-[#1C3784] to-[#FF9100]",
    },
    {
      number: "02",
      title: "Get a Quote Specific to Your Needs",
      description:
        "Fast. Fair. Transparent. Get your personalized quote in just 24 hours.",
      icon: FileText,
      color: "from-[#4f46e5] to-[#ec4899]",
    },
    {
      number: "03",
      title: "We Deliver What We Promise",
      description:
        "Your project. Our priority. Delivered with precision and quality — on time, every time.",
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
    <div className="relative w-[90vw] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden py-12 px-4 sm:px-6 lg:px-12 flex flex-col rounded-2xl shadow-2xl backdrop-blur-md mx-auto sm: mb-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(28,55,132,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,145,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05),transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 sm:mb-16">
        <p className="text-[#FF9100] text-xs sm:text-lg font-semibold uppercase tracking-widest">
          Start Your Journey
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-1">
          How We Work?
        </h1>
        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-tight px-0">
          We guide you from start to finish with a process that’s clear, fast,
          and results-driven
        </p>
      </div>
      {/* Step Cards - scroll on mobile */}
      {/* Step Cards - column on mobile, row on desktop */}
<div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10 pb-4">
  {steps.map((step, index) => {
    const IconComponent = step.icon;
    const isActive = activeStep === index;

    return (
      <div
        key={index}
        className="relative group flex flex-col h-full"
      >
        {/* Arrow on desktop */}
        {index < steps.length - 1 && (
          <div className="hidden lg:block absolute top-24 left-full w-14 h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0">
            <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-slate-500" />
          </div>
        )}

        <div
          onClick={() => setActiveStep(index)}
          className={`relative flex flex-col flex-1 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:bg-slate-800/70 cursor-pointer ${
            isActive
              ? "ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/20 animate-pulse"
              : ""
          }`}
        >
          {/* Background Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              step.color
            } opacity-5 rounded-2xl transition-opacity duration-500 ${
              isActive ? "opacity-10" : "group-hover:opacity-10"
            }`}
          />

          {/* Badge & Icon */}
          <div className="relative mb-4 sm:mb-6">
            <div
              className={`inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} text-lg sm:text-xl font-bold shadow-inner shadow-white/10`}
            >
              {step.number}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 rounded-full p-1.5 sm:p-2">
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-cyan-200 transition-colors">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            {step.description}
          </p>

          <div className="flex-1" />

          {/* Active Dot */}
          {isActive && (
            <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
          )}
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
}

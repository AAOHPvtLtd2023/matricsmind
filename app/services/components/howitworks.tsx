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
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Get Your Personalized Quote",
      description:
        "Receive a custom quote based on your requirements within 24 hours. No hidden fees, transparent pricing.",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Get Your Project Delivered",
      description:
        "Sit back and relax while we deliver your project on time with the highest quality standards.",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-12">
      {/* Radial Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_theme(colors.blue.600/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.purple.600/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_theme(colors.cyan.600/0.2),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3">
            Simple Steps to Get Started
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-4">
            How It Works?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            From start to finish, our process is designed for ease and clarity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;

            return (
              <div key={index} className="relative group">
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-12 h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0">
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-slate-500" />
                  </div>
                )}

                {/* Card */}
                <div
                  onClick={() => setActiveStep(index)}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:bg-slate-800/70 cursor-pointer ${
                    isActive
                      ? "ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/20"
                      : ""
                  }`}
                >
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      step.color
                    } opacity-5 rounded-2xl transition-opacity duration-500 ${
                      isActive ? "opacity-10" : "group-hover:opacity-8"
                    }`}
                  />

                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} text-2xl font-bold transition-all duration-500 ${
                        isActive ? "scale-110 shadow-lg" : ""
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-2 border-2 border-slate-600">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>

                  {isActive && (
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots for Mobile Step Switch */}
        <div className="flex justify-center mt-10 space-x-3 lg:hidden">
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
    </div>
  );
}

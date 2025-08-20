"use client";
import Image from "next/image";
import { Button } from "../../@/components/ui/button";
import { Linkedin, ArrowRight, Sparkles } from "lucide-react";
import FlipLink from "../../components/ui/text-effect-flipper";
import Link from "next/link";

export default function HeroSectionWithGirl() {
  return (
    <div className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/10 rounded-full animate-float-random-${
              (i % 3) + 1
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Main Section */}
      <section className="relative w-full max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 py-12 sm:py-16 md:py-20 lg:px-12 rounded-3xl shadow-2xl">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff9100]/20 to-blue-500/20 border border-[#ff9100]/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#ff9100]" />
              <span className="text-sm font-medium text-white/90">
                Professional Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug space-y-2">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Smart solutions,
              </span>
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                expert support 💼
              </span>

              <FlipLink
                href="https://x.com/guri_who"
                className="block text-center 
             text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold
             bg-gradient-to-r from-[#ff9100] to-orange-400 
             bg-clip-text text-transparent
             hover:from-orange-400 hover:to-[#ff9100]
             transition-all duration-300"
              >
                Ready to grow?
              </FlipLink>

              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                We've got your back!
              </span>
            </h1>

            {/* CTA Buttons */}
            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 mt-6 md:flex-row">
              {/* Primary CTA */}
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                <Link href="/about" className="flex items-center gap-2">
                About Us →</Link>
                
              </button>

              {/* Secondary CTA */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-gray-400 text-gray-200 rounded-full hover:border-white hover:text-white transition-all duration-300"
              >
               <Linkedin />
                Connect on LinkedIn
              </a>
            </div>

            {/* Stats Section */}
            {/* Stats Section */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-0 text-center">
              <div className="flex-1 min-w-[100px]">
                <p className="text-2xl font-bold text-orange-500">100+</p>
                <p className="text-sm text-gray-300">Projects</p>
              </div>
              <div className="flex-1 min-w-[100px]">
                <p className="text-2xl font-bold text-yellow-400">4.3★</p>
                <p className="text-sm text-gray-300">Rating</p>
              </div>
              <div className="flex-1 min-w-[100px]">
                <p className="text-2xl font-bold text-green-400">24/7</p>
                <p className="text-sm text-gray-300">Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Image glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff9100]/20 to-blue-500/20 rounded-t-full blur-2xl opacity-60 scale-110" />

            {/* Main image */}
            <div className="relative group">
              <div className="w-[240px] h-[320px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[520px] overflow-hidden shadow-2xl bg-gradient-to-br from-white to-blue-50 rounded-t-full border-4 border-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/girl.jpg"
                  alt="Team Member"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1c3784]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#ff9100] to-orange-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
                <span className="text-sm font-semibold">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-random-1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }
        @keyframes float-random-2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-25px, -20px);
          }
          66% {
            transform: translate(15px, 25px);
          }
        }
        @keyframes float-random-3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(20px, 30px);
          }
          66% {
            transform: translate(-30px, -15px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-random-1 {
          animation: float-random-1 8s ease-in-out infinite;
        }
        .animate-float-random-2 {
          animation: float-random-2 10s ease-in-out infinite;
        }
        .animate-float-random-3 {
          animation: float-random-3 12s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

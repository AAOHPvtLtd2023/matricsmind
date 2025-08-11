"use client";
import Image from "next/image";
import { Button } from "../../@/components/ui/button";
import { Linkedin, ArrowRight, Sparkles } from "lucide-react";
import FlipLink from "../../components/ui/text-effect-flipper";
import Link from "next/link";

export default function HeroSectionWithGirl() {
  return (
    <div className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 " />
    

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/10 rounded-full animate-float-random-${i % 3 + 1}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <section className="relative w-[95vw] max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 py-16 sm:py-10 md:px-12 lg:px-12 rounded-3xl shadow-2xl">
        <div className="mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff9100]/20 to-blue-500/20 border border-[#ff9100]/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#ff9100]" />
              <span className="text-sm font-medium text-white/90">Professional Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-none">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Smart solutions,
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                expert support 💼
              </span>
             
              <FlipLink
                href="https://x.com/guri_who"
                className="bg-gradient-to-r from-[#ff9100] to-orange-400 bg-clip-text text-transparent hover:from-orange-400 hover:to-[#ff9100] transition-all duration-300"
              >
                Ready to grow?
              </FlipLink>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-0">
                We've got your back!
              </span>
            </h1>

            {/* Subtitle */}
            {/* <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empowering businesses with innovative strategies and dedicated support to achieve extraordinary growth.
            </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                className="group rounded-full px-8 py-4 text-base font-semibold bg-gradient-to-r from-[#ff9100] to-orange-500 text-white hover:from-orange-500 hover:to-[#ff9100] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#ff9100]/25 transform hover:scale-105"
                asChild
              >
                <Link href="/about" className="flex items-center gap-2">
                  About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <a
                href="https://www.linkedin.com/in/priyanka-m-10b844245/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="group rounded-full px-8 py-4 text-base font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-[#1c3784] backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 transform hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:text-[#0077b5] transition-colors duration-300" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#ff9100]">100+</div>
                <div className="text-sm text-white/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#ff9100]">5★</div>
                <div className="text-sm text-white/70">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#ff9100]">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Image glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff9100]/20 to-blue-500/20 rounded-t-full blur-2xl opacity-60 scale-110" />
            
            {/* Main image container */}
            <div className="relative group">
              <div className="w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] overflow-hidden shadow-2xl bg-gradient-to-br from-white to-blue-50 rounded-t-full border-4 border-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <Image
                  src="/girl.jpg"
                  alt="Team Member"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Overlay gradient */}
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

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-random-1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes float-random-2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-25px, -20px); }
          66% { transform: translate(15px, 25px); }
        }
        @keyframes float-random-3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, 30px); }
          66% { transform: translate(-30px, -15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-random-1 { animation: float-random-1 8s ease-in-out infinite; }
        .animate-float-random-2 { animation: float-random-2 10s ease-in-out infinite; }
        .animate-float-random-3 { animation: float-random-3 12s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
"use client";

import Image from "next/image";
import { Button } from "../../@/components/ui/button";
import { Linkedin } from "lucide-react";
import FlipLink from "../../components/ui/text-effect-flipper";

export default function HeroSectionWithGirl() {
  return (
    <div className="relative z-0">
      {/* Floating Beams */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-96 h-96 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3784] via-[#ff9100aa] to-transparent rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#1c3784]/30 rounded-full blur-2xl opacity-70 animate-float-slow" />
        <div className="absolute top-20 left-28 w-32 h-32 bg-[#1c3784]/20 rounded-full blur-2xl opacity-50 animate-float" />
      </div>
      <section className="w-[90vw] bg-[#1c3784] text-white px-4 py-12 sm:py-16 md:px-8 lg:px-20 rounded-lg shadow-lg flex justify-self-center">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left px-2 sm:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight text-white">
              Expert team, tailored solutions{" "}
              <span role="img" aria-label="handshake">
                🤝
              </span>{" "}
              let us take your{" "}
              <FlipLink
                href="https://x.com/guri_who"
                className="text-[#ff9100]"
              >
                business
              </FlipLink>{" "}
              to the next level!
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="rounded-full px-6 py-3 text-base font-semibold bg-[#ff9100] text-white hover:bg-[#e28000] w-full sm:w-auto">
                About Us
              </Button>

              <a
                href="https://www.linkedin.com/in/priyanka-m-10b844245/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-3 text-base font-semibold border-white text-white hover:bg-white hover:text-[#1c3784] flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[220px] h-[280px] sm:w-[280px] sm:h-[360px] md:w-[360px] md:h-[460px] overflow-hidden shadow-2xl bg-white rounded-t-full">
              <Image
                src="/girl.jpg"
                alt="Team Member"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

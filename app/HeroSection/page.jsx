"use client";

import Image from "next/image";
import { Button } from "../../@/components/ui/button";
import { Linkedin } from "lucide-react";
import FlipLink from "../../components/ui/text-effect-flipper";

export default function HeroSectionWithGirl() {
  return (
    <section className="w-full px-4 py-12 sm:py-16 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight text-[#dde2e9]">
            Expert team, tailored solutions{" "}
            <span role="img" aria-label="handshake">
              🤝
            </span>{" "}
            let us take your{" "}
            <FlipLink href="https://x.com/guri_who" className="text-[#ff9100]">
              business
            </FlipLink>{" "}
            to the next level!
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button className="rounded-full px-6 py-3 text-base font-semibold bg-[#001025] text-white hover:bg-[#001025]/90 w-full sm:w-auto">
              About Us
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-3 text-base font-semibold border-[#001025] text-[#001025] hover:bg-[#001025] hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div
  className="w-[220px] h-[280px] sm:w-[280px] sm:h-[360px] md:w-[360px] md:h-[460px] overflow-hidden shadow-xl bg-white rounded-t-full"
>
  <Image
    src="/your-image.jpg"
    alt="Team Member"
    width={500}
    height={600}
    className="object-cover w-full h-full"
  />
</div>

        </div>
      </div>
    </section>
  );
}

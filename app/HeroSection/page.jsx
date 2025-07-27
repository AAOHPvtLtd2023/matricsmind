"use client";

import Image from "next/image";
import { Button } from "../../@/components/ui/button";
import { Linkedin } from "lucide-react";
import FlipLink from "../../components/ui/text-effect-flipper";

export default function HeroSectionWithGirl() {
  return (
    <section className=" w-full px-4 py-16 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#dde2e9]">
            Expert team, tailored solutions{" "}
            <span role="img" aria-label="handshake">
              🤝
            </span>{" "}
            let us take your
            <FlipLink href="https://x.com/guri_who" className="text-[#ff9100]">business</FlipLink> to the
            next level!
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-full px-6 py-4 text-base font-semibold bg-[#001025] text-white hover:bg-[#001025]/90">
              About Us
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-4 text-base font-semibold border-[#001025] text-[#001025] hover:bg-[#001025] hover:text-white flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-[300px] h-[380px] md:w-[360px] md:h-[460px] overflow-hidden shadow-xl bg-white"
            style={{
              WebkitMaskImage:
                "radial-gradient(150% 100% at 50% 0%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(150% 100% at 50% 0%, black 50%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <Image
              src="/your-image.jpg" // 🖼 Replace with your actual image
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

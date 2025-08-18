import Image from "next/image";
import { SparklesCore } from "../../components/ui/sparkles";

export default function CompanyPartner() {
  const Partners = [
    "/images/CompanyPartner/1.png",
    "/images/CompanyPartner/2.png",
    "/images/CompanyPartner/3.png",
    "/images/CompanyPartner/4.png",
    "/images/CompanyPartner/5.png",
    "/images/CompanyPartner/10.png",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl text-white">
          <span className="text-[#ff9100] font-extrabold">
            Trusted by experts
          </span>
          <br />
          <span>Used by the leaders.</span>
        </div>

        {/* Partner Logos */}
        <div className="mt-8 sm:mt-12 lg:mt-14">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
            {Partners.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Brand logo ${index + 1}`}
                width={120}
                height={50}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sparkle Background */}
      <div className="relative -mt-16 sm:-mt-24 lg:-mt-32 h-64 sm:h-80 lg:h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#ff9100,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}

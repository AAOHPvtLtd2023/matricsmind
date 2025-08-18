"use client";

import Image from "next/image";
import logo from "../../public/MarticMind.png";

export default function FooterGlow() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pb-8 pt-16">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#ff910066] blur-3xl"></div>
      </div>

      {/* Glass effect container */}
      <div
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12"
        style={{
          backdropFilter: "blur(3px) saturate(180%)",
          background:
            "radial-gradient(circle, rgba(255, 145, 0, 0.1) 0%, rgba(28, 55, 132, 0.1) 60%, rgba(0, 0, 0, 0.2) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-4 flex items-center gap-2">
            <Image src={logo} height={120} width={120} alt="MatricsMind" />
            {/* <span className="bg-gradient-to-br from-[#ff9100] to-[#1c3784] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
              MatricsMind
            </span> */}
          </a>
        </div>
        <div>
          <p className="mb-6 max-w-lg text-center text-sm text-white md:text-center mt-6">
            At Metrics Mind, we go beyond services — we build lasting
            partnerships driven by creativity, strategy, and real results.
          </p>
          <div className="mt-2 flex gap-5 text-[#ff9100] flex-row items-center justify-center">
            <a
              href="#"
              aria-label="Twitter"
              className="transition hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.605-11.604 11.605A11.561 11.561 0 010 18.29c.373.044.734.074 1.12.074a8.189 8.189 0 005.065-1.737 4.102 4.102 0 01-3.834-2.85c.25.04.5.065.765.065.37 0 .734-.049 1.08-.147A4.092 4.092 0 01.8 8.582v-.05a4.119 4.119 0 001.853.522A4.099 4.099 0 01.812 5.847c0-.02 0-.042.002-.062a11.653 11.653 0 008.457 4.287A4.62 4.62 0 0122 5.924a8.215 8.215 0 002.018-.559 4.108 4.108 0 01-1.803 2.268 8.233 8.233 0 002.368-.648 8.897 8.897 0 01-2.062 2.112z" />
              </svg>
            </a>
            <a
              href="https://www.behance.net/matricsmind"
              aria-label="Behance"
              className="transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="currentColor"
              >
                <path d="M22 7.24h-6.21v1.51h6.21V7.24zm-2.76 8.43c-2.19 0-2.59-1.55-2.59-1.55h5.02s.18-3.05-3.22-3.05c-3.44 0-3.43 3.36-3.43 3.36s-.24 3.37 3.43 3.37c2.88 0 3.22-2.06 3.22-2.06h-1.41s-.23.94-1.02.94zm-7.91-3.03s1.37-.11 1.37-1.73c0-1.62-1.13-2.4-2.57-2.4H4v9.49h6.14c1.77 0 2.95-.97 2.95-2.72 0-1.61-1.2-1.64-1.2-1.64zm-4.73-2.53h2.15s.81 0 .81 1.04-.57 1.16-1.2 1.16H6.6v-2.2zm2.15 6.06H6.6v-2.46h2.4s1.19 0 1.19 1.23c0 1.22-.84 1.23-1.19 1.23z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.450-1.492-2.450-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <a href="/about" className="flex flex-col items-center">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff9100]">
                About
              </div>
            </a>
          </div>
          <div>
            <a href="/services" className="flex flex-col items-center">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff9100]">
                Services
              </div>
            </a>
          </div>
          <div>
            <a href="/blog" className="flex flex-col items-center">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff9100]">
                Blog
              </div>
            </a>
          </div>
        </nav>
      </div>

      <div className="relative z-10 mt-10 text-center text-xs text-white">
        <span>&copy; 2025 MatricsMind. All rights reserved.</span>
      </div>
    </footer>
  );
}

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
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                // xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Behance</title>
                <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
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

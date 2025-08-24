"use client";

import Link from "next/link";

const seoLinks = {
  services: "/services",
  branding: "/services/branding",
  "web development": "/services/website",
  CGI: "/services/videoproduction",
  VFX: "/services/videoproduction",
  "performance marketing": "/services/branding",
  "graphic design": "/services/videoproduction",
  "motion videos": "/services/videoproduction",
  "2D": "/services/videoproduction",
  "3D": "/services/videoproduction",
  clients: "/about",
  projects: "/home",
  "GCC region": "/about",
  "web design": "/services/website",
  design: "/services/branding",
  marketing: "/services/branding",
  "Matrics Mind": "/#",
  MatricsMind: "/#",
  "Matrics Mind's": "/#",
  "MatricsMind's": "/#",
  brand: "/services/branding",
  "web experience": "/services/website",
  "web experiences": "/services/website",
  tech: "/services/website",
  "video production": "/services/videoproduction",
  "visual solution": "/services/videoproduction",
  "brand solution": "/services/branding",
  "tech solution": "/services/website",

  // ✅ Newly added from your list
  // "Digital Marketing Strategy": "/services/branding",
  "Google ads": "/services/branding",
  "Web solution": "/services/website",
  // "Influencer Marketing": "/services/branding",
  // "Content marketing": "/services/branding",
  // "UX/UI Design": "/services/website",
};

const TextWithLinks = ({ text }) => {
  const processText = (text) => {
    const matches = [];

    Object.entries(seoLinks).forEach(([keyword, link]) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          keyword: match[0],
          start: match.index,
          end: match.index + match[0].length,
          link,
        });
      }
    });

    matches.sort((a, b) => a.start - b.start);
    if (matches.length === 0) return text;

    const result = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      if (match.start > lastIndex) {
        result.push(text.substring(lastIndex, match.start));
      }

      const isExternal = match.link.startsWith("http");

      result.push(
        <Link
          key={`${match.keyword}-${index}`}
          href={match.link}
          title={`Learn more about ${match.keyword}`}
          className="transition-all duration-700"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {match.keyword}
        </Link>
      );

      lastIndex = match.end;
    });

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result;
  };

  return <>{processText(text)}</>;
};

export default TextWithLinks;

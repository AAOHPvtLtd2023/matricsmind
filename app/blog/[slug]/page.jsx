"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Calendar, Clock, Eye, Copy, ArrowUp, TrendingUp, ExternalLink, Tag, ArrowLeft,
} from "lucide-react";
import WORD_LINKS from "../../../WORD_LINKS";
import blogData from "../../../blogData";

/* ------------------------------ Utilities ------------------------------ */

const slugify = (text) =>
  (text || "")
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const clampHeadingLevel = (level) => Math.min(5, Math.max(2, level));

/* ------------------------------ Tooltip ------------------------------ */

const Tooltip = ({ children, content, isVisible }) => (
  <div className="relative inline-block">
    {children}
    {isVisible && (
      <div className="absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap animate-fadeIn">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
      </div>
    )}
  </div>
);

/* --------------------------- Enhanced Link/Text --------------------------- */

const EnhancedLink = ({ href, children, tooltip, className, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Tooltip content={tooltip} isVisible={showTooltip}>
      <a
        href={href}
        className={`cursor-pointer transition-all duration-200 hover:scale-[1.02] ${className || ""}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={onClick}
      >
        {children}
      </a>
    </Tooltip>
  );
};

// Word highlighting processor (fixed placeholder bug)
const processTextWithLinks = (text) => {
  if (!text || typeof text !== "string") return text;

  let processedText = text;
  const replacements = [];

  // Sort longer words first so partial matches don't overwrite
  const sortedWords = Object.keys(WORD_LINKS).sort((a, b) => b.length - a.length);

  sortedWords.forEach((word, wordIndex) => {
    const config = WORD_LINKS[word];
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    let matchIndex = 0;

    processedText = processedText.replace(regex, (match) => {
      const placeholder = `__LINK_${wordIndex}_${matchIndex}__`;
      replacements.push({
        placeholder,
        component: (
          <EnhancedLink
            key={`${wordIndex}-${matchIndex}`}
            href={config.url}
            tooltip={config.tooltip}
            className={config.className}
            onClick={(e) => {
              e.preventDefault();
              window.open(config.url, "_blank", "noopener,noreferrer");
            }}
          >
            {match}
          </EnhancedLink>
        ),
      });
      matchIndex++;
      return placeholder;
    });
  });

  // Split text into parts and replace placeholders with components
  const parts = processedText.split(/(__LINK_\d+_\d+__)/g);
  return parts.map((part, index) => {
    const replacement = replacements.find((r) => r.placeholder === part);
    return replacement ? replacement.component : part;
  });
};


const EnhancedText = ({ children, className = "" }) => {
  if (typeof children === "string") {
    return <span className={className}>{processTextWithLinks(children)}</span>;
  }
  return <span className={className}>{children}</span>;
};

/* --------------------------- Blog data accessor --------------------------- */

const getBlogData = (slug) => blogData[slug] || null;

/* --------------- Build a flat TOC from arbitrarily nested data --------------- */

function buildToc(sections = [], level = 2, acc = []) {
  sections.forEach((section) => {
    const title = section.heading || section.title; // supports either key
    if (title) {
      const id = slugify(title);
      acc.push({ id, title, level: clampHeadingLevel(level) });
    }
    if (Array.isArray(section.subSections)) {
      buildToc(section.subSections, level + 1, acc);
    }
  });
  return acc;
}

/* -------------------------- Recursive renderer -------------------------- */

function Heading({ level, id, children }) {
  const L = `h${clampHeadingLevel(level)}`;
  const classMap = {
    2: "text-2xl sm:text-3xl font-bold tracking-tight",
    3: "text-xl sm:text-2xl font-semibold",
    4: "text-lg sm:text-xl font-semibold",
    5: "text-base sm:text-lg font-semibold",
  };
  return React.createElement(
    L,
    { id, className: `${classMap[clampHeadingLevel(level)]} text-gray-900 mb-3 scroll-mt-24` },
    children
  );
}

function SectionNode({ node, level = 2 }) {
  const title = node.heading || node.title;
  const id = title ? slugify(title) : undefined;

  return (
    <section className="mt-3">
      {title && (
        <Heading level={level} id={id}>
          <EnhancedText className="text-white">{title}</EnhancedText>
        </Heading>
      )}

      {/* String content */}
      {typeof node.content === "string" &&
        node.content.split("\n").map((para, i) => (
          <p key={i} className="mb-4 leading-7 text-white">
            <EnhancedText>{para}</EnhancedText>
          </p>
        ))}

      {/* Array content */}
      {Array.isArray(node.content) && (
        <ul className="list-disc list-inside space-y-2 text-white">
          {node.content.map((item, i) => (
            <li key={i}>
              <EnhancedText>{item}</EnhancedText>
            </li>
          ))}
        </ul>
      )}

      {/* Nested subsections (any depth) */}
      {Array.isArray(node.subSections) &&
        node.subSections.map((sub, i) => (
          <SectionNode key={i} node={sub} level={level + 1} />
        ))}
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function BlogSlugPage({ params = {} }) {
  const { slug } = params || {};
  const blog = getBlogData(slug);

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const toc = useMemo(() => buildToc(blog?.content?.sections || [], 2, []), [blog]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 50);
    };
    window.addEventListener("scroll", onScroll);

    // IntersectionObserver to highlight active TOC item
    const obs = [];
    if (toc.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
      );

      toc.forEach((t) => {
        const el = document.getElementById(t.id);
        if (el) {
          io.observe(el);
          obs.push(() => io.unobserve(el));
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.forEach((fn) => fn());
    };
  }, [toc]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </div>
    );
  }

  const progressWidth =
    typeof window !== "undefined"
      ? `${Math.min(
          (scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100,
          100
        )}%`
      : "0%";

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-[width]"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-40 transition-all ${
          isScrolled ? "bg-white/90 backdrop-blur shadow" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Blog</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            <EnhancedText>{blog.title}</EnhancedText>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl">
            <EnhancedText>{blog.description}</EnhancedText>
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/90">
            <span className="inline-flex items-center gap-1">
              <Calendar size={16} />
              {blog.publishedAt || blog.date}
            </span>
            {/* {blog.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock size={16} />
                {blog.readTime}
              </span>
            )} */}
            {/* {blog.views && (
              <span className="inline-flex items-center gap-1">
                <Eye size={16} />
                {blog.views} views
              </span>
            )} */}
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 pb-16 grid lg:grid-cols-4 gap-8">
        {/* Article */}
        <article className="lg:col-span-3 space-y-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Intro / Introduction */}
          {(blog.content?.intro || blog.content?.introduction) && (
            <p className="text-lg leading-8 text-gray-800 bg-white rounded-xl p-5 shadow-sm">
              <EnhancedText>
                {blog.content.intro || blog.content.introduction}
              </EnhancedText>
            </p>
          )}

          {/* Sections (recursive) */}
          {Array.isArray(blog.content?.sections) &&
            blog.content.sections.map((section, idx) => (
              <SectionNode key={idx} node={section} level={2} />
            ))}

          {/* Conclusion */}
          {blog.content?.conclusion && (
            <div className="mt-10 border-l-4 border-indigo-600 bg-indigo-50 rounded-r-xl p-5">
              <p className="font-semibold text-gray-900">
                <EnhancedText>{blog.content.conclusion}</EnhancedText>
              </p>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* TOC: collapsible on mobile, sticky on desktop */}
          {toc.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              {/* Mobile header */}
              <button
                onClick={() => setTocOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 lg:hidden"
              >
                <span className="flex items-center gap-2 font-semibold text-gray-900">
                  <TrendingUp size={18} className="text-blue-600" />
                  Table of Contents
                </span>
                <span className="text-sm text-blue-600">
                  {tocOpen ? "Hide" : "Show"}
                </span>
              </button>

              <div className={`px-4 pb-4 ${tocOpen ? "block" : "hidden"} lg:block`}>
                <ul className="space-y-1.5 py-2">
                  {toc.map((item, i) => (
                    <li key={i} className="leading-6">
                      <button
                        onClick={() => {
                          const t = document.getElementById(item.id);
                          if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className={`text-left w-full px-2 py-1 rounded-md transition-colors ${
                          activeId === item.id
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        style={{ paddingLeft: (item.level - 2) * 12 + 8 }}
                      >
                        <EnhancedText>{item.title}</EnhancedText>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Services */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <ExternalLink size={18} className="mr-2 text-green-600" />
              Our Services
            </h3>
            <div className="space-y-2">
              {Object.entries(WORD_LINKS).map(([label, cfg], i) => (
                <EnhancedLink
                  key={i}
                  href={cfg.url}
                  tooltip={cfg.tooltip}
                  className={`block ${cfg.className} hover:bg-gray-50 p-2 rounded-lg capitalize text-sm`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(cfg.url, "_blank", "noopener,noreferrer");
                  }}
                >
                  {label}
                </EnhancedLink>
              ))}
            </div>
          </div>

          {/* Tags */}
          {Array.isArray(blog.tags) && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <Tag size={18} className="mr-2 text-purple-600" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100"
                  >
                    <EnhancedText>{tag}</EnhancedText>
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>

      {/* Scroll to top */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow grid place-items-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

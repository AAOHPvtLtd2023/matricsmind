"use client"
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Eye,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  ArrowUp,
  TrendingUp,
  Github,
  ExternalLink,
  Tag,
  ArrowLeft,
} from "lucide-react";

// Dynamic word highlighting configuration
const WORD_LINKS = {
  "matrics mind": {
    url: "https://matricsmind.com",
    tooltip: "Visit Matrics Mind - Your Digital Solutions Partner",
    className: "text-[#ff9100] font-semibold hover:border-blue-400"
  },
  "visual production": {
    url: "https://www.matricsmind.com/services/videoproduction",
    tooltip: "Professional Visual Production Services",
    className: "text-[#ff9100] font-medium hover:border-purple-400"
  },
  "tech production": {
    url: "https://www.matricsmind.com/services/website", 
    tooltip: "Advanced Tech Production Solutions",
    className: "text-[#ff9100] font-medium hover:border-green-400"
  },
  "advertising": {
    url: "https://matricsmind.com/advertising",
    tooltip: "Creative Advertising Solutions",
    className: "text-[#ff9100] font-medium hover:border-orange-400"
  },
  "seo": {
    url: "https://matricsmind.com/seo",
    tooltip: "Search Engine Optimization Services",
    className: "text-[#ff9100] font-medium hover:border-red-400"
  },
  "digital marketing": {
    url: "https://matricsmind.com/digital-marketing",
    tooltip: "Complete Digital Marketing Solutions",
    className: "text-[#ff9100] font-medium hover:border-indigo-400"
  },
  "web development": {
    url: "https://matricsmind.com/web-development",
    tooltip: "Custom Web Development Services",
    className: "text-[#ff9100] font-medium hover:border-teal-400"
  },
  "brand strategy": {
    url: "https://matricsmind.com/brand-strategy",
    tooltip: "Strategic Brand Development",
    className: "text-[#ff9100] font-medium hover:border-pink-400"
  }
};

// Tooltip Component
const Tooltip = ({ children, content, isVisible }) => (
  <div className="relative inline-block">
    {children}
    {isVisible && (
      <div
        className="absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg -top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-100 transition-all duration-200 animate-pulse"
        style={{ minWidth: "200px" }}
      >
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    )}
  </div>
);

// Enhanced Link Component
const EnhancedLink = ({ href, children, tooltip, className, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Tooltip content={tooltip} isVisible={showTooltip}>
      <a
        href={href}
        className={`cursor-pointer transition-all duration-200 hover:scale-105 ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={onClick}
      >
        {children}
      </a>
    </Tooltip>
  );
};

// Text processor to highlight words
const processTextWithLinks = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  let processedText = text;
  const replacements = [];
  
  // Sort words by length (longest first) to avoid partial matches
  const sortedWords = Object.keys(WORD_LINKS).sort((a, b) => b.length - a.length);
  
  sortedWords.forEach((word, index) => {
    const config = WORD_LINKS[word];
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = [...processedText.matchAll(regex)];
    
    matches.forEach((match, matchIndex) => {
      const uniqueId = `link-${index}-${matchIndex}-${Date.now()}`;
      replacements.push({
        placeholder: `__LINK_${uniqueId}__`,
        component: (
          <EnhancedLink
            key={uniqueId}
            href={config.url}
            tooltip={config.tooltip}
            className={config.className}
            onClick={(e) => {
              e.preventDefault();
              window.open(config.url, '_blank', 'noopener,noreferrer');
            }}
          >
            {match[0]}
          </EnhancedLink>
        ),
        originalText: match[0]
      });
      
      processedText = processedText.replace(match[0], `__LINK_${uniqueId}__`);
    });
  });
  
  // Split text and insert components
  const parts = processedText.split(/(__LINK_[^_]+__)/);
  
  return parts.map((part, index) => {
    const replacement = replacements.find(r => r.placeholder === part);
    if (replacement) {
      return replacement.component;
    }
    return part;
  });
};

// Enhanced Text Component
const EnhancedText = ({ children, className = "" }) => {
  if (typeof children === 'string') {
    return (
      <span className={className}>
        {processTextWithLinks(children)}
      </span>
    );
  }
  return <span className={className}>{children}</span>;
};

// Mock blog data
const getBlogData = (slug) => {
  const blogPosts = {
    "why-matrics-mind-best-advertising-company-abu-dhabi": {
      title: "Why Matrics Mind is Your Best Choice for Advertising Company in Abu Dhabi",
      description: "Discover why Matrics Mind stands out as the premier advertising company in Abu Dhabi, delivering storytelling-driven campaigns that inspire and convert.",
      content: {
        intro: "Let’s be honest—choosing an advertising company in Abu Dhabi isn’t easy. With so many agencies promising to skyrocket your brand, it’s easy to feel overwhelmed. So, what makes Matrics Mind stand out? Simple: we believe every business has a unique story—and it’s our mission to tell yours in a way that connects, inspires, and drives results.",
        sections: [
          {
            heading: "It’s About You, Not Us",
            content: "At Matrics Mind, we don’t believe in pushing cookie-cutter campaigns or flashy ideas that don’t align with your goals. Instead, we start with a simple question: What does your brand need to succeed? Whether you’re a local startup or a well-established business, choosing the right advertising company in Abu Dhabi is crucial. We take the time to understand your brand and audience deeply. Think of us not as a vendor—but as an extension of your team. Check out our portfolio of global projects to see how we bring stories to life."
          },
          {
            heading: "We Know Abu Dhabi",
            content: "Abu Dhabi isn’t just another market—it’s a vibrant intersection of culture, innovation, and ambition. That’s why generic strategies simply don’t work here. As a leading advertising company in Abu Dhabi, our team blends local insights with global perspective to design campaigns that are authentic, relevant, and effective. Whether it’s reaching the right demographic or leveraging cultural moments, we understand what makes this city move—and how to make your brand move with it."
          },
          {
            heading: "Creativity with a Purpose",
            content: "Let’s be honest: great visuals alone don’t cut it. If your campaign doesn’t drive results, it’s not working hard enough. At Matrics Mind, we combine creative brilliance with strategic thinking. Every design, word, and concept is built to captivate your audience—and motivate them to act. As your trusted advertising partner in Abu Dhabi, we make sure every piece of work delivers purpose-driven impact."
          },
          {
            heading: "We’re in This Together",
            content: "Here’s something most agencies won’t tell you: we genuinely care about your success. We don’t just wrap up a campaign and move on. We stay involved—tracking performance, making improvements, and evolving your marketing over time. That’s what makes us a truly client-focused advertising company in Abu Dhabi."
          },
          {
            heading: "A One-Stop Solution",
            content: "Need a stunning website? We’ve got it covered. Looking to improve your SEO or launch targeted digital ads? Say no more. Need branding advice or campaign strategy? We’re right here. Matrics Mind offers end-to-end marketing and advertising solutions—ensuring your brand is consistently powerful across every channel."
          },
          {
            heading: "Why Settle for Ordinary?",
            content: "Anyone can run ads. But if you’re looking for a true partner—someone who’s committed to your growth, who brings fresh ideas, and who goes beyond “business as usual”—then Matrics Mind is the team for you."
          }
        ]
      },
      image: "/images/Blog/blog1.jpg",
      author: {
        name: "Matrics Mind Team",
        avatar: "MM",
        bio: "Creative advertising professionals specializing in Abu Dhabi market insights and brand storytelling."
      },
      publishedAt: "2024-03-25",
      readTime: "8 min read",
      views: "2.1k",
      tags: ["Advertising", "Abu Dhabi", "Brand Strategy", "Creative Marketing"]
    },

    "metrics-mind-best-seo-company-abu-dhabi": {
      title: "From Startups to Enterprises: Why Matrics Mind is the Best SEO Company in Abu Dhabi",
      description: "Learn why Matrics Mind is the go-to SEO company in Abu Dhabi for businesses of all sizes, delivering data-driven strategies and long-term growth.",
      content: {
        intro: "In a city buzzing with innovation and ambition, businesses—whether they’re emerging startups or established giants—are all competing for visibility. And in this digital battleground, the secret to standing out is clear: Search Engine Optimization (SEO). If you’re ready to climb the search rankings and attract your ideal audience, Matrics Mind is your trusted SEO partner.",
        sections: [
          {
            heading: "Why SEO is a Game-Changer for Abu Dhabi Businesses",
            content: "Abu Dhabi is a diverse and competitive market—home to industries like hospitality, retail, real estate, technology, and beyond. In this landscape, being on the first page of Google isn’t optional; it’s essential.\nMore Visibility = More Customers.\nCost-Effective Marketing without continuous spend.\nBuild Trust & Credibility through high rankings.\nLong-Term Growth with sustainable results."
          },
          {
            heading: "Why Matrics Mind Stands Out as the Best SEO Company in Abu Dhabi",
            content: "1. Strategies Built Around You — Startups get quick wins like local SEO and high-value keywords; Enterprises get deep audits and enterprise-level optimization.\n2. Data-Driven — We use Google Analytics, SEMrush, and Ahrefs to make informed decisions.\n3. Complete, End-to-End SEO — On-page, off-page, and technical SEO.\n4. Content That Converts — We create SEO-optimized content that informs, engages, and converts."
          },
          {
            heading: "How Matrics Mind Helps Businesses of All Sizes",
            content: "For Startups — Local SEO, keyword research, and mobile-first optimization.\nFor Enterprises — Full SEO audits, long-tail keyword strategies, and e-commerce SEO."
          },
          {
            heading: "Real Results, Real Impact",
            content: "We help businesses rank higher, drive organic traffic, and increase conversions. From visibility to measurable growth, we’re committed to your success."
          },
          {
            heading: "Your Path to SEO Excellence",
            content: "Whether you’re a bold startup or an industry leader, Matrics Mind builds strategies that deliver lasting value. Let’s grow together."
          }
        ]
      },
      image: "/images/Blog/blog2.jpg",
      author: {
        name: "SEO Team at Matrics Mind",
        avatar: "SM",
        bio: "Expert SEO specialists with deep understanding of Abu Dhabi market dynamics and search optimization."
      },
      publishedAt: "2024-03-20",
      readTime: "12 min read",
      views: "3.4k",
      tags: ["SEO", "Abu Dhabi", "Digital Marketing", "Search Optimization"]
    },

    "top-10-digital-marketing-strategies-jewellery-business": {
      title: "Top 10 Digital Marketing Strategies for Jewellery Business",
      description: "Proven digital marketing strategies for jewellery businesses to boost sales, engagement, and brand awareness.",
      content: {
        intro: "In today’s fast-paced digital world, having a solid online presence is no longer optional — it’s essential for jewellery businesses. Digital marketing opens up exciting opportunities to connect with a broader audience, showcase exquisite craftsmanship, and drive online and offline sales.",
        sections: [
          { heading: "What is Digital Marketing?", content: "Digital marketing promotes products through online channels like search engines, social media, and websites using data-driven methods." },
          { heading: "Why Jewellery Businesses Need Digital Marketing", content: "Increased visibility, global reach, better engagement, showcasing aesthetics, informed decisions, cost efficiency, competitive advantage, and scalability." },
          { heading: "1. Build an Aesthetic, SEO-Friendly, Shopper-Centric Jewellery Website", content: "Use high-res images, mobile optimization, virtual try-on, smooth checkout, trust signals, and clear CTAs." },
          { heading: "2. Optimize Your Website for SEO", content: "Keyword research, meta optimization, headings, ALT tags, backlinks, and local SEO." },
          { heading: "3. Run Strategic Social Media Advertising", content: "Instagram, Facebook, Pinterest targeting, retargeting, influencer collaborations, and seasonal promotions." },
          { heading: "4. Launch an Email Marketing Campaign", content: "Segment lists, personalized offers, highlight collections, visuals, and monitor analytics." },
          { heading: "5. Create Engaging Content", content: "Blogs, behind-the-scenes, styling tips, testimonials, infographics, and videos." },
          { heading: "6. Use Pay-Per-Click (PPC) Advertising", content: "Long-tail keywords, ad copy, optimized landing pages, and conversion tracking." },
          { heading: "7. Collaborate with Social Media Influencers", content: "Identify niche influencers, partnerships, authentic content, and reuse influencer content." },
          { heading: "8. Keep Google My Business Updated", content: "Update hours, photos, reviews, Q&A, safety protocols, and service attributes." },
          { heading: "9. Start a Blog to Attract Customers", content: "Post jewellery tips, care guides, trends, and authenticity checks." },
          { heading: "10. Use Pinterest to Drive Discovery", content: "Business account, vertical images, keyword titles, product links, seasonal boards, rich pins, and promoted pins." }
        ]
      },
      image: "/images/Blog/blog3.jpg",
      author: {
        name: "Digital Marketing Team at Matrics Mind",
        avatar: "DM",
        bio: "Specialists in jewellery and luxury retail marketing with a focus on visual storytelling."
      },
      publishedAt: "2024-03-15",
      readTime: "15 min read",
      views: "2.8k",
      tags: ["Jewellery Marketing", "E-commerce", "Digital Strategy", "Social Media"]
    }
  };

  return blogPosts[slug] || null;
};


export default function BlogSlugPage({ params = {} }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const slug = params?.slug || "why-metrics-mind-best-advertising-company-abu-dhabi";
  const blogData = getBlogData(slug);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <a
            href="/blog"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

const progressWidth = typeof window !== "undefined" 
  ? `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
  : "0%";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-150"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/blog"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-orange-400'
              }`}
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-gray-900"
        // style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-8xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <EnhancedText>{blogData.title}</EnhancedText>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              <EnhancedText>{blogData.description}</EnhancedText>
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(blogData.publishedAt).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>{blogData.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye size={18} />
                  <span>{blogData.views} views</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {blogData.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold text-white border border-white/30 hover:bg-white/30 transition-all cursor-pointer"
                >
                  <EnhancedText>{tag}</EnhancedText>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-150 overflow-hidden">
                <img
                  src={blogData.image}
                  alt={blogData.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Action Bar */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    {[
                      { icon: Twitter, color: "hover:bg-blue-100 hover:text-blue-600" },
                      { icon: Facebook, color: "hover:bg-blue-100 hover:text-blue-600" },
                      { icon: Linkedin, color: "hover:bg-blue-100 hover:text-blue-600" },
                      { icon: Github, color: "hover:bg-gray-100 hover:text-gray-900" },
                    ].map(({ icon: Icon, color }, index) => (
                      <button
                        key={index}
                        className={`p-3 rounded-full bg-gray-50 text-gray-500 transition-all hover:scale-110 ${color}`}
                      >
                        <Icon size={18} />
                      </button>
                    ))}

                    <button
                      onClick={handleCopy}
                      className="p-3 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:scale-110 transition-all"
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>

                {/* Article Text */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    <EnhancedText>{blogData.content.intro}</EnhancedText>
                  </p>

                  {blogData.content.sections.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        <EnhancedText>{section.heading}</EnhancedText>
                      </h2>

                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        <EnhancedText>{section.content}</EnhancedText>
                      </p>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                    <p className="text-lg italic text-gray-800">
                      <EnhancedText>
                        "At Matrics Mind, we believe the key to success is not just following trends, but understanding the underlying principles that make great digital marketing and tech production timeless."
                      </EnhancedText>
                    </p>
                  </div>

                  {/* Call to Action */}
                  {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center my-12">
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Brand?</h3>
                    <p className="text-lg mb-6">
                      <EnhancedText>
                        Partner with Matrics Mind for exceptional advertising, SEO, and digital marketing solutions that drive real results.
                      </EnhancedText>
                    </p>
                    <button 
                      onClick={() => window.open('https://matricsmind.com/contact', '_blank')}
                      className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
                    >
                      Get Started Today
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp size={20} className="mr-2 text-blue-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                {blogData.content.sections.map((section, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-0 hover:translate-x-1"
                  >
                    <EnhancedText>{section.heading}</EnhancedText>
                  </a>
                ))}
              </nav>
            </div>

            {/* Services Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ExternalLink size={20} className="mr-2 text-green-600" />
                Our Services
              </h3>
              <div className="space-y-3">
                {Object.entries(WORD_LINKS).map(([service, config], index) => (
                  <EnhancedLink
                    key={index}
                    href={config.url}
                    tooltip={config.tooltip}
                    className={`block ${config.className} hover:bg-gray-50 p-3 rounded-lg transition-all capitalize text-sm font-medium`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(config.url, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {service}
                  </EnhancedLink>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag size={20} className="mr-2 text-purple-600" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogData.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium cursor-pointer hover:from-blue-200 hover:to-purple-200 hover:scale-105 transition-all"
                  >
                    <EnhancedText>{tag}</EnhancedText>
                  </span>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {blogData.author.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{blogData.author.name}</h4>
                  <p className="text-sm text-gray-600">
                    <EnhancedText>{blogData.author.bio}</EnhancedText>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:scale-110 transition-transform"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Copy Notification */}
      {copied && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
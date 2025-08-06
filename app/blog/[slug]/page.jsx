"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  ArrowUp,
  ChevronRight,
  Heart,
  MessageCircle,
  Bookmark,
  User,
  Tag,
  TrendingUp,
  Github,
  ExternalLink,
  Code,
  Zap,
  Target,
  ArrowLeft,
} from "lucide-react";
// Using standard HTML elements instead of Next.js components

// Mock blog data - replace with your actual data fetching
const getBlogData = (slug) => {
  const blogPosts = {
  "why-metrics-mind-best-advertising-company-abu-dhabi": {
    title: "Why Metrics Mind is Your Best Choice for Advertising Company in Abu Dhabi",
    description: "Discover what makes Metrics Mind stand out as the premier advertising company in Abu Dhabi, focusing on unique storytelling and results-driven campaigns.",
    content: {
      intro: "Let's be honest—choosing an advertising company in Abu Dhabi isn't easy. With so many agencies promising to skyrocket your brand, it's easy to feel overwhelmed. So, what makes Metrics Mind stand out? Simple: we believe every business has a unique story—and it's our mission to tell yours in a way that connects, inspires, and drives results.",
      sections: [
        {
          heading: "It's About You, Not Us",
          content: "At Metrics Mind, we don't believe in pushing cookie-cutter campaigns or flashy ideas that don't align with your goals. Instead, we start with a simple question: What does your brand need to succeed? Whether you're a local startup or a well-established business, choosing the right advertising company in Abu Dhabi is crucial. We take the time to understand your brand and audience deeply. Think of us not as a vendor—but as an extension of your team."
        },
        {
          heading: "We Know Abu Dhabi",
          content: "Abu Dhabi isn't just another market—it's a vibrant intersection of culture, innovation, and ambition. That's why generic strategies simply don't work here. As a leading advertising company in Abu Dhabi, our team blends local insights with global perspective to design campaigns that are authentic, relevant, and effective. Whether it's reaching the right demographic or leveraging cultural moments, we understand what makes this city move—and how to make your brand move with it."
        },
        {
          heading: "Creativity with a Purpose",
          content: "Let's be honest: great visuals alone don't cut it. If your campaign doesn't drive results, it's not working hard enough. At Metrics Mind, we combine creative brilliance with strategic thinking. Every design, word, and concept is built to captivate your audience—and motivate them to act. As your trusted advertising partner in Abu Dhabi, we make sure every piece of work delivers purpose-driven impact."
        },
        {
          heading: "A One-Stop Solution",
          content: "Need a stunning website? We've got it covered. Looking to improve your SEO or launch targeted digital ads? Say no more. Need branding advice or campaign strategy? We're right here. Metrics Mind offers end-to-end marketing and advertising solutions—ensuring your brand is consistently powerful across every channel."
        }
      ]
    },
    image: "/blog/advertising-abu-dhabi.jpg",
    author: {
      name: "Metrics Mind Team",
      avatar: "MM",
      bio: "Creative advertising professionals specializing in Abu Dhabi market insights and brand storytelling."
    },
    publishedAt: "2024-03-25",
    readTime: "8 min read",
    views: "2.1k",
    tags: ["Advertising", "Abu Dhabi", "Brand Strategy", "Creative Marketing"]
  },

  "metrics-mind-best-seo-company-abu-dhabi": {
    title: "From Startups to Enterprises: Why Metrics Mind is the Best SEO Company in Abu Dhabi",
    description: "Learn how Metrics Mind helps businesses of all sizes dominate search rankings in Abu Dhabi's competitive digital landscape.",
    content: {
      intro: "In Abu Dhabi's fast-moving digital world, standing out is everything. In a city buzzing with innovation and ambition, businesses—whether they're emerging startups or established giants—are all competing for visibility. And in this digital battleground, the secret to standing out is clear: Search Engine Optimization (SEO).",
      sections: [
        {
          heading: "Why SEO is a Game-Changer for Abu Dhabi Businesses",
          content: "Abu Dhabi is a diverse and competitive market—home to industries like hospitality, retail, real estate, technology, and beyond. In this landscape, being on the first page of Google isn't optional; it's essential. More visibility equals more customers, and SEO provides cost-effective marketing that drives ongoing organic traffic without continuous spend while building trust and credibility."
        },
        {
          heading: "Strategies Built Around You",
          content: "Every business is different—so why settle for a one-size-fits-all approach? At Metrics Mind, we take time to understand your goals, audience, and competition to develop a strategy that truly fits. For startups, we target quick wins like local SEO and high-value keywords to help you gain traction fast. For enterprises, we conduct in-depth audits, competitor analysis, and enterprise-level optimization to keep you ahead of the curve."
        },
        {
          heading: "Complete, End-to-End SEO",
          content: "We cover every aspect of SEO: On-Page SEO for optimizing content, images, and site structure for visibility; Off-Page SEO for building high-quality backlinks and digital authority; and Technical SEO for enhancing load speeds, mobile optimization, and indexing issues. We also create SEO-optimized content that informs, engages, and converts."
        },
        {
          heading: "Real Results, Real Impact",
          content: "We don't just promise—we deliver. Businesses across Abu Dhabi trust Metrics Mind because we help them rank higher in search engines, drive consistent organic traffic, and increase leads, conversions, and overall revenue. From visibility to credibility to measurable growth, we're committed to your long-term success."
        }
      ]
    },
    image: "/blog/seo-abu-dhabi.jpg",
    author: {
      name: "SEO Team at Metrics Mind",
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
    description: "Comprehensive guide to digital marketing strategies that help jewellery businesses showcase craftsmanship and drive sales online and offline.",
    content: {
      intro: "In today's fast-paced digital world, having a solid online presence is no longer optional — it's essential. For jewellery businesses, digital marketing opens up exciting opportunities to connect with a broader audience, showcase exquisite craftsmanship, and drive online and offline sales.",
      sections: [
        {
          heading: "Build an Aesthetic, SEO-Friendly, Shopper-Centric Website",
          content: "Your website is your digital showroom. A beautiful and functional website helps convert visitors into loyal customers. Use high-resolution images and 360-degree views, optimize for mobile devices, offer a virtual try-on experience, provide a smooth checkout process, add trust signals like reviews and secure payment icons, and use clear CTAs and product descriptions."
        },
        {
          heading: "Optimize Your Website for SEO",
          content: "Search Engine Optimization (SEO) is crucial for driving organic traffic. Conduct keyword research using Google Keyword Planner, SEMrush, or Ahrefs. Optimize meta titles, descriptions, and URLs, implement structured headings, use image ALT tags and compress images, build backlinks from jewellery blogs and influencers, and optimize for local SEO with Google My Business."
        },
        {
          heading: "Strategic Social Media and Email Marketing",
          content: "Leverage platforms like Instagram, Facebook, and Pinterest to promote your jewellery with visually compelling ads. Use retargeting ads to recover cart abandoners and collaborate with influencers. Build a segmented email list, send personalized campaigns, highlight new collections and limited-time deals, and include high-quality visuals with clear CTAs."
        },
        {
          heading: "Content Creation and PPC Advertising",
          content: "Create engaging content including blog posts, behind-the-scenes craftsmanship stories, styling tips, customer testimonials, and infographics. Use Pay-Per-Click advertising with long-tail keywords, attention-grabbing ad copy, optimized landing pages, and conversion tracking through Google Analytics."
        }
      ]
    },
    image: "/blog/jewellery-digital-marketing.jpg",
    author: {
      name: "Digital Marketing Team",
      avatar: "DM",
      bio: "Specialists in e-commerce and luxury retail digital marketing with focus on visual storytelling."
    },
    publishedAt: "2024-03-15",
    readTime: "15 min read",
    views: "2.8k",
    tags: ["Jewellery Marketing", "E-commerce", "Digital Strategy", "Social Media"]
  },

  "pharmaceutical-digital-marketing-agency-metrics-mind": {
    title: "Pharmaceutical Digital Marketing Agency: Metrics Mind – Your Growth Engine in the Digital Era",
    description: "Discover how Metrics Mind helps pharmaceutical companies unlock growth through compliant, data-driven digital marketing strategies.",
    content: {
      intro: "In an industry as competitive and regulated as pharmaceuticals, digital marketing isn't just an option — it's a strategic necessity. With doctors, patients, and healthcare professionals increasingly turning to digital channels for information, your brand's digital presence must be credible, compliant, and compelling.",
      sections: [
        {
          heading: "Why Digital Marketing is Crucial for Pharmaceutical Companies",
          content: "80% of physicians use the internet to research medical products. Patients often self-educate online before consulting a doctor. Digital platforms allow direct engagement with doctors, pharmacists, and patients. Personalized and data-driven marketing is proven to increase prescription adoption."
        },
        {
          heading: "SEO and Paid Advertising for Pharma",
          content: "Rank higher on Google for medical queries, product names, and symptoms through medical keyword research, competitor analysis, on-page SEO, scientific content optimization, and local SEO for clinics & distributors. Drive targeted traffic through Google Ads & Display Network, LinkedIn Ads for B2B pharma outreach, and compliant Facebook/Instagram campaigns for patient engagement."
        },
        {
          heading: "Content Marketing and HCP Outreach",
          content: "We produce medically accurate, engaging content tailored to healthcare professionals and patients, including blog posts & health articles, whitepapers & research summaries, animated videos & explainer content, and compliance-checked copywriting. Reach the right doctors with email marketing, medical webinar marketing, educational video campaigns, and LinkedIn outreach."
        },
        {
          heading: "Compliance and Analytics",
          content: "We understand pharma compliance (FDA, DCGI, GDPR), medical product lifecycle marketing, OTC vs prescription marketing strategies, and ethical digital engagement for life sciences. Track patient engagement rates, conversion metrics, channel performance, and ROI measurement with comprehensive reporting."
        }
      ]
    },
    image: "/blog/pharmaceutical-digital-marketing.jpg",
    author: {
      name: "Healthcare Marketing Team",
      avatar: "HM",
      bio: "Specialized team combining healthcare knowledge with digital marketing expertise for pharmaceutical industry."
    },
    publishedAt: "2024-03-10",
    readTime: "10 min read",
    views: "1.9k",
    tags: ["Pharmaceutical", "Healthcare Marketing", "Digital Strategy", "Compliance"]
  }
};

  return blogPosts[slug] || null;
};

export default function BlogSlugPage({ params = {} }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // For demo purposes, use a default slug or handle params properly
  const slug = params?.slug || "how-to-build-a-magnetic-brand-identity";
  // Get blog data based on slug
  const blogData = getBlogData(slug);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If blog post not found
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-40 transition-all duration-300"
        // style={{
        //   backgroundColor: `rgba(0, 0, 0, ${isScrolled ? 0.95 : 0.8})`,
        //   backdropFilter: "blur(20px)",
        //   borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
        // }}
      >
        <nav className="max-w-[90vw] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/blog"
              className="flex items-center space-x-2 text-gray-100 hover:text-[#ff9100] transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </a>

            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              DevBlog
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Subscribe
            </motion.button> */}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-20 pb-10 overflow-hidden w-[90vw]"
      >
        {/* Animated Background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 145, 0, 0.1) 0%, transparent 50%),
radial-gradient(circle at 80% 20%, rgba(255, 145, 0, 0.1) 0%, transparent 50%),
radial-gradient(circle at 40% 80%, rgba(255, 145, 0, 0.1) 0%, transparent 50%)
`,
            }}
          />
        </div> */}

        <div className="relative max-w-6xl mx-auto px-6">
          {/* <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
          >
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <ChevronRight size={16} />
            <a href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </a>
            <ChevronRight size={16} />
            <span className="text-blue-600 font-medium">{blogData.title}</span>
          </motion.nav> */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-[#ff9100] bg-clip-text mb-6 leading-none"
            >
              {blogData.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed"
            >
              {blogData.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <div className="flex items-center space-x-6 text-[#fff]">
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
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              {blogData.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold text-[#1c3784] border border-gray-200 shadow-sm "
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100/50 overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={blogData.image}
                  alt={blogData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Action Bar */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  {/* <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                        liked
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Heart size={18} fill={liked ? "currentColor" : "none"} />
                      <span>324</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                    >
                      <MessageCircle size={18} />
                      <span>42</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                        bookmarked
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Bookmark
                        size={18}
                        fill={bookmarked ? "currentColor" : "none"}
                      />
                    </motion.button>
                  </div> */}

                  <div className="flex items-center space-x-3">
                    {[
                      {
                        icon: Twitter,
                        color: "hover:bg-blue-100 hover:text-blue-600",
                      },
                      {
                        icon: Facebook,
                        color: "hover:bg-blue-100 hover:text-blue-600",
                      },
                      {
                        icon: Linkedin,
                        color: "hover:bg-blue-100 hover:text-blue-600",
                      },
                      {
                        icon: Github,
                        color: "hover:bg-gray-100 hover:text-gray-900",
                      },
                    ].map(({ icon: Icon, color }, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-full bg-gray-50 text-gray-500 transition-all ${color}`}
                      >
                        <Icon size={18} />
                      </motion.button>
                    ))}

                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleCopy}
                      className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 transition-all"
                    >
                      <Copy size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Article Text */}
                <div className="prose prose-lg max-w-none">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-700 leading-relaxed mb-8"
                  >
                    {blogData.content.intro}
                  </motion.p>

                  {blogData.content.sections.map((section, index) => (
                    <div key={index}>
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-3xl font-bold text-gray-900 mt-3"
                      >
                        {section.heading}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-[#1c3784] leading-relaxed mb-6"
                      >
                        {section.content}
                      </motion.p>
                    </div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg"
                  >
                    <p className="text-lg italic text-gray-800">
                      "The key to success is not just following trends, but
                      understanding the underlying principles that make great
                      design and development timeless."
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp size={20} className="mr-2 text-blue-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                {blogData.content.sections.map((section, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ x: 5 }}
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-0"
                  >
                    {section.heading}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag size={20} className="mr-2 text-purple-600" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogData.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium cursor-pointer hover:from-blue-200 hover:to-purple-200 transition-all"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp size={20} className="mr-2 text-green-600" />
                Related Posts
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Advanced React Patterns", views: "1.8k" },
                  { title: "Modern CSS Techniques", views: "1.2k" },
                  { title: "TypeScript Best Practices", views: "990" },
                ].map((post, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer"
                  >
                    <h4 className="text-gray-800 group-hover:text-blue-600 transition-colors font-medium mb-1">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Eye size={14} className="mr-1" />
                      {post.views} views
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center z-40"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Copy Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
          >
            Link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

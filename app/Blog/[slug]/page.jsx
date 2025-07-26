"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  ArrowLeft
} from 'lucide-react';
// Using standard HTML elements instead of Next.js components

// Mock blog data - replace with your actual data fetching
const getBlogData = (slug) => {
  const blogPosts = {
    "how-to-build-a-magnetic-brand-identity": {
      title: "How to Build a Magnetic Brand Identity",
      description: "A complete guide to designing a brand that emotionally connects with your audience.",
      content: {
        intro: "Building a magnetic brand identity goes beyond just creating a logo or choosing colors. It's about crafting an emotional connection that resonates with your audience on a deeper level.",
        sections: [
          {
            heading: "Understanding Brand Psychology",
            content: "Your brand identity is the visual and emotional representation of your company's values, personality, and promise. It's what makes people choose you over your competitors, even when the products are similar."
          },
          {
            heading: "The Foundation Elements",
            content: "Every strong brand identity starts with understanding your core values, target audience, and unique value proposition. These elements form the foundation upon which all visual and messaging decisions are made."
          },
          {
            heading: "Visual Consistency Matters",
            content: "Consistency across all touchpoints is crucial. From your website to business cards, every element should reinforce your brand's personality and values."
          }
        ]
      },
      image: "/blog/brand.jpg",
      author: {
        name: "Sarah Johnson",
        avatar: "SJ",
        bio: "Brand strategist with 10+ years of experience helping companies build memorable identities."
      },
      publishedAt: "2024-03-15",
      readTime: "12 min read",
      views: "3.2k",
      tags: ["Branding", "Design", "Strategy", "Marketing"]
    },
    "mastering-ui-animation-framer-motion": {
      title: "Mastering UI Animation with Framer Motion",
      description: "Learn how to animate your interfaces with smooth transitions and gestures.",
      content: {
        intro: "Framer Motion has revolutionized how we approach animations in React applications. This comprehensive guide will take you from basic animations to complex gesture-driven interactions.",
        sections: [
          {
            heading: "Getting Started with Framer Motion",
            content: "Framer Motion provides a simple yet powerful API for creating smooth animations. Let's start with the basics and build up to more complex interactions."
          },
          {
            heading: "Advanced Animation Patterns",
            content: "Learn about variants, orchestration, and how to create animations that feel natural and enhance user experience rather than distract from it."
          },
          {
            heading: "Performance Considerations",
            content: "Understanding how to optimize animations for performance is crucial. We'll cover best practices for smooth 60fps animations."
          }
        ]
      },
      image: "/blog/animation.jpg",
      author: {
        name: "Alex Chen",
        avatar: "AC",
        bio: "Frontend developer and animation enthusiast. Creator of award-winning web experiences."
      },
      publishedAt: "2024-03-10",
      readTime: "8 min read",
      views: "2.8k",
      tags: ["Animation", "React", "Framer Motion", "UI/UX"]
    },
    "nextjs-15-new-features": {
      title: "Next.js 15: What's New and What Matters",
      description: "Explore the new features, layouts, and improvements in the latest Next.js release.",
      content: {
        intro: "Next.js 15 brings significant improvements to performance, developer experience, and new capabilities that will change how we build React applications.",
        sections: [
          {
            heading: "Revolutionary App Router Enhancements",
            content: "The App Router gets major performance improvements and new features that make building complex applications even more straightforward."
          },
          {
            heading: "Server Components Evolution",
            content: "Server Components now offer better streaming, improved error handling, and more efficient data fetching patterns."
          },
          {
            heading: "Developer Experience Improvements",
            content: "From better TypeScript support to enhanced debugging tools, Next.js 15 focuses heavily on developer productivity."
          }
        ]
      },
      image: "/blog/nextjs15.jpg",
      author: {
        name: "Mike Rodriguez",
        avatar: "MR",
        bio: "Full-stack developer and Next.js core contributor. Passionate about web performance."
      },
      publishedAt: "2024-03-20",
      readTime: "10 min read",
      views: "4.1k",
      tags: ["Next.js", "React", "Web Development", "Performance"]
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
  const slug = params?.slug || 'how-to-build-a-magnetic-brand-identity';
  // Get blog data based on slug
  const blogData = getBlogData(slug);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-40 transition-all duration-300"
        style={{ 
          backgroundColor: `rgba(255, 255, 255, ${isScrolled ? 0.95 : 0.8})`,
          backdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="/blog"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </a>
            
            <motion.div
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
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-20 pb-20 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
          >
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <ChevronRight size={16} />
            <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
            <ChevronRight size={16} />
            <span className="text-blue-600 font-medium">{blogData.title}</span>
          </motion.nav>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight"
            >
              {blogData.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              {blogData.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-semibold">{blogData.author.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{blogData.author.name}</p>
                  <p className="text-sm text-gray-600">Author</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{new Date(blogData.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
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
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                        liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
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
                        bookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Bookmark size={18} fill={bookmarked ? 'currentColor' : 'none'} />
                    </motion.button>
                  </div>

                  <div className="flex items-center space-x-3">
                    {[
                      { icon: Twitter, color: 'hover:bg-blue-100 hover:text-blue-600' },
                      { icon: Facebook, color: 'hover:bg-blue-100 hover:text-blue-600' },
                      { icon: Linkedin, color: 'hover:bg-blue-100 hover:text-blue-600' },
                      { icon: Github, color: 'hover:bg-gray-100 hover:text-gray-900' }
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
                        className="text-3xl font-bold text-gray-900 mb-6 mt-12"
                      >
                        {section.heading}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-gray-700 leading-relaxed mb-6"
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
                      "The key to success is not just following trends, but understanding the underlying principles that make great design and development timeless."
                    </p>
                  </motion.div>
                </div>

                {/* Author Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-semibold">{blogData.author.avatar}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{blogData.author.name}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {blogData.author.bio}
                      </p>
                      <div className="flex items-center space-x-4 mt-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href="#"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Twitter size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href="#"
                          className="text-gray-600 hover:text-gray-700 transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href="#"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
                  { title: 'Advanced React Patterns', views: '1.8k' },
                  { title: 'Modern CSS Techniques', views: '1.2k' },
                  { title: 'TypeScript Best Practices', views: '990' }
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
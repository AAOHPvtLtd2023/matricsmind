"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../../public/MarticMind.png"; // Adjust the path as necessary

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services ( Solution)",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Tech Solution",
        href: "/services/website",
        description: "Track your metrics",
      },
      {
        name: "Brand Solution",
        href: "/services/branding",
        description: "Manage your data",
      },
      {
        name: "Visual Solution",
        href: "/services/videoproduction",
        description: "Generate insights",
      },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Course", href: "/course" },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor:
        theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 max-w-[100vw]"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 1)",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} height={120} width={120} alt="MatricsMind" />
            </Link>
          </motion.div>

          <div className="flex flex-row gap-5">
            <nav className="hidden items-center space-x-8 lg:flex">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-[#1c3784] flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-[#ff9100]"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    )}
                  </Link>

                  {item.hasDropdown && activeDropdown === item.name && (
  <motion.div
    className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg z-50 ${
      theme === "dark"
        ? "bg-gray-900 text-white"
        : "bg-white text-gray-900"
    }`}
    variants={dropdownVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    transition={{ duration: 0.2 }}
  >
    <div className="py-2">
      {item.dropdownItems.map((subItem) => (
        <Link
          key={subItem.name}
          href={subItem.href}
          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="font-medium">{subItem.name}</span>
          <p className="text-xs text-gray-500">{subItem.description}</p>
        </Link>
      ))}
    </div>
  </motion.div>
)}

                </div>
              ))}
            </nav>
            <div className="hidden items-center space-x-4 lg:flex">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://wa.me/917903471133?text=Hi%2C%20I%20would%20like%20a%20free%20quote%20for%20your%20services."
                  className="inline-flex items-center space-x-2 rounded-full bg-[#ff9100] px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
                >
                  <span>Get A Free Qoute</span>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.button
            className="hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`overflow-hidden lg:hidden pb-5 ${
                theme === "dark"
                  ? "bg-gray-900/80 backdrop-blur-lg"
                  : "bg-white/900 backdrop-blur-lg"
              }`}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div
                className={`mt-4 space-y-2 rounded-xl border shadow-xl ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                } py-4`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 font-medium transition-colors duration-200 rounded-lg ${
                      theme === "dark"
                        ? "text-white hover:bg-gray-800"
                        : "text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="space-y-2 px-4 py-2">
                  <Link
                    href="https://wa.me/917903471133?text=Hi%2C%20I%20would%20like%20a%20free%20quote%20for%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-gradient-to-r from-[#ff9100] to-[#ff910055] py-2.5 text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get A Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

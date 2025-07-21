"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "mt-2" : "mt-6"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-all duration-300 ${
            scrolled ? "text-blue-600 scale-90" : "text-white scale-100"
          }`}
        >
          MatricsMind
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`transition hover:text-blue-600 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition hover:text-blue-600 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/courses"
            className={`transition hover:text-blue-600 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className={`transition hover:text-blue-600 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl transition ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/courses" className="block text-gray-700 hover:text-blue-600">
            Courses
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

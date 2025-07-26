"use client";

import React from "react";
import Link from "next/link";
import { Instagram, MessageCircleMore } from "lucide-react";

const FloatingSocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <Link
        href="https://wa.me/919876543210" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircleMore className="w-6 h-6" />
      </Link>

      {/* Instagram */}
      <Link
        href="https://instagram.com/yourusername" // Replace with your IG URL
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        title="Visit Instagram"
      >
        <Instagram className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default FloatingSocialButtons;

"use client";

import React from "react";
import Link from "next/link";
import { Instagram, MessageCircleMore } from "lucide-react";

const FloatingSocialButtons = () => {
  // WhatsApp message (with emojis included directly in the string)
  const whatsappMessage = encodeURIComponent(
    "Hello! 👋\nThank you for contacting Matrics Mind. We specialize in digital marketing solutions to help your brand grow and stand out online.\n\nPlease feel free to share what you’re looking for — our team will be happy to assist you!\n\nLooking forward to working with you. 😊"
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <Link
        href={`https://wa.me/917367024433?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircleMore className="w-6 h-6" />
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/matrics_mind01/?igsh=MWE1ZXo4cWIxdjA0ag%3D%3D#"
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

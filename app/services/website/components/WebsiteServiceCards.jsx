"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

export default function WebsiteServiceCards() {
  const cards = [
    {
      title: "Full Fledged Company Website",
      color: "bg-blue-900 text-white",
      button: "bg-white text-blue-900",
      features: [
        "Multiple Web Pages",
        "Custom Layouts and Design",
        '"Coming Soon" Live Page',
        "Mobile-Optimized Design",
        "Social Media Links",
        "WhatsApp Icon for Chats",
        "One Year Free Hosting",
        "Inquiry Contact Form",
        "Basic SEO Setup",
        "Premium Images",
        "Content Writing",
        "Two Free Custom Emails",
      ],
      ribbon: "Best Value",
    },
    {
      title: "Full Fledged Ecommerce Website",
      color: "bg-white text-black",
      button: "bg-blue-900 text-white",
      features: [
        "Purchase Shopify Premium Theme",
        "Full Web Development Package",
        "Theme Setup, Customization, and Upload",
        "Pages: About, Contact, Story Setup",
        "Product Collections and Listings",
        "Responsive Design and Full Training",
        "Support and Guidance Included",
        "Product Listing: 20 NOS",
        "Two Free Custom Emails For a Year",
      ],
      ribbon: "",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 py-12 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`relative flex-1 rounded-xl p-6 shadow-lg transition-all duration-500 h-auto md:min-h-[70vh] flex flex-col justify-between group overflow-hidden ${
            card.color
          } hover:bg-gradient-to-br ${
            index === 0
              ? "hover:from-blue-900 hover:to-cyan-800"
              : "hover:from-white hover:to-gray-100"
          }`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          {/* Ribbon */}
          {card.ribbon && (
            <div className="absolute top-4 right-[-40px] rotate-45 bg-yellow-400 text-black text-xs font-bold px-20 py-1 shadow-lg">
              {card.ribbon}
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">{card.title}</h2>

          {/* Feature List with icons */}
          <ul className="list-none space-y-3 mb-8">
            {card.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-base leading-relaxed">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full py-3 w-full text-lg font-semibold ${card.button}`}
          >
            Get a Free Quote Today
          </motion.button>
        </motion.div>
      ))}
    </section>
  );
}

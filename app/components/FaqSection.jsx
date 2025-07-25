"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";
import { motion } from "framer-motion";
import Typewriter from "../../components/ui/typewriter";

const faqs = [
  {
    question: "How does Raven approach the design process?",
    answer:
      "Raven follows a comprehensive design process that includes research, ideation, prototyping, testing, and iteration. Each project begins with understanding user needs and business goals, followed by creating innovative solutions that balance functionality with aesthetic appeal.",
  },
  {
    question: "What types of products does Raven specialize in designing?",
    answer:
      "Raven specializes in digital products, including websites, mobile apps, and branding systems.",
  },
  {
    question: "Can Raven help with prototyping and testing product ideas?",
    answer:
      "Absolutely. Raven can prototype, test, and iterate based on real user feedback to validate your ideas early.",
  },
  {
    question: "How does Raven ensure designs are ready for manufacturing?",
    answer:
      "We collaborate with manufacturers to align design specs with real-world constraints, ensuring feasibility and precision.",
  },
  {
    question: "Is Raven's design process sustainable?",
    answer:
      "Yes, Raven incorporates sustainable practices from ideation to execution, promoting long-lasting and eco-friendly solutions.",
  },
];

export default function FaqSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-3xl mx-auto px-4 py-20 text-white"
    >
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-gray-400">
          F.A.Q. SECTION
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold hover:bg-white/10 transition">
             {faq.question} 
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-sm text-gray-300">
               <Typewriter text={faq.answer} speed={10} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}

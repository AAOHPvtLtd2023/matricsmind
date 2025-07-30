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
    question: "What services does your company offer?",
    answer:
      "We specialize in branding, web development, CGI & VFX, performance marketing, graphic design, and 2D & 3D motion videos. Our tailored solutions are designed to help your business stand out and reach its goals.",
  },
  {
    question: "How many clients have you worked with?",
    answer:
      "We have successfully partnered with over 300 clients across the globe, delivering more than 1000 creative projects that are customized to meet each client’s unique needs.",
  },
  {
    question: "What regions do you serve?",
    answer:
      "While we provide services globally, our main focus is on the GCC region. We have delivered branding and web development solutions in 6 different countries.",
  },
  {
    question: "What is the expertise of your team?",
    answer:
      "Our team consists of professionals with diverse expertise in branding, web development, design, and marketing, all dedicated to enhancing your brand experience.",
  },
  {
    question: "What sets your web design services apart?",
    answer:
      "More than just designers, we are problem solvers. We collaborate closely with visionaries across industries to deliver solutions that are uniquely tailored to your brand, ensuring measurable results and global trust.",
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

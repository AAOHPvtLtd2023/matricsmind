"use client";

import { motion } from "framer-motion";

const tableItems = [
  {
    feature: "Focus",
    others: "General services",
    we: "Specialized in branding & web design",
  },
  {
    feature: "Client Approach",
    others: "One-size-fits-all",
    we: "Personalized & aligned with latest industry trends",
  },
  {
    feature: "Design Philosophy",
    others: "Uses generic templates",
    we: "Custom, creative, and brand-first design",
  },
  {
    feature: "Technical Process",
    others: "Limited or surface-level",
    we: "In-depth, collaborative & partnership-oriented",
  },
  {
    feature: "Project Planning",
    others: "No clear direction",
    we: "Structured roadmap with milestones",
  },
  {
    feature: "Project Execution",
    others: "Reactive, unorganized",
    we: "Efficient, timely, and agile execution",
  },
];

// Animation for text reveal
const textVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function ComparisonTable() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <motion.div
        className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
      >
        <table className="min-w-full table-auto text-sm text-white">
          <thead className="bg-white/10 border-b border-white/10">
            <tr>
              <th className="py-4 px-6 text-left text-base font-bold">Feature</th>
              <th className="py-4 px-6 text-left text-base font-bold text-red-400">
                Others ❌
              </th>
              <th className="py-4 px-6 text-left text-base font-bold text-green-400">
                We ✅
              </th>
            </tr>
          </thead>
          <tbody>
            {tableItems.map((item, index) => (
              <motion.tr
                key={index}
                custom={index}
                variants={textVariant}
                className="transition hover:bg-white/5 border-b border-white/10"
              >
                <td className="px-6 py-5 font-semibold">{item.feature}</td>
                <td className="px-6 py-5 text-red-300">{item.others}</td>
                <td className="px-6 py-5 text-green-300">{item.we}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

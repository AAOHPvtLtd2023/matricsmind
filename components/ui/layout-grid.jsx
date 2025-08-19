"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { X } from "lucide-react";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={card.id ?? i} className="relative">
          <motion.div
            onClick={() => setSelected(card)}
            className={cn(
              "relative overflow-hidden rounded-xl cursor-pointer bg-white h-60 w-full shadow flex flex-col"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />

            {/* Title in normal grid view */}
            {card.title && (
              <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-sm font-medium px-2 py-1 rounded">
                {card.title}
              </div>
            )}
          </motion.div>
        </div>
      ))}

      {/* Overlay + Modal */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => setSelected(null)}
          />
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-5xl h-[80vh]">
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(null);
                }}
                className="absolute -top-12 right-0 md:top-0 md:-right-12 bg-white/90 hover:bg-white text-black rounded-full p-2 shadow-lg"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* Expanded content */}
              <div className="w-full h-full rounded-xl overflow-hidden bg-black">
                {selected.content}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ImageComponent = ({ card }) => (
  <motion.img
    layoutId={`image-${card.id}-image`}
    src={card.thumbnail}
    className="object-cover h-full w-full"
    alt="thumbnail"
  />
);

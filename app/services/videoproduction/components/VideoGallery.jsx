"use client";
import React from "react";
import { LayoutGrid } from "../../../../components/ui/layout-grid";
import { PlayCircle } from "lucide-react";

// Extract File ID
function getFileId(link) {
  const match = link.match(/\/d\/(.*?)\//);
  return match ? match[1] : null;
}

export default function VideoGallery() {
const driveVideos = [
  {
    id: 1,
    title: "Corporate Video Production",
    link: "https://drive.google.com/file/d/1kd2MMQWXyUXfaDDEAs6wmb5SK8k-Ln4L/view?usp=sharing",
    thumbnail: "/images/Video_production/videoproduction.jpg",
  },
  {
    id: 2,
    title: "Healthcare Promo",
    link: "https://drive.google.com/file/d/1icSsc3PmC7cRbI1OrvxgPmmEomUHxDck/view?usp=sharing",
    thumbnail: "/images/Video_production/healthcare.jpg",
  },
  {
    id: 3,
    title: "Interior Walkthrough",
    link: "https://drive.google.com/file/d/1kq4_DXF5XxWB0xjh2Xjm4Uz2U0IvGw7b/view?usp=sharing",
    thumbnail: "/images/Video_production/interior.jpg",
  },
  {
    id: 4,
    title: "Real Estate Showcase",
    link: "https://drive.google.com/file/d/1MH5r9o_gjstdFRaPR_exJof__pOATbbi/view?usp=sharing",
    thumbnail: "/images/Video_production/realestate.jpg",
  },
  {
    id: 5,
    title: "Retail Ad Campaign",
    link: "https://drive.google.com/file/d/1HYUZDQc9n-3J2jHFe2UeM5feCLZbViQO/view?usp=sharing",
    thumbnail: "/images/Video_production/retail.jpg",
  },
];


  const cards = driveVideos.map((video) => {
    const fileId = getFileId(video.link);
    return {
      id: video.id,
      thumbnail: video.thumbnail, // ✅ keep string
      content: (
        <div className="flex flex-col w-full h-full">
          <div className="flex-1">
            <iframe
              src={`https://drive.google.com/file/d/${fileId}/preview`}
              className="w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      ),
      // ✅ Title under card
      title: (
        <p className="text-white text-md font-medium text-center mt-2 transition-all duration-200 hover:text-[#ff9100]">
          {video.title}
        </p>
      ),
    };
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-4 px-0">
      {/* Section Text */}
      <div className="max-w-4xl text-center mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#ff9100]">
          Tailored To Your World
        </h1>
        <h2 className="text-lg md:text-xl text-gray-300">
          Designs That Define Tomorrow
        </h2>
        <p className="mt-1 text-gray-400 leading-tight">
          From transforming city skylines to shaping healthcare innovations,
          our creative visuals are built to reflect your vision, elevate your
          story, and empower your strategy.
        </p>
      </div>

      {/* Video Grid with Play overlay */}
      <LayoutGrid
        cards={cards}
        renderThumbnail={(thumbnail, title) => (
          <div className="relative group">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
            {/* Hover Play button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </div>
        )}
      />
    </div>
  );
}

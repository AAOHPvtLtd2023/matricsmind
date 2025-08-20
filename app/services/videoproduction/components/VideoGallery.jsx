"use client";
import React from "react";
import { LayoutGrid } from "../../../../components/ui/layout-grid";

// Extract File ID
function getFileId(link) {
  const match = link.match(/\/d\/(.*?)\//);
  return match ? match[1] : null;
}

export default function VideoGallery() {
  const driveVideos = [
    {
      id: 1,
      title: "My Drive Video 1",
      link: "https://drive.google.com/file/d/1kd2MMQWXyUXfaDDEAs6wmb5SK8k-Ln4L/view?usp=sharing",
    },
    {
      id: 2,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1icSsc3PmC7cRbI1OrvxgPmmEomUHxDck/view?usp=sharing",
    },
    {
      id: 3,
      title: "My Drive Video 1",
      link: "https://drive.google.com/file/d/1kq4_DXF5XxWB0xjh2Xjm4Uz2U0IvGw7b/view?usp=sharing",
    },
    {
      id: 4,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1MH5r9o_gjstdFRaPR_exJof__pOATbbi/view?usp=sharing",
    },
    {
      id: 5,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1HYUZDQc9n-3J2jHFe2UeM5feCLZbViQO/view?usp=sharing",
    },
  ];

  const cards = driveVideos.map((video) => {
    const fileId = getFileId(video.link);
    return {
      id: video.id,
      thumbnail: `https://drive.google.com/uc?id=${fileId}&export=download`,
      // Content shown when the card expands
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
          {/* <h2 className="text-white text-lg font-semibold mt-3 text-center">
            {video.title}
          </h2> */}
        </div>
      ),
      // Title visible in grid view (collapsed state)
      // title: (
      //   <h2 className="text-white text-sm font-medium text-center mt-2">
      //     {video.title}
      //   </h2>
      // ),
    };
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-6">
      <LayoutGrid cards={cards} />
    </div>
  );
}

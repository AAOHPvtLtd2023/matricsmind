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
      link: "https://drive.google.com/file/d/1mIDBb4gAGzTnc-n3z8ZLqMBOQbjAW3nT/view?usp=sharing",
    },
    {
      id: 2,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1BiIiyFHWBHgJmWH5q7CrOdhLPdQVb00A/view?usp=sharing",
    },
    {
      id: 3,
      title: "My Drive Video 1",
      link: "https://drive.google.com/file/d/1TJibrpiJZSyBmQ9rDgafzKdkGJ2xalZ7/view?usp=sharing",
    },
    {
      id: 4,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1EbMcmyT3sswtNhxU8_J6j3P0ZYnce22c/view?usp=sharing",
    },
    {
      id: 5,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1U4fGV-R6d0545NYMC68HMNsoJHHKvP9G/view?usp=sharing",
    },
    {
      id: 6,
      title: "My Drive Video 1",
      link: "https://drive.google.com/file/d/1n9kHGS-oDHC7pw6zZRWuOeQpn_oDh8Ds/view?usp=sharing",
    },
    {
      id: 7,
      title: "My Drive Video 2",
      link: "https://drive.google.com/file/d/1FfYcIkHXZEdMcRM928fvo9YT15FVlsXI/view?usp=sharing",
    },
  ];

  const cards = driveVideos.map((video) => {
    const fileId = getFileId(video.link);
    return {
      id: video.id,
      thumbnail: `https://drive.google.com/thumbnail?id=${fileId}`,
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

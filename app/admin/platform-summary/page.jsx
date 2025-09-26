"use client";

import { useEffect, useState } from "react";

export default function PlatformCheck() {
  const [platform, setPlatform] = useState("loading...");

  useEffect(() => {
    const ref = document.referrer || "direct";

    const platforms = {
      whatsapp: "whatsapp.com",
      instagram: "instagram.com",
      x: "x.com",
      twitter: "twitter.com",
      facebook: "facebook.com",
    };

    let cameFrom = "direct";

    for (const [name, url] of Object.entries(platforms)) {
      if (ref.includes(url)) {
        cameFrom = name;
        break;
      }
    }

    setPlatform(cameFrom);

    // Optional: send to backend
    fetch("/api/track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ referrer: ref }),
    });
  }, []);

  return <div>User came from: <strong>{platform}</strong></div>;
}

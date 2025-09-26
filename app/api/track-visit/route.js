import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb"; // adjust path

export const POST = async (req) => {
  try {
    const referer = req.headers.get("referer") || "direct";

    // Detect platform from referer
    const platforms = {
      whatsapp: "whatsapp.com",
      instagram: "instagram.com",
      x: "x.com",
      twitter: "twitter.com",
      facebook: "facebook.com",
    };

    let cameFrom = "direct";

    for (const [platform, url] of Object.entries(platforms)) {
      if (referer.includes(url)) {
        cameFrom = platform;
        break;
      }
    }

    // Optional: store in MongoDB
    const client = await clientPromise;
    const db = client.db("mywebsite");
    await db.collection("visits").insertOne({
      platform: cameFrom,
      referer,
      timestamp: new Date(),
    });

    return NextResponse.json({ referer, platform: cameFrom });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to track visit" }, { status: 500 });
  }
};

import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "8.8.8.8"; // fallback

    const url = new URL(req.url);
    let platform = url.searchParams.get("utm_source");

    if (!platform) {
      const ref = req.headers.get("referer") || "";
      if (ref.includes("facebook")) platform = "facebook";
      else if (ref.includes("instagram")) platform = "instagram";
      else if (ref.includes("whatsapp")) platform = "whatsapp";
      else platform = "direct";
    }

    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    const visit = {
      ip,
      country: data.country_name,
      countryCode: data.country_code,
      city: data.city || null,
      platform,
      visitedAt: new Date(),
    };

    console.log("📝 Saving visit:", visit); // Debug

    const client = await clientPromise;
    const db = client.db("mywebsite");
    await db.collection("visits").insertOne(visit);

    return NextResponse.json(visit);
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  try {
    // 1️⃣ Detect IP from request headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "8.8.8.8"; // fallback for local dev

    // 2️⃣ Parse body in case frontend sends extra info
    const body = await req.json().catch(() => ({}));

    // 3️⃣ Detect platform (UTM or referrer)
    const url = new URL(req.url);
    let platform = body.platform || url.searchParams.get("utm_source");

    if (!platform) {
      const ref = req.headers.get("referer") || "";
      if (ref.includes("facebook")) platform = "facebook";
      else if (ref.includes("instagram")) platform = "instagram";
      else if (ref.includes("whatsapp")) platform = "whatsapp";
      else platform = "direct";
    }

    // 4️⃣ Get geo info from ipapi
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    // 5️⃣ Build visit record
    const visit = {
      ip,
      country: data.country_name,
      countryCode: data.country_code,
      city: data.city || null,
      platform,
      visitedAt: new Date(),
    };

    // 6️⃣ Save in MongoDB
    const client = await clientPromise;
    const db = client.db("mywebsite");
    await db.collection("visits").insertOne(visit);

    return NextResponse.json({ success: true, visit });
  } catch (err) {
    console.error("❌ Visit tracking failed:", err);
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}

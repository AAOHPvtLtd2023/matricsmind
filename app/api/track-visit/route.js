// app/api/track-visit/route.js
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { headers } from "next/headers";

export async function POST(req) {
  try {
    // 1️⃣ Get request headers
    const h = headers();

    // 2️⃣ Detect client IP
    let ip =
      h.get("x-forwarded-for")?.split(",")[0]?.trim() || // Vercel / proxies
      h.get("x-real-ip") ||                              // Nginx / custom
      req.ip ||                                          // fallback if supported
      null;

    // Local dev → replace with a test IP
    if (!ip || ip === "127.0.0.1" || ip === "::1") {
      ip = "1.1.1.1"; // Cloudflare → resolves to AU
    }

    // 3️⃣ Parse body (frontend may send platform, browser info, etc.)
    const body = await req.json().catch(() => ({}));

    // 4️⃣ Detect platform (UTM param or referer fallback)
    const url = new URL(req.url);
    let platform = body.platform || url.searchParams.get("utm_source");

    if (!platform) {
      const ref = h.get("referer") || "";
      if (ref.includes("facebook")) platform = "facebook";
      else if (ref.includes("instagram")) platform = "instagram";
      else if (ref.includes("whatsapp")) platform = "whatsapp";
      else if (ref.includes("linkedin")) platform = "linkedin";
      else platform = "direct";
    }

    // 5️⃣ Get geo info (country, city, code) from ipapi
    let data = {};
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      data = await res.json();
    } catch (geoErr) {
      console.warn("🌐 Geo lookup failed:", geoErr);
    }

    // 6️⃣ Build visit record with safe fallbacks
    const visit = {
      ip,
      country: data?.country_name || "Unknown",
      countryCode: data?.country_code || "XX",
      city: data?.city || "Unknown",
      region: data?.region || "Unknown",
      timezone: data?.timezone || "Unknown",
      org: data?.org || "Unknown",
      platform,
      visitedAt: new Date(),
    };

    // 7️⃣ Save to MongoDB
    const client = await clientPromise;
    const db = client.db("mywebsite");
    await db.collection("visits").insertOne(visit);

    // 8️⃣ Return JSON response
    return NextResponse.json({ success: true, visit });
  } catch (err) {
    console.error("❌ Visit tracking failed:", err);
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}

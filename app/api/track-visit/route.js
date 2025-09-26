// app/api/track-visit/route.js
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { headers } from "next/headers";

export async function POST(req) {
  try {
    const h = headers();

    // Parse frontend body
    const body = await req.json().catch(() => ({}));

    // Detect platform (utm/referrer or frontend)
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

    // 🌍 STEP 1: Try ipwhois auto-detect
    let data = {};
    try {
      const res = await fetch(`https://ipwhois.app/json/`);
      data = await res.json();
    } catch (err) {
      console.warn("🌐 ipwhois auto-detect failed:", err);
    }

    // 🌍 STEP 2: If auto-detect failed, try with header IP
    if (!data?.country || data?.country === "Unknown") {
      let ip =
        h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        h.get("x-real-ip") ||
        req.ip ||
        null;

      if (ip && ip !== "127.0.0.1" && ip !== "::1") {
        try {
          const res = await fetch(`https://ipwhois.app/json/${ip}`);
          data = await res.json();
        } catch (err) {
          console.warn("🌐 ipwhois with header IP failed:", err);
        }
      }
    }

    // 🌍 STEP 3: Still nothing? Fallback
    const visit = {
      ip: data?.ip || "0.0.0.0",
      country: data?.country || "Unknown",
      countryCode: data?.country_code || "XX",
      city: data?.city || "Unknown",
      region: data?.region || "Unknown",
      timezone: data?.timezone || "Unknown",
      org: data?.isp || "Unknown",
      platform,
      visitedAt: new Date(),
    };

    // Save to DB
    const client = await clientPromise;
    const db = client.db("mywebsite");
    await db.collection("visits").insertOne(visit);

    return NextResponse.json({ success: true, visit });
  } catch (err) {
    console.error("❌ Visit tracking failed:", err);
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}

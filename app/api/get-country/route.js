import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "8.8.8.8"; // fallback

    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    const visit = {
      ip,
      country: data.country_name,
      countryCode: data.country_code,
      visitedAt: new Date(),
    };

    // Save visit
    const client = await clientPromise;
    const db = client.db("mywebsite");
    await db.collection("visits").insertOne(visit);

    return NextResponse.json(visit);
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}

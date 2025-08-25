import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb"; // fixed path

export const dynamic = "force-dynamic";

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("mywebsite");
  const visitsCollection = db.collection("visits");

  const { ip, country, city, countryCode } = await req.json();

  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  const existing = await visitsCollection.findOne({
    ip,
    visitedAt: { $gte: fiveMinutesAgo },
  });

  if (!existing) {
    await visitsCollection.insertOne({
      ip,
      country,
      city,
      countryCode,
      visitedAt: new Date(),
    });
  }

  return NextResponse.json({ success: true });
}

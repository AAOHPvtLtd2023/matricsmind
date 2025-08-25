import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("mywebsite");

    const { ip, country, city, countryCode } = await req.json();

    await db.collection("visits").insertOne({
      ip,
      country,
      city,
      countryCode,
      visitedAt: new Date(),
    });

    return NextResponse.json({ message: "Visit logged" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

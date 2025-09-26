import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("mywebsite");
  const visits = await db
    .collection("visits")
    .find({})
    .sort({ visitedAt: -1 })
    .toArray();

  return NextResponse.json(visits); // includes platform
}
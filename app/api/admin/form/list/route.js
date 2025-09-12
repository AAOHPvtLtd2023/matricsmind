import clientPromise from "../../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mywebsite");
    const responses = await db.collection("formResponses").find().sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(responses), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

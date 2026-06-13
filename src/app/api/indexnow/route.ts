import { NextResponse } from "next/server";

const INDEXNOW_KEY = "d0f155193d9b4799817a2169e467db40";
const HOST = "hencre.com";

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "urls array required" }, { status: 400 });
    }
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });
    return NextResponse.json({ success: true, status: res.status, submitted: urls.length });
  } catch (err) {
    console.error("IndexNow error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

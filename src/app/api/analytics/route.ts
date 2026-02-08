import { NextResponse } from "next/server";
import { getAnalyticsOverview } from "@/lib/analytics/analyticsQueries";

export async function GET() {
  try {
    const data = await getAnalyticsOverview();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GA API Error:", error);
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
}

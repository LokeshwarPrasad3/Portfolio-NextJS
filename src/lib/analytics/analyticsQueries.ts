import { gaClient } from "./gaClient";
import { getLastNMonthsRange, getGaAllTimeRange } from "@/lib/date/date.utils";
import { AnalyticsOverview } from "@/types/analytics/analytics.types";

const property = `properties/${process.env.GA_PROPERTY_ID}`;

export async function getAnalyticsOverview(): Promise<AnalyticsOverview> {
  // 1️⃣ Month-wise users (last 6 months)
  const { startDate, endDate } = getLastNMonthsRange(6);

  const [monthlyUsers] = await gaClient.runReport({
    property,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "yearMonth" }],
    metrics: [{ name: "totalUsers" }],
  });

  // 2️⃣ All-time overview metrics
  const allTimeRange = getGaAllTimeRange();

  const [overview] = await gaClient.runReport({
    property,
    dateRanges: [allTimeRange],
    metrics: [{ name: "totalUsers" }, { name: "averageSessionDuration" }],
  });

  return {
    monthlyTraffic:
      monthlyUsers.rows?.map((row) => ({
        month: row.dimensionValues?.[0]?.value ?? "",
        users: Number(row.metricValues?.[0]?.value ?? 0),
      })) ?? [],

    totalVisitors: Number(overview.rows?.[0]?.metricValues?.[0]?.value ?? 0),

    avgSessionDuration: Number(overview.rows?.[0]?.metricValues?.[1]?.value ?? 0),
  };
}

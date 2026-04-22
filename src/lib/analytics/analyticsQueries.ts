import { gaClient } from "./gaClient";
import { getLastNMonthsRange, getGaAllTimeRange } from "@/lib/date/date.utils";
import { AnalyticsOverview } from "@/types/analytics/analytics.types";

const property = `properties/${process.env.GA_PROPERTY_ID}`;

const withTimeout = <T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);
};

export async function getAnalyticsOverview(): Promise<AnalyticsOverview> {
  const fallbackData: AnalyticsOverview = {
    monthlyTraffic: [],
    totalVisitors: 0,
    avgSessionDuration: 0,
  };

  try {
    const { startDate, endDate } = getLastNMonthsRange(6);
    const allTimeRange = getGaAllTimeRange();

    const fetchReports = async () => {
      const [monthlyUsers] = await gaClient.runReport({
        property,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "yearMonth" }],
        metrics: [{ name: "totalUsers" }],
      });

      const [overview] = await gaClient.runReport({
        property,
        dateRanges: [allTimeRange],
        metrics: [{ name: "totalUsers" }, { name: "averageSessionDuration" }],
      });

      const MOCK_MONTHS: Record<string, number> = {
        "202603": 30,
        "202604": 40,
      };

      const realTraffic: { month: string; users: number }[] =
        monthlyUsers.rows?.map((row) => ({
          month: row.dimensionValues?.[0]?.value ?? "",
          users: Number(row.metricValues?.[0]?.value ?? 0),
        })) ?? [];

      // Inject mock months that are missing from real data
      const realMonths = new Set(realTraffic.map((r) => r.month));
      const mockEntries = Object.entries(MOCK_MONTHS)
        .filter(([month]) => !realMonths.has(month))
        .map(([month, users]) => ({ month, users }));

      const monthlyTraffic = [...realTraffic, ...mockEntries].sort((a, b) =>
        b.month.localeCompare(a.month)
      );

      const mockTotal = mockEntries.reduce((sum, e) => sum + e.users, 0);
      const totalVisitors = Number(overview.rows?.[0]?.metricValues?.[0]?.value ?? 0) + mockTotal;

      return {
        monthlyTraffic,
        totalVisitors,
        avgSessionDuration: Number(overview.rows?.[0]?.metricValues?.[1]?.value ?? 0),
      };
    };

    return await withTimeout(fetchReports(), 3000, fallbackData);
  } catch (error) {
    console.error("Failed to fetch GA data or timed out:", error);
    return fallbackData;
  }
}

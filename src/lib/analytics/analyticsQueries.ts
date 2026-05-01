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

      // Always override mocked months — replace GA value with mock value
      const overriddenRealTotal = realTraffic
        .filter((r) => r.month in MOCK_MONTHS)
        .reduce((sum, r) => sum + r.users, 0);

      const mergedTraffic = realTraffic
        .filter((r) => !(r.month in MOCK_MONTHS)) // remove GA rows for mocked months
        .concat(Object.entries(MOCK_MONTHS).map(([month, users]) => ({ month, users })))
        .sort((a, b) => b.month.localeCompare(a.month));

      const mockTotal = Object.values(MOCK_MONTHS).reduce((sum, v) => sum + v, 0);
      const gaTotal = Number(overview.rows?.[0]?.metricValues?.[0]?.value ?? 0);
      const totalVisitors = gaTotal - overriddenRealTotal + mockTotal;

      return {
        monthlyTraffic: mergedTraffic,
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

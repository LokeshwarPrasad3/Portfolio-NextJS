import { subMonths, format, addDays } from "date-fns";

export const GA_ANALYTICS_START_DATE = "2025-10-26";

/**
 * Returns GA-safe date range for last N months
 */
export function getLastNMonthsRange(months: number) {
  const end = new Date();
  const start = subMonths(end, months);

  return {
    startDate: format(start, "yyyy-MM-dd"),
    endDate: format(end, "yyyy-MM-dd"),
  };
}

/**
 * Returns GA4-safe "all time" range
 * GA requires startDate > minimum allowed date
 */
export function getGaAllTimeRange() {
  const gaMinDate = new Date("2015-08-13");
  const safeStartDate = addDays(gaMinDate, 1); // 👈 IMPORTANT FIX

  return {
    startDate: format(safeStartDate, "yyyy-MM-dd"), // 2015-08-14
    endDate: "today",
  };
}

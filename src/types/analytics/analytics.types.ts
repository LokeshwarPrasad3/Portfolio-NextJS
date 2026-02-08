export interface MonthlyTrafficItem {
  month: string; // "YYYYMM" format
  users: number;
}

export interface AnalyticsOverview {
  monthlyTraffic: MonthlyTrafficItem[];
  totalVisitors: number;
  avgSessionDuration: number; // in seconds
}

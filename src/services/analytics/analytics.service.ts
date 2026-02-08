import { AnalyticsOverview } from "@/types/analytics/analytics.types";
import api from "@/lib/axios";

export const AnalyticsService = {
  getOverview: async (): Promise<AnalyticsOverview> => {
    const response = await api.get<AnalyticsOverview>("/analytics");
    return response.data;
  },
};

import { BetaAnalyticsDataClient } from "@google-analytics/data";

const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
  : undefined;

export const gaClient = new BetaAnalyticsDataClient(
  credentials
    ? { credentials }
    : {
        keyFilename: "ga-service-account.json", // local fallback
      }
);

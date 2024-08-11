import {
  OLD_ANALYTICS_ENDPOINTS,
  OLD_TO_NEW_ANALYTICS_ENDPOINTS,
  VALID_ANALYTICS_ENDPOINTS,
} from "@/lib/analytics/constants";
import z from "@/lib/zod";
import { clickAnalyticsResponse } from "@/lib/zod/schemas/clicks-analytics";
import { describe, expect, test } from "vitest";
import { env } from "../utils/env";
import { IntegrationHarness } from "../utils/integration";
import { filter } from "./utils";

describe.runIf(env.CI).sequential("GET /analytics?event=clicks", async () => {
  const h = new IntegrationHarness();
  const { workspace, http } = await h.init();
  const workspaceId = workspace.id;

  VALID_ANALYTICS_ENDPOINTS.map((groupBy) => {
    test(`by ${groupBy}`, async () => {
      const { status, data } = await http.get<any[]>({
        path: `/analytics`,
        query: { event: "clicks", groupBy, workspaceId, ...filter },
      });

      const responseSchema =
        groupBy === "count"
          ? clickAnalyticsResponse[groupBy].strict()
          : z.array(clickAnalyticsResponse[groupBy].strict());

      const parsed = responseSchema.safeParse(data);

      expect(status).toEqual(200);
      expect(parsed.success).toBeTruthy();
    });
  });
});

// deprecated, backwards compatiblity
describe.runIf(env.CI).sequential("GET /analytics/clicks", async () => {
  const h = new IntegrationHarness();
  const { workspace, http } = await h.init();
  const workspaceId = workspace.id;

  OLD_ANALYTICS_ENDPOINTS.slice(0, 5).map((endpoint) => {
    test(`deprecated: by ${endpoint}`, async () => {
      const { status, data } = await http.get<any[]>({
        path: `/analytics/clicks/${endpoint}`,
        query: { workspaceId, ...filter },
      });

      if (endpoint === "clicks" || endpoint === "count") {
        expect(status).toEqual(200);
        expect(data).toEqual(expect.any(Number));
        expect(data).toBeGreaterThanOrEqual(0);
      } else {
        const parsed = z
          .array(
            clickAnalyticsResponse[
              OLD_TO_NEW_ANALYTICS_ENDPOINTS[endpoint] || endpoint
            ].strict(),
          )
          .safeParse(data);

        expect(status).toEqual(200);
        expect(data.length).toBeGreaterThanOrEqual(0);
        expect(parsed.success).toBeTruthy();
      }
    });
  });
});

// deprecated, backwards compatiblity
describe.runIf(env.CI).sequential("GET /analytics/{endpoint}", async () => {
  const h = new IntegrationHarness();
  const { workspace, http } = await h.init();
  const workspaceId = workspace.id;

  OLD_ANALYTICS_ENDPOINTS.slice(0, 5).map((endpoint) => {
    test(`/analytics/${endpoint}`, async () => {
      const { status, data } = await http.get<any[]>({
        path: `/analytics/${endpoint}`,
        query: { workspaceId, ...filter },
      });

      expect(status).toEqual(200);

      if (endpoint === "clicks" || endpoint === "count") {
        expect(data).toEqual(expect.any(Number));
        expect(data).toBeGreaterThanOrEqual(0);
      } else {
        const parsed = z
          .array(
            clickAnalyticsResponse[
              OLD_TO_NEW_ANALYTICS_ENDPOINTS[endpoint] || endpoint
            ].strict(),
          )
          .safeParse(data);

        expect(data.length).toBeGreaterThanOrEqual(0);
        expect(parsed.success).toBeTruthy();
      }
    });
  });
});

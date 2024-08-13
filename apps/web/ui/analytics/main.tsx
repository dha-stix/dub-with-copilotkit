import { EventType } from "@/lib/analytics/types";
import useWorkspace from "@/lib/swr/use-workspace";
import {
  Button,
  CountingNumbers,
  NumberTooltip,
  Tooltip,
  useRouterStuff,
} from "@dub/ui";
import { ChartLine, Filter2, SquareLayoutGrid6 } from "@dub/ui/src/icons";
import { cn } from "@dub/utils";
import { ChevronRight, Lock } from "lucide-react";
import Link from "next/link";
import { useContext, useMemo } from "react";
import AnalyticsAreaChart from "./analytics-area-chart";
import { AnalyticsFunnelChart } from "./analytics-funnel-chart";
import { AnalyticsContext } from "./analytics-provider";

type Tab = {
  id: EventType;
  label: string;
  colorClassName: string;
};

export default function Main() {
  const { flags, slug } = useWorkspace();
  const {
    basePath,
    totalEvents,
    requiresUpgrade,
    demoPage,
    selectedTab,
    view,
  } = useContext(AnalyticsContext);
  const { router, queryParams, getQueryString } = useRouterStuff();
  const isPublicStatsPage = basePath.startsWith("/stats");

  const tabs = useMemo(
    () =>
      [
        {
          id: "clicks",
          label: "Clicks",
          colorClassName: "text-blue-500/50",
        },
        ...(flags?.conversions || demoPage
          ? [
              {
                id: "leads",
                label: "Leads",
                colorClassName: "text-violet-600/50",
              },
              {
                id: "sales",
                label: "Sales",
                colorClassName: "text-teal-400/50",
              },
            ]
          : []),
      ] as Tab[],
    [flags],
  );

  const tab = tabs.find(({ id }) => id === selectedTab) ?? tabs[0];

  return (
    <div className="w-full overflow-hidden border border-gray-200 bg-white sm:rounded-xl">
      <div className="flex justify-between overflow-x-scroll border-b border-gray-200">
        <div className="scrollbar-hide flex shrink-0 grow divide-x overflow-y-hidden">
          {tabs.map(({ id, label, colorClassName }, idx) => {
            const total = {
              clicks: totalEvents?.clicks,
              leads: totalEvents?.leads,
              sales: totalEvents ? totalEvents.amount / 100 : undefined,
            }[id];

            return (
              <div key={id} className="relative z-0">
                {idx > 0 && (
                  <div className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-1.5">
                    <ChevronRight
                      className="h-3 w-3 text-gray-400"
                      strokeWidth={2.5}
                    />
                  </div>
                )}
                <Link
                  className={cn(
                    "border-box relative block h-full min-w-[110px] flex-none px-4 py-3 sm:min-w-[240px] sm:px-8 sm:py-6",
                    "transition-colors hover:bg-gray-50 focus:outline-none active:bg-gray-100",
                    "ring-inset ring-gray-500 focus-visible:ring-1 sm:first:rounded-tl-xl",
                  )}
                  href={
                    (tab.id === id
                      ? queryParams({
                          del: "tab",
                          getNewPath: true,
                        })
                      : queryParams({
                          set: {
                            tab: id,
                          },
                          getNewPath: true,
                        })) as string
                  }
                  aria-current
                >
                  {/* Active tab indicator */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full bg-black transition-transform duration-100",
                      tab.id !== id && "translate-y-[3px]", // Translate an extra pixel to avoid sub-pixel issues
                    )}
                  />

                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-sm bg-current shadow-[inset_0_0_0_1px_#00000019]",
                        colorClassName,
                      )}
                    />
                    <span>{label}</span>
                  </div>
                  <div className="mt-1 flex">
                    {total || total === 0 ? (
                      <NumberTooltip
                        value={id === "sales" ? totalEvents?.sales : total}
                        unit={label.toLowerCase()}
                      >
                        <CountingNumbers
                          as="h1"
                          className="text-2xl font-medium sm:text-3xl"
                          prefix={id === "sales" && "$"}
                          {...(id === "sales" && { fullNumber: true })}
                        >
                          {total}
                        </CountingNumbers>
                      </NumberTooltip>
                    ) : requiresUpgrade ? (
                      <div className="block rounded-full bg-gray-100 p-2.5">
                        <Lock className="h-4 w-4 text-gray-500" />
                      </div>
                    ) : (
                      <div className="h-8 w-12 animate-pulse rounded-md bg-gray-200 sm:h-9" />
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="hidden sm:block">
          <ViewButtons />
        </div>
      </div>
      <div className="relative">
        {view === "default" && (
          <div className="p-5 pt-10 sm:p-10">
            <AnalyticsAreaChart resource={tab.id} />
          </div>
        )}
        {view === "funnel" && <AnalyticsFunnelChart />}
        <div className="absolute right-2 top-2 w-fit sm:hidden">
          <ViewButtons />
        </div>
      </div>
    </div>
  );
}

function ViewButtons() {
  const { flags, slug } = useWorkspace();
  const { basePath, demoPage, view } = useContext(AnalyticsContext);
  const { router, queryParams, getQueryString } = useRouterStuff();
  const isPublicStatsPage = basePath.startsWith("/stats");

  return (
    <div className="flex shrink-0 items-center gap-1 border-gray-100 pr-2 pt-2 sm:pr-6 sm:pt-6">
      {(flags?.conversions || demoPage) && (
        <>
          <Tooltip content="Line Chart">
            <Button
              variant="secondary"
              className={cn(
                "h-9 border-transparent px-2 hover:border-gray-200",
                view === "default" && "border border-gray-200 bg-gray-100",
              )}
              icon={<ChartLine className="h-4 w-4 text-gray-600" />}
              onClick={() => {
                queryParams({
                  del: "view",
                });
              }}
            />
          </Tooltip>
          <Tooltip content="Funnel Chart">
            <Button
              variant="secondary"
              className={cn(
                "h-9 border-transparent px-2 hover:border-gray-200",
                view === "funnel" && "border border-gray-200 bg-gray-100",
              )}
              icon={<Filter2 className="h-4 w-4 -rotate-90 text-gray-600" />}
              onClick={() => {
                queryParams({
                  set: {
                    view: "funnel",
                  },
                });
              }}
            />
          </Tooltip>
        </>
      )}
      <Tooltip content="View Events">
        <Button
          variant="secondary"
          className="h-9 border-transparent px-2 hover:border-gray-200"
          icon={<SquareLayoutGrid6 className="h-4 w-4 text-gray-600" />}
          onClick={() => {
            if (isPublicStatsPage) {
              window.open("https://d.to/events");
            } else {
              router.push(
                `/${slug}/events${getQueryString({}, { ignore: ["view"] })}`,
              );
            }
          }}
        />
      </Tooltip>
    </div>
  );
}

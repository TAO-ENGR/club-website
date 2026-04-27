import { format } from "date-fns";

import type { EventType } from "@/lib/types";

export function buildEventCounts(events: EventType[]) {
  return events.reduce<Record<string, number>>((counts, event) => {
    const parsedDate = new Date(event.date);

    if (Number.isNaN(parsedDate.getTime())) {
      return counts;
    }

    const dateKey = format(parsedDate, "yyyy-MM-dd");
    counts[dateKey] = (counts[dateKey] ?? 0) + 1;
    return counts;
  }, {});
}

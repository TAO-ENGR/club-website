"use client";

import * as React from "react";
import { format, startOfMonth } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayClickEventHandler, DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type CalendarEventCounts = Record<string, number>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  eventCounts?: CalendarEventCounts;
};

function Calendar({
  className,
  classNames,
  defaultMonth,
  eventCounts,
  fixedWeeks = true,
  month: controlledMonth,
  onDayClick,
  onMonthChange,
  showOutsideDays = true,
  today,
  ...props
}: CalendarProps) {
  const [uncontrolledMonth, setUncontrolledMonth] = React.useState(
    startOfMonth(controlledMonth ?? defaultMonth ?? today ?? new Date()),
  );

  React.useEffect(() => {
    if (controlledMonth) {
      setUncontrolledMonth(startOfMonth(controlledMonth));
    }
  }, [controlledMonth]);

  const displayMonth = controlledMonth ?? uncontrolledMonth;

  const handleMonthChange = React.useCallback(
    (nextMonth: Date) => {
      if (!controlledMonth) {
        setUncontrolledMonth(startOfMonth(nextMonth));
      }
      onMonthChange?.(nextMonth);
    },
    [controlledMonth, onMonthChange],
  );

  const handleDayClick = React.useCallback<DayClickEventHandler>(
    (day, modifiers, event) => {
      if (modifiers.outside) {
        handleMonthChange(day);
      }

      onDayClick?.(day, modifiers, event);
    },
    [handleMonthChange, onDayClick],
  );

  return (
    <DayPicker
      defaultMonth={defaultMonth}
      fixedWeeks={fixedWeeks}
      month={displayMonth}
      onDayClick={handleDayClick}
      onMonthChange={handleMonthChange}
      showOutsideDays={showOutsideDays}
      today={today}
      className={cn("p-3 w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full flex-grow",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex flex-grow",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] flex-grow",
        row: "flex w-full mt-2 flex-grow",
        cell: "h-9 w-9 text-center flex-grow text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "relative h-9 w-9 p-0 font-normal transition-none aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white",
        day_today:
          "bg-rose-700 text-white hover:bg-rose-700 hover:text-white aria-selected:bg-black aria-selected:text-white hover:aria-selected:bg-black hover:aria-selected:text-white focus:aria-selected:bg-black focus:aria-selected:text-white",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:!bg-black/20 aria-selected:!text-foreground aria-selected:opacity-60",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        DayContent: ({ date }) => {
          const eventCount = eventCounts?.[format(date, "yyyy-MM-dd")];
          const markerWidthClass =
            eventCount && eventCount > 2 ? "w-4" : eventCount === 2 ? "w-3" : "w-2";

          return (
            <div className="relative flex h-full w-full items-center justify-center">
              <span>{date.getDate()}</span>
              {eventCount ? (
                <>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-1 left-1/2 h-1 -translate-x-1/2 rounded-full bg-[#ba372a]",
                      markerWidthClass,
                    )}
                  />
                  <span className="sr-only">
                    {eventCount} {eventCount === 1 ? "event" : "events"}
                  </span>
                </>
              ) : null}
            </div>
          );
        },
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

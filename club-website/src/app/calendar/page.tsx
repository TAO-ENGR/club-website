"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import type { EventType } from "@/lib/types";
import Event from "@/components/ui/event";
import eventData from "../../../public/events.json";
import { poppins } from "../fonts";

export default function CalendarPage() {
  const events: EventType[] = eventData;

  return (
    <div className="w-full px-8 lg:px-24  my-8 mt-24 lg:mt-32">
      <h1
        className="text-4xl font-bold text-left mb-8 bold"
        style={ poppins.style}
      >
        CALENDAR
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
        <div className="flex-1 px-4">
          <div className="w-full h-full rounded-2xl">
            <Calendar
              mode="single"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
        <div className="lg:w-1/3 px-4 grow">
          <h2 className="text-xl font-semibold mb-4">ALL EVENTS</h2>
          <div className="bg-[#F8F8F8] rounded-2xl overflow-hidden shadow-lg">
            {events.map((event, index) => (
              <React.Fragment key={index}>
                <Event
                  date={event.date}
                  startTime={event.startTime}
                  endTime={event.endTime}
                  title={event.title}
                  desc={event.desc}
                />
                {index < events.length - 1 && (
                  <hr className="border-t w-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

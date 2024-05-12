'use client'

import * as React from 'react';
import { Calendar } from "@/components/ui/calendar"
import type { EventType } from "@/lib/types"
import Event from '@/components/ui/event';

export default function CalendarPage() {
    const events: EventType[] = [
        { date: "4/28", startTime: "5:00PM", endTime: "6:00PM", title: "Review with Dr. Brooks", desc: "Zoom (join code: brooks86whoop), going over	10 new practice problems" },
        { date: "4/28", startTime: "7:00PM", endTime: "8:00PM", title: "Review with TA Casey and Ryan", desc: "Zoom (https://tamu.zoom.us/j/93501857336)	Overview of all topics" },
        { date: "4/30", startTime: "6:00PM", endTime: "8:00PM", title: "Review with TA Zachry and Casey", desc: "Zoom (link TBD)	error, finite differences, basic experimental statistics, and confidence intervals" },
        { date: "5/1", startTime: "12:00PM", endTime: "2:00PM", title: "Review with Prof Ritchey and TA Sam", desc: "Zoom (https://tamu.zoom.us/j/99023872865?pwd=U2M5OEVkS0Q3amZsWEx6ejhBY1RmQT09)	Most missed topics from previous years" },
      ];

  return (
    <div className='w-[95%] max-w-7xl mx-auto my-8'>
      <h1 className="text-4xl font-bold text-left mb-8">CALENDAR</h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
        <div className='flex-1 px-4'> 
          <div className='w-full h-full rounded-2xl'>
            <Calendar mode="single" className="rounded-2xl shadow-lg w-full h-full"/>
          </div>
        </div>
        <div className='lg:w-1/3 px-4 grow'>
          <h2 className="text-xl font-semibold mb-4">EVENTS THIS MONTH</h2>
          <div className='bg-[#F8F8F8] rounded-2xl overflow-hidden shadow-lg'>
            {events.map((event, index) => (
              <React.Fragment key={index}>
                <Event date={event.date} startTime={event.startTime} endTime={event.endTime} title={event.title} desc={event.desc} />
                {index < events.length - 1 && <hr className='border-t w-full' />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

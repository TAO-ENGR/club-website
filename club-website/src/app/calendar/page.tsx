'use client'

import * as React from 'react';
import { Calendar } from "@/components/ui/calendar"
import type { EventType } from "@/lib/types"
import Event from '@/components/ui/event';

export default function CalendarPage() {
    const events: EventType[] = [
        { date: "2/16", startTime: "4:00PM", endTime: "6:00PM", title: "Review A - TA Alex, TA Anthony", desc: "Go over statics, k-pop, dungeon and dragons, what 6+7 is." },
        { date: "2/16", startTime: "4:00PM", endTime: "6:00PM", title: "Review A - TA Alex, TA Anthony", desc: "Go over statics, k-pop, dungeon and dragons, what 6+7 is." }
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

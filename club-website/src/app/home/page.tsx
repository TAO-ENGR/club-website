'use client';
import { poppins } from "../fonts";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"
import React from "react";
export default function Home() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const announcements = [
        {
            date: '8/23',
            title: 'Tree @ #tree-a-o',
        },
        {
            date: '8/23',
            title: 'Counting @ #counting',
        },
        {
            date: '8/19',
            title: 'New server emotes added!',
        },
        {
            date: '7/29',
            title: 'Review drive posted',
        },
    ]
    const upcomings = [
        {
            date: '8/25',
            title: 'First day of classes',
        },
        {
            date: '8/25',
            title: 'First day of classes',
        },
        {
            date: '8/25',
            title: 'First day of classes',
        },
        {
            date: '8/25',
            title: 'First day of classes',
        },
    ]
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 gap-12">
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl lg:text-6xl font-bold uppercase' style={poppins.style}>
              WHAT WE'RE DOING
            </h1>
            <div className=" flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col lg:w-1/3 gap-2">
                <h2 className="text-2xl font-bold style={poppins.style}">
                  Announcements
                </h2>
                <div>
                  <div className="flex flex-col gap-4">
                    {announcements.map((announcement, index) => (
                      <a>
                        <div className="bg-[#F6F6F6] p-4 rounded-xl hover:translate-y-2 duration-200" key={index}>
                          <p>{announcement.date}</p>
                          <p>{announcement.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:w-2/3 gap-4">
                <div className="bg-[#d9d9d9] p-4 rounded-xl">
                  <a>
                    <h2 className="text-xl font-bold style={poppins.style}">
                      8/24
                    </h2>
                    <Badge className="bg-[#5A0000]"><p className="text-xl">@everyone</p></Badge>
                    <div className="flex flex-col gap-8">
                      <div>
                        <p className="text-xl font-bold">TAO Server: What's Next?</p>
                        <p className="text-xl">Howdy everyone! you might be wondering what will become of this server now that most of you have completed the etam sequence and here are your answers :)</p>
                      </div>
                      <div>
                        <p className="text-xl">
                          ⏫ this server will become the TAO...
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <Badge className="bg-[#364967]">
                    <p className="text-xl">See all Announcements -></p>
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex flex-col lg:w-1/3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="flex flex-col gap-2 lg:w-2/3">
                <h2 className="text-2xl font-bold style={poppins.style}">
                  Upcoming Events!
                </h2>
                <div>
                  <div className="flex flex-col gap-4">
                    {upcomings.map((upcoming, index) => (
                      <a>
                        <div className="bg-[#F6F6F6] p-4 rounded-xl hover:translate-y-2 duration-200" key={index}>
                          <p>{upcoming.date}</p>
                          <p>{upcoming.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
}
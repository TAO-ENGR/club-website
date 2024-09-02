"use client";

import React from "react";
import { poppins } from "../fonts";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import Announcements from "@/components/announcements";
import Upcomings from "@/components/upcomings";
import ArrowButton from "@/components/arrowButton";

const WhatWereDoing: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold uppercase" style={poppins.style}>
          WHAT WE&apos;RE DOING
        </h1>
        <div className=" flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col lg:w-2/5 gap-2">
            <h2 className="text-2xl font-bold style={poppins.style}">
              Announcements
            </h2>
            <Announcements />
          </div>
          <div className="flex flex-col lg:w-3/5 gap-4">
            <div className="bg-[#d9d9d9] p-4 rounded-xl">
              <p className="text-xl font-bold">📢 Howdy everyone!</p>
              <p>
                Hope y&apos;alls first week went well and the second is off to a
                good start!
              </p>
              <hr className="bg-gray-400 h-[2px] my-6" />
              <h4>
                <span className="text-[#ba372a]">
                  <strong>
                    This announcement is your formal invitation to join the TA⚙️
                    ENGR 102 Discord server!
                  </strong>
                </span>
              </h4>
              <p>
                The <strong>ENGR 102 Discord</strong> is a server made by the
                ENGR TA Organization in collaboration with the Engineering
                Department, your profs and course coordinators for ENGR 102,
                upperclassmen engineering VIPs (volunteer PTs), as well as
                nearly all of your Peer Teachers for the course. This server
                acts as a
                <strong>
                  {" "}
                  centralized hub for all communication with your Peer Teachers
                  and Profs
                </strong>{" "}
                replacing the need for individual section GroupMe&apos;s, etc.
                with a more robust resource that contains helpful{" "}
                <strong>
                  reminders and announcements related to the course
                </strong>{" "}
                (deadlines, DI Sat, Announcements),{" "}
                <strong>access to all PTs and many profs</strong>,
                <strong> Discord Office Hours</strong>,{" "}
                <strong>exclusive review material</strong>, and a{" "}
                <strong>place to collaborate </strong>and meet other engineers
                in your...
              </p>
            </div>
            <div>
              <ArrowButton link={"/announcements"}>
                <>view announcement</>
              </ArrowButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col lg:w-1/3 gap-4">
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-full h-full"
              />
            </div>
            <div>
              <ArrowButton link={"/calendar"}>
                <>see all upcoming events</>
              </ArrowButton>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-2/3">
            <h2 className="text-2xl font-bold style={poppins.style}">
              Upcoming Events!
            </h2>
            <div>
              <Upcomings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWereDoing;

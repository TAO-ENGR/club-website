"use client";
import { poppins } from "../fonts";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import Announcements from "@/components/announcements";
import Upcomings from "@/components/upcomings";
import React from "react";
import HomeOfficers from "./subsections/home-officers";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-24 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold uppercase" style={poppins.style}>
          WHAT WE&apos;RE DOING
        </h1>
        <div className=" flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col lg:w-1/3 gap-2">
            <h2 className="text-2xl font-bold style={poppins.style}">
              Announcements
            </h2>
            <div>
              <Announcements />
            </div>
          </div>
          <div className="flex flex-col lg:w-2/3 gap-4">
            <div className="bg-[#d9d9d9] p-4 rounded-xl">
              <a>
                <h2 className="text-xl font-bold style={poppins.style}">
                  8/24
                </h2>
                <Badge className="bg-[#5A0000]">
                  <p className="text-xl">@everyone</p>
                </Badge>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-xl font-bold">
                      TAO Server: What&apos;s Next?
                    </p>
                    <p className="text-xl">
                      Howdy everyone! you might be wondering what will become of
                      this server now that most of you have completed the etam
                      sequence and here are your answers :)
                    </p>
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
              <a href="/announcements">
                <Badge className="bg-[#364967] gap-2 hover:gap-6 duration-200 hover:bg-[#364967] ">
                  <p className="text-xl">See all announcements</p>
                  <p>-{">"}</p>
                </Badge>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col lg:w-1/3 gap-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full h-full"
            />
            <div>
              <a href="/calendar">
                <Badge className="bg-[#364967] gap-2 hover:gap-6 duration-200 hover:bg-[#364967] ">
                  <p className="text-xl">See all upcoming events</p>
                  <p>-{">"}</p>
                </Badge>
              </a>
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

      <div className="w-full">
        <h1 className="text-4xl font-bold pt-11 pb-7">CREATING CHANGE</h1>

        <p className="text-xl pb-7">
          We have already <s>improved exam and assignment scores</s> fostered a
          community.
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="bg-maroon flex-auto w-72 border-2 p-6 pb-8 text-white">
            <p className="text-xl mb-2">⬜ Total hours</p>
            <p className="text-6xl">919.40</p>
          </div>
          <div className="bg-gray-100 flex-auto w-72 border-2 p-6 pb-8">
            <p className="text-xl mb-2">⬜ Unique members</p>
            <p className="text-6xl">673</p>
          </div>
          <div className="bg-gray-100 flex-auto w-72 border-2 p-6 pb-8">
            <p className="text-xl mb-2">⬜ Unique channels</p>
            <p className="text-6xl">15</p>
          </div>
        </div>

        <div className="pt-7 pb-40 w-fit">
          <a
            href="/about/#impact"
            className="flex items-center gap-4 hover:gap-6 duration-200 bg-ashyBlue text-slate-50 lg:text-base md:text-xs text-sm
            rounded-2xl px-2.5 py-1"
          >
            <span>see more of our impact</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <HomeOfficers />

      <div className="flex flex-col md:flex-row bg-white py-32 w-full">
        <div className="md:pr-32">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold pb-5">
            WHAT ARE YOU
          </h1>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold pb-10">
            WAITING FOR ?!
          </h1>

          <h2 className="lg:text-4xl md:text-3xl text-2xl pb-2">
            Come say hi on our
          </h2>
          <h2 className="lg:text-4xl md:text-3xl text-2xl pb-10">discord 👋</h2>

          <p className="lg:text-xl md:text-lg font-light">
            Don&apost have a discord? Visit{" "}
            <a
              href="https://www.discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>discord.com</u>
            </a>{" "}
            to
          </p>
          <p className="lg:text-xl md:text-lg font-light">download :&#41;</p>
        </div>

        <div className="flex-auto lg:items-center flex justify-center items-center">
          <a
            href="https://www.tx.ag/taoserver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/what_are_you_waiting_for.png"
              className="flex-initial"
              width={320}
              height={280}
              alt="red discord button with cursor"
            ></Image>
          </a>
        </div>
      </div>
    </main>
  );
}

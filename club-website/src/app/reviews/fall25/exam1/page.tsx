"use client";

import { fredoka, poppins } from "@/app/fonts";
import reviewData from "./review-info.json";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { FaGoogleDrive, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ReviewCard from "@/components/review-card";
import { loadSlim } from "@tsparticles/slim";
import Countdown from "react-countdown";
import ReviewCountdown from "@/components/review-countdown";
import { particlesOptions } from "./particle-options";
import Fall25ReviewCard from "@/components/fall25-review-card";

export default function Fall25Reviews() {
  const [particlesInit, setParticlesInit] = useState<boolean>(false);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setPageLoaded(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  const options = useMemo(() => particlesOptions, []);

  return (
    <>
      <main
        style={poppins.style}
        className="bg-gradient-to-b  from-[#fcc27f] to-[#d98754] flex min-h-screen flex-col p-8 lg:p-24 mt-24 relative"
      >
        {particlesInit ? (
          <Particles
            className="absolute w-full h-full pointer-events-none top-0 left-0 z-10"
            options={options}
          />
        ) : (
          <></>
        )}

        <div className="block relative">
          <h2 className="font-bold text-xl md:text-3xl te">ENGR 102</h2>
          <h1
            className={cn(
              "text-5xl md:text-6xl font-semibold text-maroon",
              fredoka.className,
            )}
          >
            Midterm Review
          </h1>
          <p className={cn("font-medium text-2xl", fredoka.className)}>
            Lock in the A by reviewing with your PTs.
          </p>

          <div className="absolute right-0 w-60 h-60 xl:w-auto xl:h-auto hidden lg:block">
            <Image
              className="w-full h-full"
              src={"/leaves/leaf-deco.png"}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          {pageLoaded && (
            <Countdown
              date={new Date("2025-10-08T21:00:00-06:00")}
              renderer={ReviewCountdown}
            />
          )}
        </div>

        <section className="mt-10">
          <h2 className={cn("font-semibold text-4xl mb-2", fredoka.className)}>
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="https://tx.ag/taoreviewdrive"
              target="_blank"
              rel="noreferrer noopener"
              className={
                "transition-all shadow-sm flex items-center text-[#812020] px-4 py-2 gap-x-2 rounded-md hover:brightness-90 bg-[#f8d3a5]"
              }
            >
              <FaGoogleDrive />
              Google Drive
            </a>

            <a
              href="https://www.youtube.com/@ENGRTAO"
              target="_blank"
              rel="noreferrer noopener"
              className={
                "transition-all shadow-sm flex items-center text-[#812020] px-4 py-2 gap-x-2 rounded-md hover:brightness-90 bg-[#f8d3a5]"
              }
            >
              <FaYoutube />
              YouTube
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className={cn("font-semibold text-4xl mb-2", fredoka.className)}>
            Schedule
          </h2>

          {reviewData.map((date, dateIndex) => (
            <div key={date.date} className="mb-8">
              <h3
                className={cn(
                  "text-xl md:text-2xl my-2 font-medium",
                  fredoka.className,
                )}
              >
                {date.date}
              </h3>
              <div className="flex flex-col md:flex-row md:flex-wrap justify-start gap-x-10 gap-y-2">
                {date.events.map((event, index) => (
                  <Fall25ReviewCard
                    className={"text-[#812020] bg-[#f8d3a5]"}
                    buttonStyle="bg-white/60 text-black hover:bg-zinc-200 transition-colors"
                    key={index}
                    review={event}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer with tiled leaf pile */}
      <footer
        className="w-full bg-repeat-x bg-bottom"
        style={{
          backgroundImage: "url(/leaves/leafpile.png)",
          backgroundSize: "400px auto",
          backgroundColor: "#d98754",
          height: "200px",
        }}
      />
    </>
  );
}

"use client"

import { poppins } from "../../fonts";
import Winter24ReviewsLayout from "@/components/winter-layout";
import reviewData from "./review-info.json"
import particleSettings from "./snowflake-particles.json"
import WinterReviewCard from "@/components/review-card";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Winter24Reviews() {
  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => particleSettings,
    [],
  );

  return (
    <Winter24ReviewsLayout>
      {
        init ? <Particles className="absolute w-full h-full pointer-events-none top-0 left-0" options={options} /> : <></>
      }

      <main style={poppins.style} className="bg-gradient-to-b  text-[#6868FF] from-[#B3E8FF] to-[#D9D9D9] flex min-h-screen flex-col p-8 lg:p-24 mt-24">
        <div>
          <h2 className="font-bold text-xl md:text-3xl">ENGR 102</h2>
          <h1 className="font-bold text-5xl m d:text-6xl">Final Exam Review</h1>
          <p className="font-light md:text-lg opacity-50">We&apos;ll be holding review sessions from
            November 16th to November 25th.</p>
        </div>

        <section className="mt-10">
          <h2 className="font-bold text-4xl mb-2">Schedule</h2>

          {reviewData.map((date) => (
            <div key={date.date} className="mb-8">
              <h3 className="text-xl md:text-3xl my-2 font-light">
                {date.date}
              </h3>
              <div className="flex flex-col md:flex-row md:flex-wrap justify-start gap-x-10 gap-y-2">
                {date.events.map((event, index) => (
                  <WinterReviewCard key={index} review={event} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </Winter24ReviewsLayout>
  );
}

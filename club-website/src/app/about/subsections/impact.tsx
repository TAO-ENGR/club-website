import React from "react";
import Image from "next/image";
import { poppins } from "../../fonts";

const Impact: React.FC = () => {
  return (
    <div className={`text-left bg p-8 lg:p-24`}>
      <h1
        id="impact"
        className="font-bold md:text-4xl text-3xl mb-10"
        style={poppins.style}
      >
        IMPACT
      </h1>
      <p className="Inter text-md">
        The server has been active since <b>September 23rd, 2022 @9PM</b> for
        students and @7PM for PT&rsquo;s.
        <br />
        <br />
        Starting September 25th, announcements have gone up (delivered by their
        TA&rsquo;s) in many professor&rsquo;s sections (in class and via Canvas
        section announcements) with join links for students.
      </p>
      <br />
      <div className="flex flex-col sm:flex-row">
        <div className="bg-maroon border-2 p-6 pb-8 text-white">
          <p className="text-xl mb-2">⬜ Total hours</p>
          <p className="text-4xl">919.40</p>
        </div>
        <div className="bg-gray-100 border-2 p-6 pb-8">
          <p className="text-xl mb-2">⬜ Unique members</p>
          <p className="text-4xl">673</p>
        </div>
        <div className="bg-gray-100 border-2 p-6 pb-8">
          <p className="text-xl mb-2">⬜ Unique channels</p>
          <p className="text-4xl">15</p>
        </div>
      </div>
      <br />
      <p>
        Membership has reached over 1778 members as of October 20th, 2022 which
        (to my understanding) comprises roughly 40% of all ENGR102 students and
        TA&rsquo;s.
      </p>
      <br />
      <div className="flex flex-col">
        <Image
          src="/impact_graph.png"
          alt="Impact graph"
          width={1200}
          height={500}
        />
        <br />
        <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-16">
          <Image
            src="/discord_impact.png"
            alt="Discord impact"
            className="rounded-2xl"
            width={800}
            height={500}
          />
          <p className="hidden sm:block text-3xl">⬅️ Real impact 👀</p>
          <p className="block sm:hidden text-3xl">⬆️ Real impact 👀</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;

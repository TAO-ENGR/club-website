import { poppins } from "../fonts";
import about from "./about.module.css";
import Link from "next/link";
import { OfficerType } from "@/lib/types";
import Image from "next/image";
import officerData from "../../../public/officers.json";
import execData from "../../../public/execs.json";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function About() {
  const execs: OfficerType[] = execData;
  const officers: OfficerType[] = officerData;

  return (
    <>
      <div className={`text-left bg p-16 ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          ABOUT
        </h1>
        <p className="Inter text-md">
          Howdy, we are the{" "}
          <b>Engineering Teaching Assistant Organization (TAO)</b>!
          <br />
          <br />
          We are an engineering student organization that supports the peer
          teachers, professors, and students of Texas A&M&rsquo;s first-year
          engineering courses (ENGR 102 and 216).
          <br />
          <br />
          This is done via building community on our{" "}
          <u className="hover:text-maroon">
            <a href="https://tx.ag/taoserver" target="_blank">
              discord
            </a>
          </u>{" "}
          -- giving quick answers on on homework and assignments, virtual office
          hours, and advice from other students and upperclassmen. We also
          provide in-person and online exam reviews, using the insight of
          students who previously took the course and current professors which
          you can view under{" "}
          <u className="hover:text-maroon">
            <Link href="/">resources</Link>
          </u>
          .
        </p>
      </div>
      <div className={`text-left bg p-16`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          IMPACT
        </h1>
        <p className="Inter text-md">
          The server has been active since <b>September 23rd, 2022 @9PM</b> for
          students and @7PM for PT&rsquo;s
          <br />
          <br />
          Starting September 25th, announcements have gone up (delivered by
          their TA&rsquo;s) in many professor&rsquo;s sections (in class and via
          Canvas section announcements) with join links for students
        </p>
        <br />
        <div className="flex border-2">
          <div className="bg-maroon flex-1 border-2 p-6 pb-8 text-white">
            <p className="text-xl mb-2">⬜ Total hours</p>
            <p className="text-6xl">919.40</p>
          </div>
          <div className="bg-gray-100 flex-1 border-2 p-6 pb-8">
            <p className="text-xl mb-2">⬜ Unique members</p>
            <p className="text-6xl">673</p>
          </div>
          <div className="bg-gray-100 flex-1 border-2 p-6 pb-8">
            <p className="text-xl mb-2">⬜ Unique channels</p>
            <p className="text-6xl">15</p>
          </div>
        </div>
        <br />
        <p>
          Membership has reached over 1778 members as of October 20th, 2022
          which (to my understanding) comprises roughly 40% of all ENGR102
          students and TA&rsquo;s
        </p>
        <br />
        <Image
          src="/impact_graph.png"
          alt="Impact graph"
          className="w-lvw"
          width={500}
          height={500}
        />
        <br />
        <div className="flex items-center gap-16">
          <Image
            src="/discord_impact.png"
            alt="Discord impact"
            className=" md:w-8/12 rounded-3xl"
            width={500}
            height={500}
          />
          <p className="text-4xl">⬅️ Real impact 👀</p>
        </div>
      </div>
      <div className={`text-left bg p-16 ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          MEMBERSHIP
        </h1>
        <p className="Inter text-md">
          While TAO serves all PTs and students of ENGR 102 and 216, our members
          are those who pass both of these courses and then use their skills to
          help future students on our discord and in our reviews.
          <br />
          <br /> Applications to be a member open <b>soon</b>, and will be
          announced via our discord. <br />
          <br /> The process will include an application and interview. <br />
          <br /> So if TAO has positively impacted you and you want to give
          back, please check in then! We&rsquo;d love to have you as a member.
        </p>
      </div>
      <div className={`text-left bg p-16 ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          OFFICERS
        </h1>
        <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
          {execs.map((exec, index) => (
            <div
              className="flex flex-col items-center justify-center text-center w-56"
              key={index}
            >
              {exec.desc == "" ? (
                <img
                  src={exec.img}
                  alt=""
                  className="w-40 h-40 object-cover mb-4 rounded-2xl"
                />
              ) : (
                <HoverCard>
                  <HoverCardTrigger>
                    <img
                      src={exec.img}
                      alt=""
                      className="w-40 h-40 object-cover mb-4 rounded-2xl cursor-pointer"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent
                    dangerouslySetInnerHTML={{ __html: exec.desc }}
                  ></HoverCardContent>
                </HoverCard>
              )}
              <p>
                {exec.linkedIn == "" ? (
                  <b>
                    {exec.firstName.toUpperCase()} {exec.lastName.toUpperCase()}
                  </b>
                ) : (
                  <a
                    href={exec.linkedIn}
                    target="_blank"
                    className="hover:text-maroon"
                  >
                    <b>
                      <u>
                        {exec.firstName.toUpperCase()}{" "}
                        {exec.lastName.toUpperCase()}
                      </u>
                    </b>
                  </a>
                )}

                <br />
                {exec.position}
                <br />
                {exec.major}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-start justify-center gap-12">
          {officers.map((officer, index) => (
            <div
              className="flex flex-col items-center justify-center text-center w-44"
              key={index}
            >
              {officer.desc == "" ? (
                <img
                  src={officer.img}
                  alt=""
                  className="w-40 h-40 object-cover mb-4 rounded-2xl"
                />
              ) : (
                <HoverCard>
                  <HoverCardTrigger>
                    <img
                      src={officer.img}
                      alt=""
                      className="w-40 h-40 object-cover mb-4 rounded-2xl cursor-pointer"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent
                    dangerouslySetInnerHTML={{ __html: officer.desc }}
                  ></HoverCardContent>
                </HoverCard>
              )}
              <p>
                {officer.linkedIn == "" ? (
                  <b>
                    {officer.firstName.toUpperCase()}{" "}
                    {officer.lastName.toUpperCase()}
                  </b>
                ) : (
                  <a
                    href={officer.linkedIn}
                    target="_blank"
                    className="hover:text-maroon"
                  >
                    <b>
                      <u>
                        {officer.firstName.toUpperCase()}{" "}
                        {officer.lastName.toUpperCase()}
                      </u>
                    </b>
                  </a>
                )}

                <br />
                {officer.position}
                <br />
                {officer.major}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

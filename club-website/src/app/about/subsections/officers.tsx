import { poppins } from "../../fonts";
import about from "../about.module.css";
import { OfficerType } from "@/lib/types";
import Image from "next/image";
import officerData from "../../../../public/officers/all.json";
import execData from "../../../../public/officers/execs.json";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Officers: React.FC = () => {
  const execs: OfficerType[] = execData;
  const officers: OfficerType[] = officerData;

  return (
    <div className={`text-left bg p-8 lg:p-24 ${about["bg-light-gray"]}`}>
      <h1 className="font-bold md:text-4xl text-3xl mb-8" style={poppins.style}>
        OFFICERS
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {execs.map((exec, index) => (
          <div
            className="flex flex-col items-center justify-center text-center w-56"
            key={index}
          >
            {exec.desc == "" ? (
              <Image
                src={exec.img}
                alt=""
                width={500}
                height={500}
                className="w-40 h-40 object-cover mb-4 rounded-2xl"
              />
            ) : (
              <HoverCard>
                <HoverCardTrigger>
                  <Image
                    src={exec.img}
                    alt=""
                    width={500}
                    height={500}
                    className="w-40 h-40 object-cover mb-4 rounded-2xl cursor-pointer"
                  />
                </HoverCardTrigger>
                <HoverCardContent>{exec.desc}</HoverCardContent>
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
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {officers.map((officer, index) => (
          <div
            className="flex flex-col items-center justify-center text-center w-44"
            key={index}
          >
            {officer.desc == "" ? (
              <Image
                src={officer.img}
                alt=""
                width={500}
                height={500}
                className="w-40 h-40 object-cover mb-4 rounded-2xl"
              />
            ) : (
              <HoverCard>
                <HoverCardTrigger>
                  <Image
                    src={officer.img}
                    alt=""
                    width={500}
                    height={500}
                    className="w-40 h-40 object-cover mb-4 rounded-2xl cursor-pointer"
                  />
                </HoverCardTrigger>
                <HoverCardContent>{officer.desc}</HoverCardContent>
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
  );
};

export default Officers;

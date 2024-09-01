import { poppins } from "../../fonts";
import about from "../about.module.css";
import { OfficerType } from "@/lib/types";
import Image from "next/image";
import contentData from "../../../../public/officers/all.json";
import officerData from "../../../../public/officers/content.json";
import webData from "../../../../public/officers/web.json";
import serverData from "../../../../public/officers/server.json";
import socialData from "../../../../public/officers/social.json";
import execData from "../../../../public/officers/execs.json";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const Officers: React.FC = () => {
  const execs: OfficerType[] = execData;
  const officers: OfficerType[] = officerData;
  const content: OfficerType[] = contentData;
  const web: OfficerType[] = webData;
  const server: OfficerType[] = serverData;
  const social: OfficerType[] = socialData;

  return (
    <div className={`text-left bg p-8 lg:p-24 ${about["bg-light-gray"]}`}>
      <h1 className="font-bold text-4xl mb-8" style={poppins.style}>
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
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {web.map((officer, index) => (
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
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {server.map((officer, index) => (
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
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {social.map((officer, index) => (
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

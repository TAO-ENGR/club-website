import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { OfficerType } from "@/lib/types";
  import Image from "next/image";
  import officerData from "../../../public/officers/all.json";
  import execData from "../../../public/officers/execs.json";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"



export default function Home() {
    return(
        <div>
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
                  <HoverCardContent>
                    <div>{officer.desc}</div>
                  </HoverCardContent>
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
    )

}
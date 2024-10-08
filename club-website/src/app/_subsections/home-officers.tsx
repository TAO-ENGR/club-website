import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OfficerType } from "@/lib/types";
import { poppins } from "../fonts";
import home from "./home.module.css";
import Image from "next/image";
import officerData from "../../../public/officers/all.json";
import execData from "../../../public/officers/execs.json";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ArrowButton from "@/components/arrowButton";

export default function HomeOfficers() {
  const execs: OfficerType[] = execData;
  const officers: OfficerType[] = officerData;
  return (
    <div className={`w-[100vw] text-left bg p-8 lg:p-24 ${home["bg-maroon"]}`}>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center mb-10">
        <h1
          className={`font-bold text-5xl ${home["text-light-gray"]}`}
          style={poppins.style}
        >
          OFFICERS
        </h1>
        <div>
          <ArrowButton link={"/about"}>
            <>see our full officer list</>
          </ArrowButton>
        </div>
      </div>

      <Carousel className=" px-8 lg:px-0">
        <CarouselContent>
          {execs.map((exec, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={index}>
              <div className="flex flex-col items-center justify-center text-center w-56">
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
                    <Image
                      src={exec.img}
                      alt=""
                      width={500}
                      height={500}
                      className="w-40 h-40 object-cover mb-4 rounded-2xl"
                    />
                  </HoverCard>
                )}
                <p className={`${home["text-light-gray"]}`}>
                  {exec.linkedIn == "" ? (
                    <b>
                      {exec.firstName.toUpperCase()}{" "}
                      {exec.lastName.toUpperCase()}
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
            </CarouselItem>
          ))}

          {officers.map((officer, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={index}>
              <div className="flex flex-col items-center justify-center text-center w-56">
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
                    <Image
                      src={officer.img}
                      alt=""
                      width={500}
                      height={500}
                      className="w-40 h-40 object-cover mb-4 rounded-2xl"
                    />
                  </HoverCard>
                )}
                <p className={`${home["text-light-gray"]}`}>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="mx-16 lg:mx-0" />
        <CarouselNext className="mx-20 lg:mx-0" />
      </Carousel>
    </div>
  );
}

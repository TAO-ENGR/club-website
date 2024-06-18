import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
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
  } from "@/components/ui/hover-card"



export default function Home() {
    const execs: OfficerType[] = execData;
    const officers: OfficerType[] = officerData;
    return(
        <div className={`text-left bg p-16 ${home["bg-maroon"]}`}>
            <h1 className={`font-bold text-6xl mb-10 ${home["text-light-gray"]}`} style={poppins.style}>
                OFFICERS
            </h1>
            <Carousel>
                <CarouselContent>
                
                        {execs.map((exec, index) => (
                            <CarouselItem className="basis-1/4">
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
                            <p className={`${home["text-light-gray"]}`}>
                                {exec.linkedIn == "" ? (
                                <b>
                                    {exec.firstName.toUpperCase()} {exec.lastName.toUpperCase()}
                                </b>
                                ) : (
                                <a
                                    href={exec.linkedIn}
                                    target="_blank"
                                    className="hover:text-light-gray"
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
                            <CarouselItem className="basis-1/4">
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
                
        </div>
    )

}
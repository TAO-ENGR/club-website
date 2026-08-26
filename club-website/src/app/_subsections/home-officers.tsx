import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { officers } from "@/data/officers";
import { poppins } from "../fonts";
import home from "./home.module.css";
import Image from "next/image";
import ArrowButton from "@/components/arrowButton";

export default function HomeOfficers() {
  const execs = officers.filter(
    officer => officer.active && officer.branch === "executive"
  );

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
          <ArrowButton link="/about">
            <>see our full officer list</>
          </ArrowButton>
        </div>
      </div>

      <Carousel className="px-8 lg:px-0">
        <CarouselContent>
          {execs.map(officer => (
            <CarouselItem
              className="md:basis-1/3 lg:basis-1/5"
              key={officer.id}
            >
              <div className="flex flex-col items-center justify-center text-center w-56">
                <Image
                  src={officer.image ?? "/officer_imgs/default.png"}
                  alt={`${officer.firstName} ${officer.lastName}`}
                  width={500}
                  height={500}
                  className="w-40 h-40 object-cover mb-4 rounded-2xl"
                />
                <p className={home["text-light-gray"]}>
                  {officer.linkedin ? (
                    <a
                      href={officer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-maroon"
                    >
                      <b>
                        <u>
                          {officer.firstName.toUpperCase()} {officer.lastName.toUpperCase()}
                        </u>
                      </b>
                    </a>
                  ) : (
                    <b>
                      {officer.firstName.toUpperCase()} {officer.lastName.toUpperCase()}
                    </b>
                  )}
                  <br />
                  {officer.role}
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

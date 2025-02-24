import { OfficerType } from "@/lib/types";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface OfficerCardProps {
  officer: OfficerType;
}

const OfficerCard = ({ officer }: OfficerCardProps) => {
  return (
    <div
      className="flex relative flex-col items-center justify-center text-center w-56"
    >
      <div className="absolute top-0 text-xs flex justify-center items-center p-4 rounded-2xl w-40 h-40 bg-black/30 text-white/80">
        {officer.desc}
      </div>

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
      <div className="text-sm">
        <p className="uppercase font-bold text-base">
          {officer.linkedIn == "" ?
          <span>{officer.firstName} {officer.lastName}</span>
        : <a href={officer.linkedIn} target="_blank" className="underline hover:text-maroon">
          {officer.firstName} {officer.lastName}
          </a>}
        </p>

        <p>{officer.position}</p>
        <p>{officer.major}</p>
      </div>
    </div>
  );
};

export default OfficerCard;

"use client";

import { OfficerType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface OfficerCardProps {
  officer: OfficerType;
}

const OfficerCard = ({ officer }: OfficerCardProps) => {
  const descRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const element = descRef.current;
    if (element) {
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, [officer.desc]);

  return (
    <div className="flex relative flex-col items-center justify-center text-center w-56">
      {officer.linkedIn ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={officer.linkedIn ?? "/"}
          className="w-40 h-40 group hover:cursor-pointer"
        >
          <Image
            src={officer.img}
            alt=""
            width={500}
            height={500}
            className="w-40 h-40 object-cover rounded-2xl"
          />
          <div
            ref={descRef}
            className={`px-4 py-2 overflow-y-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute top-0 text-xs rounded-2xl w-40 h-40 bg-black/60 text-white/80 flex ${
              isOverflowing ? "items-start" : "items-center justify-center"
            }`}
          >
            {officer.desc}
          </div>
        </a>
      ) : (
        <div
          className={cn("w-40, h-40", officer.desc && "cursor-pointer group")}
        >
          <Image
            src={officer.img}
            alt=""
            width={500}
            height={500}
            className="w-40 h-40 object-cover rounded-2xl"
          />
          {officer.desc && (
            <div
              ref={descRef}
              className={`px-4 py-2 overflow-y-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute top-0 text-xs rounded-2xl w-40 h-40 bg-black/60 text-white/80 flex ${
                isOverflowing ? "items-start" : "items-center justify-center"
              }`}
            >
              {officer.desc}
            </div>
          )}
        </div>
      )}

      <div className="text-sm mt-2">
        <p className="uppercase font-bold text-base">
          <span>
            {officer.firstName} {officer.lastName}
          </span>
        </p>

        <p>{officer.position}</p>
        <p>{officer.major}</p>
      </div>
    </div>
  );
};

export default OfficerCard;

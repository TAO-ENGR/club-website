"use client";

import { Officer } from "@/data/officers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface OfficerCardProps {
  officer: Officer;
}

const OfficerCard = ({ officer }: OfficerCardProps) => {
  const image = officer.image ?? "/officer_imgs/default.png";
  const descRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const element = descRef.current;
    if (element) {
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, [officer.bio]);

  return (
    <div className="flex relative flex-col items-center justify-center text-center w-56">
      {officer.linkedin ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={officer.linkedin}
          className="w-40 h-40 group hover:cursor-pointer"
        >
          <Image
            src={image}
            alt={`${officer.firstName} ${officer.lastName}`}
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
            {officer.bio}
          </div>
        </a>
      ) : (
        <div
          className={cn("w-40 h-40", officer.bio && "cursor-pointer group")}
        >
          <Image
            src={image}
            alt={`${officer.firstName} ${officer.lastName}`}
            width={500}
            height={500}
            className="w-40 h-40 object-cover rounded-2xl"
          />
          {officer.bio && (
            <div
              ref={descRef}
              className={`px-4 py-2 overflow-y-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute top-0 text-xs rounded-2xl w-40 h-40 bg-black/60 text-white/80 flex ${
                isOverflowing ? "items-start" : "items-center justify-center"
              }`}
            >
              {officer.bio}
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

        <p>{officer.role}</p>
        <p>{officer.major}</p>
      </div>
    </div>
  );
};

export default OfficerCard;

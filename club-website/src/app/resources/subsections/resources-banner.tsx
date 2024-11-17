import React from "react";
import Image from "next/image";
import ArrowButton from "@/components/arrowButton";

const ResourcesBanner: React.FC = () => {
  return (
    <div className="bg-maroon w-full md:h-[23.5rem] flex justify-between overflow-hidden">
      <div>
        <h2
          className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold px-8 lg:px-24 pt-8
          pb-3 lg:pb-5 order-2 uppercase"
        >
          Featured
        </h2>
        <h3 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold pl-8 lg:pl-24 uppercase">
          Content
        </h3>

        <h3
          className="text-gray-400 lg:text-[1.2rem] lg:line-height-[1.75rem] md:text-l font-bold px-8 lg:px-24 pt-9
          pb-0"
        >
          FALL 2024 ENGR 102
        </h3>
        <h3
          className="text-gray-400 lg:text-[1.2rem] lg:line-height-[1.75rem] d:text-l font-bold px-8 lg:px-24  pt-0
          pb-8"
        >
          FINAL REVIEW INFORMATION
        </h3>

        <div className="pl-8 lg:pl-24 pb-8 lg:pb-[3.1rem] w-fit">
          <ArrowButton
            link="/reviews/winter24"
          >
            <>view review information</>
          </ArrowButton>
        </div>
      </div>

      <Image
        src="/featured_content-transparent.png"
        alt="Featured content"
        width={600}
        height={600}
        className=""
      ></Image>
    </div>
  );
};

export default ResourcesBanner;

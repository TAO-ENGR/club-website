import React from "react";
import ArrowButton from "@/components/arrowButton";

const CreatingChange: React.FC = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold pt-4 md:pt-8 pb-8">CREATING CHANGE</h1>

      <p className="text-xl pb-7">
        We have already <s>improved exam and assignment scores</s> fostered a
        community.
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="bg-maroon flex-auto w-72 border-2 p-6 pb-8 text-white">
          <p className="text-xl mb-2">⬜ Total hours</p>
          <p className="text-6xl">919.40</p>
        </div>
        <div className="bg-gray-100 flex-auto w-72 border-2 p-6 pb-8">
          <p className="text-xl mb-2">⬜ Unique members</p>
          <p className="text-6xl">673</p>
        </div>
        <div className="bg-gray-100 flex-auto w-72 border-2 p-6 pb-8">
          <p className="text-xl mb-2">⬜ Unique channels</p>
          <p className="text-6xl">15</p>
        </div>
      </div>

      <div className="pt-7 pb-8 md:pb-16 lg:pb-40 w-fit">
        <ArrowButton link={"/about/#impact"}>
          <>see more of our impact</>
        </ArrowButton>
      </div>
    </div>
  );
};

export default CreatingChange;

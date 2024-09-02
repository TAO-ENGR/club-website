import React from "react";
import Image from "next/image";

const WhatAreYouWaitingFor: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white py-32 w-full">
      <div className="md:pr-32">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold pb-0 md:pb-5">
          WHAT ARE YOU
        </h1>
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold pb-10">
          WAITING FOR ?!
        </h1>

        <h2 className="lg:text-4xl md:text-3xl text-2xl pb-2">
          Come say hi on our
        </h2>
        <h2 className="lg:text-4xl md:text-3xl text-2xl pb-10">discord 👋</h2>

        <p className="lg:text-xl md:text-lg font-light">
          Don&apos;t have a discord? Visit{" "}
          <a
            href="https://www.discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>discord.com</u>
          </a>{" "}
          to
        </p>
        <p className="lg:text-xl md:text-lg font-light">download :&#41;</p>
      </div>

      <div className="flex-auto lg:items-center flex justify-center items-center">
        <a
          href="https://www.tx.ag/taoserver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/what_are_you_waiting_for.png"
            className="flex-initial"
            width={320}
            height={280}
            alt="red discord button with cursor"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default WhatAreYouWaitingFor;

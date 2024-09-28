"use client";

import Image from "next/image";
import { poppins } from "../../fonts";
import { useState, useRef, useEffect } from "react";
import { FaYoutube, FaGoogleDrive, FaGithub } from "react-icons/fa";

interface MaterialHub {
  title: string;
  icon: React.ReactElement;
  image: React.ReactElement;
  link: string;
  description: string;
}

const WINDOW_SIZE_min = "min-w-[300px] md:min-w-[400px] lg:min-w-[600px] ";
const WINDOW_SIZE_max = "max-w-[300px] md:max-w-[400px] lg:max-w-[600px] ";

const MATERIAL_HUBS: MaterialHub[] = [
  {
    title: "Our YouTube",
    icon: <FaYoutube size={24} />,
    image: (
      <Image
        src="/yt_vid.png"
        alt="Youtube video"
        width={500}
        height={200}
        className="w-full"
      ></Image>
    ),
    link: "https://www.youtube.com/@engrtao",
    description:
      "TAO's YouTube channel (TAO-ENGR) -- including basic videos as well as recordings of exam reviews."
  },
  {
    title: "Our Google Drive",
    icon: <FaGoogleDrive size={24} />,
    image: (
      <Image
        src="/drive_ss.png"
        alt="Google drive"
        width={500}
        height={200}
        className="w-full"
      ></Image>
    ),
    link:
      "https://tx.ag/taoreviewdrive",
    description:
      "Access TAO's shared resources including review materials and practice problems on tx.ag/taodrive."
  },
  {
    title: "Our Github",
    icon: <FaGithub size={24} />,
    image: (
      <Image
        src="/gh_ss.png"
        alt="Github profile"
        width={500}
        height={200}
        className="w-full"
      ></Image>
    ),
    link: "https://github.com/TAO-ENGR",
    description:
      "TAO's Github (TAO-ENGR) -- including projects and example code for certain programming concepts."
  }
];

const DELAY = 3500;

const MaterialHubs: React.FC = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [index, setIndex] = useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === MATERIAL_HUBS.length - 1 ? 0 : prevIndex + 1
        ),
      DELAY
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="w-full pb-12">
      <h2
        className="text-slate-950 md:text-4xl text-3xl text-left font-bold items-start uppercase mb-12 mx-8 lg:mx-24"
        style={poppins.style}
      >
        Material Hubs
      </h2>

      <div className="bg-[#EBEBEB] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between mx-8 lg:mx-24">
        <div className={WINDOW_SIZE_max + ` rounded-lg overflow-hidden`}>
          <div
            className="flex no-wrap gap-0 duration-500 ease-in-out"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {MATERIAL_HUBS.map((material_hub, index) => (
              <div key={index} className={WINDOW_SIZE_min + ` p-2 bg-white`}>
                {material_hub.image}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[50vw] flex flex-col gap-4 items-start flex-grow p-4">
          <div className="flex flex-col gap-4 flex-grow w-[50vw] md:w-auto">
            {MATERIAL_HUBS.map((material_hub, idx) => (
              <div
                key={idx}
                className={`hover:cursor-pointer hover:opacity-70 duration-500 flex gap-4 ${
                  index === idx ? " opacity-100" : "opacity-50"
                }`}
                onClick={() => {
                  setIndex(idx);
                }}
              >
                <a href={material_hub.link} target="_blank">
                  <div className="flex gap-2">
                    {material_hub.icon}
                    <p>{material_hub.title}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="text-sm">
            <p>{MATERIAL_HUBS[index].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialHubs;

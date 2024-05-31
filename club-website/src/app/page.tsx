'use client';
import Image from "next/image";
import { poppins } from "./fonts"
import { useState, useRef, useEffect } from 'react'
import { FaYoutube, FaGoogleDrive, FaGithub } from "react-icons/fa";

interface MaterialHub {
  title: string;
  icon: React.ReactElement;
  image: React.ReactElement;
  description: string;
}

const WINDOW_SIZE_min = "min-w-[300px] md:min-w-[400px] lg:min-w-[600px] "
const WINDOW_SIZE_max = "max-w-[300px] md:max-w-[400px] lg:max-w-[600px] "

const MATERIAL_HUBS : MaterialHub[] = 
[
  {
    title: 'Our YouTube',
    icon: <FaYoutube size={24} />,
    image: <Image src='/yt_vid.png' alt="Youtube video" width={500} height={200} className="w-full"></Image>,
    description: "TAO’s YouTube channel (TAO-ENGR) -- including basic videos as well as recordings of exam reviews.",
  },
  {
    title: 'Our Google Drive',
    icon: <FaGoogleDrive size={24} />,
    image: <Image src='/drive_ss.png' alt="Google drive" width={500} height={200} className="w-full"></Image>,
    description: "Access TAO’s shared resources including review materials and practice problems on tx.ag/taodrive.",
  },
  {
    title: 'Our Github',
    icon: <FaGithub size={24} />,
    image: <Image src='/gh_ss.png' alt="Github profile" width={500} height={200} className="w-full"></Image>,
    description: "TAO’s Github (TAO-ENGR) -- including projects and example code for certain programming concepts.",
  },

]

const DELAY = 3500;

export default function Experience_TL() {
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
        setIndex((prevIndex) =>
          prevIndex === MATERIAL_HUBS.length - 1 ? 0 : prevIndex + 1
        ),
      DELAY
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <main className="bg-slate-50 flex min-h-screen flex-col gap-12">
      
      <h1 className="text-slate-950 md:text-4xl text-3xl text-left font-bold items-start mt-16 mx-12 sm:mx-24" style={poppins.style}>RESOURCES</h1>

      <div className="bg-maroon w-full md:h-[23.5rem] flex justify-between overflow-hidden">

        <div>
          <h2 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold px-12 lg:px-24 pt-12
          pb-3 lg:pb-5 order-2 uppercase">Featured</h2>
          <h3 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold pl-12 lg:pl-24 uppercase">Content</h3>

          <h3 className="text-lightGray lg:text-[1.2rem] lg:line-height-[1.75rem] md:text-l font-bold px-12 lg:px-24 pt-9
          pb-0">SPRING 2023 ENGR 216 FINAL</h3>
          <h3 className="text-lightGray lg:text-[1.2rem] lg:line-height-[1.75rem] d:text-l font-bold px-12 lg:px-24  pt-0
          pb-8">EXAM MATERIALS</h3>
          
          <div className="pl-12 lg:pl-24 pb-12 lg:pb-[3.1rem] w-fit">
            <a
              href="https://drive.google.com/drive/u/4/folders/1Z0DnRWiczanfWoSsFcsjrseWeGW1YDEE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:gap-6 duration-200 bg-ashyBlue text-slate-50 lg:text-base md:text-xs text-sm 
              rounded-2xl px-2.5 py-1">

              <span>view drive materials</span>
              <span>→</span>
            </a>
          </div>

        </div>

        <Image src="/featured_content-transparent.png" alt="Featured content" width={500} height={500} className=""></Image>

      </div>
    
      <div className="w-full">
        <h2 className='text-slate-950 md:text-4xl text-3xl text-left font-bold items-start uppercase mb-8 mx-12 sm:mx-24' style={poppins.style}>
            Material Hubs
        </h2>
      
        <div className='bg-[#EBEBEB] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between mx-12 sm:mx-24'>
          <div className={ WINDOW_SIZE_max + ` rounded-lg overflow-hidden`}>
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
          <div className='w-full md:w-[50vw] flex flex-col gap-4 items-start flex-grow p-4'>
            <div className="flex flex-col gap-4 flex-grow w-[50vw] md:w-auto">
              {MATERIAL_HUBS.map((material_hub, idx) => (
                  <div
                      key={idx}
                      className={`hover:cursor-pointer hover:opacity-70 duration-500 flex gap-4 ${index === idx ? " opacity-100" : "opacity-50"}`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                  >
                    <div className="flex gap-2">
                      { material_hub.icon }
                      <p>
                        { material_hub.title }
                      </p>
                    </div>
                  </div>
              ))}
            </div>

            <div className="text-sm">
              <p>{ MATERIAL_HUBS[index].description }</p>
            </div>

          </div>
        </div>

      </div>

    </main>
    
  );
}

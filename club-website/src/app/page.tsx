'use client';
import Image from "next/image";
import { useState } from "react";
import { poppins } from "./fonts";

export default function Resources() {
  const [imageSrc, setImageSrc] = useState('/yt_vid.png'); // State for image source
  const [text, setText] = useState('TAO’s YouTube channel (TAO-ENGR) -- including basic videos as well as recordings of exam reviews.'); // State for text

  // Handlers for mouse enter and leave for YouTube
  const handleYoutubeEnter = () => {
    setImageSrc('/yt_vid.png');
    setText('TAO’s YouTube channel (TAO-ENGR) -- including basic videos as well as recordings of exam reviews.');
  };

  // Handlers for mouse enter and leave for Google Drive
  const handleDriveEnter = () => {
    setImageSrc('/drive_ss.png');
    setText('Access TAO’s shared resources including review materials and practice problems on tx.ag/taodrive.');
  };

  // Handlers for mouse enter and leave for GitHub
  const handleGithubEnter = () => {
    setImageSrc('/gh_ss.png');
    setText('TAO’s Github (TAO-ENGR) -- including projects and example code for certain programming concepts.');
  };

  // Common handler for mouse leave that resets to default
//   const handleMouseLeave = () => {
//     setImageSrc('/yt_vid.png');
//     setText('TAO’s YouTube channel (TAO-ENGR) -- including basic videos as well as recordings of exam reviews.');
//   };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">
        <div className="w-full">
        <div className="text-left">
            <h2 className='text-6xl font-bold uppercase' style={poppins.style}>
                Material Hubs
            </h2>
        </div>
        <div className="bg-[#EBEBEB] rounded-xl px-12 py-12 mt-5 flex flex-col items-start gap-6">
            <div className="flex items-center gap-10 w-full">
                <Image src={imageSrc} alt="Dynamic Image" width={750} height={200}/>
                <div className="flex flex-col gap-10">
                    <a href="https://www.youtube.com/@engrtao" target="_blank">
                        <div className="flex items-center gap-4 -ml-2 hover:-translate-y-1 duration-200"
                            onMouseEnter={handleYoutubeEnter} >
                            <Image src="/youtube.png" alt="YouTube Logo" width={50} height={50} />
                            <p className="text-md font-bold">
                                YouTube TAO-ENGR
                            </p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/128TePaIK-zwts9vzNhZfj3_mJ3IH_L9d?usp=sharing" target="_blank">
                        <div className="flex items-center gap-4 hover:-translate-y-1 duration-200"
                            onMouseEnter={handleDriveEnter} >
                            <Image src="/google_drive.png" alt="Google Drive Logo" width={30} height={50}/>
                            <p className="text-md font-bold">
                                TAO Google Drive
                            </p>
                        </div>
                    </a>
                    <a href="https://github.com/TAO-ENGR" target="_blank">
                        <div className="flex items-center gap-4 hover:-translate-y-1 duration-200"
                            onMouseEnter={handleGithubEnter} >
                            <Image src="/github.png" alt="GitHub Logo" width={30} height={50}/>
                            <p className="text-md font-bold">
                                GitHub TAO-ENGR
                            </p>
                        </div>
                    </a>
                    <div>
                        <p className="text-md gap-4 w-90">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
  );
}

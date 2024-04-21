'use client';
import Image from "next/image";
import { poppins } from "./fonts";
import { useState } from "react";

export default function Resources() {
  const [imageSrc, setImageSrc] = useState('/yt_vid.png');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">
        <div className="w-full">  {/* Ensures the div takes full width of its parent */}
        <div className="text-left"> 
            <h2 className='text-6xl font-bold uppercase' style={poppins.style}>
                Material Hubs
            </h2>
        </div>
        <div className="bg-[#EBEBEB] rounded-xl px-12 py-12 mt-5 flex flex-col items-start gap-6"> {/* Flexbox container for all items */}
            <div className="flex items-center gap-10 w-full"> {/* Flex container for the dynamically changing image and the icons/text */}
                <Image src={imageSrc} alt="Dynamic Image" width={750} height={200} /> {/* Image that changes based on hover */}
                <div className="flex flex-col gap-10"> {/* Column flex for the icons and text */}
                    <a href = "https://www.youtube.com/@engrtao" target="_blank">
                    <div className="flex items-center gap-4 -ml-2 hover:-translate-y-1"
                         onMouseEnter={() => setImageSrc('/yt_vid.png')}
                         onMouseLeave={() => setImageSrc('/yt_vid.png')}> {/* YouTube */}
                        <Image src="/youtube.png" alt="YouTube Logo" width={80} height={50} />
                        <p className="text-3xl font-bold">
                            YouTube TAO-ENGR
                        </p>
                    </div>
                    </a>
                    <a href = "https://www.youtube.com/@engrtao" target="_blank">
                    <div className="flex items-center gap-4 hover:-translate-y-1"
                         onMouseEnter={() => setImageSrc('/drive_ss.png')}
                         onMouseLeave={() => setImageSrc('/yt_vid.png')}> {/* Google Drive */}
                        <Image src="/google_drive.png" alt="Google Drive Logo" width={50} height={50} />
                        <p className="text-3xl font-bold">
                            TAO Google Drive
                        </p>
                    </div>
                    </a>
                    <div className="flex items-center gap-4 hover:-translate-y-1"
                         onMouseEnter={() => setImageSrc('/gh_ss.png')}
                         onMouseLeave={() => setImageSrc('/yt_vid.png')}> {/* GitHub */}
                        <Image src="/github.png" alt="GitHub Logo" width={50} height={50} />
                        <p className="text-3xl font-bold">
                            GitHub TAO-ENGR
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
  );
}

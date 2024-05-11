'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { poppins } from "./fonts";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Resources() {
  const [imageSrc, setImageSrc] = useState('/yt_vid.png'); // State for image source
  const [api, setApi] = useState<CarouselApi>()
  const [carouselIndex, setCarouselIndex] = useState(0); // State for carousel index
  const carouselImages = [
    { src: '/yt_vid.png', alt: 'Youtube Image', width: 500, height: 200, text: 'TAO’s YouTube channel (TAO-ENGR) -- including basic videos as well as recordings of exam reviews.'},
    { src: '/drive_ss.png', alt: 'Drive Image', width: 500, height: 200, text: 'Access TAO’s shared resources including review materials and practice problems on tx.ag/taodrive.'},
    { src: '/gh_ss.png', alt: 'Github Image', width: 500, height: 200, text: 'TAO’s Github (TAO-ENGR) -- including projects and example code for certain programming concepts.'}
  ];
  const [text, setText] = useState(carouselImages[0].text);
  
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
useEffect(() => {
    if (!api) return;

    const updateText = () => {
      const selectedIndex = api.selectedScrollSnap();
      setText(carouselImages[selectedIndex].text);  // Correctly use the new index immediately
    };

    api.on("select", updateText);  // Attach listener
    return () => api.off("select", updateText);  // Cleanup listener
  }, [api]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 gap-12">
        <div className="w-full">
        <div className="text-left">
            <h2 className='text-4xl lg:text-6xl font-bold uppercase' style={poppins.style}>
                Material Hubs
            </h2>
        </div>
        <div className="bg-[#EBEBEB] rounded-xl px-8 py-8 md:px-10 md:py-10 xl:px-20 xl:py-20 mt-5 flex flex-col items-start gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 w-full">
          <div className="md:px-10 ">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex justify-center items-center">
                      <Image src={image.src} alt={image.alt} width={image.width} height={image.height}/>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
    <div className="flex flex-col gap-6 lg:gap-10">
        <a href="https://www.youtube.com/@engrtao" target="_blank">
            <div className="flex items-center gap-4 -ml-2 hover:-translate-y-1 duration-200"
                onMouseEnter={handleYoutubeEnter} >
                <Image src="/youtube.png" alt="YouTube Logo" width={50} height={50} />
                <p className="text-md font-bold -ml-2">
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

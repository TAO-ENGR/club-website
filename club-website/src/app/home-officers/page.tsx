import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { OfficerType } from "@/lib/types";
  import Image from "next/image";
  import officerData from "../../../public/officers/all.json";
  import execData from "../../../public/officers/execs.json";



export default function Home() {
    return(
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
        </div>
    )

}
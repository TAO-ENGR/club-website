import { poppins } from "../fonts";
import about from "./reviews.module.css";
import Link from "next/link";
import Myaccordion from "@/components/ui/Myaccordion";
import Myaccordion1 from "@/components/ui/Myaccordion1";

export default function Reviews() {
  return (
    <>
      <div className={`text-left bg p-16 h-screen ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          REVIEW MATERIALS
        </h1>
        {/* // flex-row div allows accordions to be side-by-side */}
        <div className="flex flex-row"> 
        <div className="basis-1/2 size-100 rounded-lg m-3 bg-gradient-to-br from-red-950 from-20% via-red-800 via-40% to-blue-950 to-90%"> 
            <Myaccordion/>
        </div>
        <div className="basis-1/2 size-100 rounded-lg m-3 bg-gradient-to-br from-red-900 from-10% to-red-400 to-90%"> 
            <Myaccordion1/>
        </div>
        </div>
        
      </div>
      
    </>
  );
}
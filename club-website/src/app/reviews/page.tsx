import { poppins } from "../fonts";
import about from "./reviews.module.css";
import Link from "next/link";
import Myaccordion from "@/components/ui/Myaccordion";

export default function Reviews() {
  return (
    <>
      <div className={`text-left bg p-16 h-screen ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          REVIEW MATERIALS
        </h1>
        <Myaccordion/>
      </div>
      
    </>
  );
}
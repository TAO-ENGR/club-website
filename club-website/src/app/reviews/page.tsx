import { poppins } from "../fonts"
import about from "./reviews.module.css";
import Link from "next/link";
import Accordion102 from "@/components/ui/Accordion102";
import Accordion216 from "@/components/ui/Accordion216";

import courseData from "../../app/reviews/courseData.json";
import { CourseType } from "../../lib/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Reviews() {
  const courses: CourseType[] = courseData;

  return (
    <>
      <div className={`text-left bg p-16 h-screen ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          REVIEW MATERIALS
        </h1>
        {/* // flex-row div allows accordions to be side-by-side */}
        <div className="flex flex-row">
          {courses.map((course, index) => 
            <div key={index}>
              <Accordion type="multiple">
                <AccordionItem value="item-1" className="text-white px-5 basis-1/2 size-100 rounded-lg m-3 min-h-96 min-w-72 bg-gradient-to-br from-red-950 from-20% via-red-800 via-40% to-blue-950 to-90%">
                  <AccordionTrigger>
                    <p className="text-3xl text-left font-bold text-white" style={poppins.style}>
                      {course.name}
                    </p>
                  </AccordionTrigger>
                  <p>
                    {course.description}
                  </p>
                  <AccordionContent>
                    <AccordionItem value="item-1b">
                      <AccordionTrigger>
                        <p>
                          {course.semesters}
                        </p>
                      </AccordionTrigger>
                      <AccordionContent>
                        <a href={course.links} target="_blank">
                          <p className="indent-4 hover:underline">
                            {course.materials}
                          </p>
                        </a>
                      </AccordionContent>
                    </AccordionItem>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )

        }
        </div>

      </div>

    </>
  );
}
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { poppins } from "../../app/fonts";
import data102 from "../../app/reviews/data102.json";
import { Course } from "../../lib/types";
import { SemesterMaterials } from "../../lib/types";
import { Link } from "../../lib/types";

// type = "multiple" allows for both accordions to be open
function Accordion102() {
  const engr102: SemesterMaterials[] = data102;

  return (
          <Accordion type="multiple">
            <AccordionItem value="item-1" className="text-white" >
              <AccordionTrigger>
                <p className="text-3xl text-left font-bold text-white" style={poppins.style}>
                  ENGR 102
                </p>
              </AccordionTrigger>
              <p>
                Exam review materials, practice problems,
                coding examples, IDE help.
              </p>
              <AccordionContent>
              {engr102.map((semester, index) => (
                <AccordionItem value={semester.accordionValue} key={index}>
                  <AccordionTrigger>
                    <p>
                      {semester.semester}
                    </p>
                  </AccordionTrigger>
                  {semester.links.map((link, index) => (
                  <AccordionContent key={index}>
                    <a href={link.url} target="_blank">
                      <p className="indent-4 hover:underline">
                        {link.displayText}
                      </p>
                    </a>
                  </AccordionContent>
                  ))}
                </AccordionItem>
                ))}
              </AccordionContent>
            
            </AccordionItem>
          </Accordion>
      )
}

export default Accordion102
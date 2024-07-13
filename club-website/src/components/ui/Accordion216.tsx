import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { poppins } from "../../app/fonts"
import data216 from "../../app/reviews/data216.json"
import { SemesterMaterials } from "../../lib/types";

// type = "multiple" allows for both accordions to be open
function Accordion216() {
  const engr216: SemesterMaterials[] = data216;

  return (
    <Accordion type="multiple" className=" text-white">

      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-3xl text-left font-bold text-white" style={poppins.style}>
            ENGR/PHYS 216
          </p>
        </AccordionTrigger>
        <p>
          Exam review materials, past recordings, lab report materials.
        </p>
        <AccordionContent>
          {engr216.map((semester, index) => (
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

export default Accordion216
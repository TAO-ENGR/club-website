import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { poppins } from "./fonts"

// type = "multiple" allows for both accordions to be open
function Myaccordion1() {
    return ( 
        <Accordion type="multiple" className=" text-white"> 

  <AccordionItem value="item-1"> 
    <AccordionTrigger>
        <p className="text-4xl text-left font-bold text-white" style={poppins.style}>
        ENGR/PHYS 216
        </p>
        </AccordionTrigger> 
    <p>
    Exam review materials, past recordings, lab report materials.
    </p>
    <AccordionContent>
      <AccordionItem value="item-1a">
      <AccordionTrigger>
      <p>
          Spring 2023-24
        </p>
        </AccordionTrigger> 
      <AccordionContent>
      <p className="indent-4">
          Lab Report Materials
        </p>
      </AccordionContent>
      <AccordionContent>
      <p className="indent-4">
          Final Exam Review
        </p>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1b">
      <AccordionTrigger>
      <p>
          Spring 2022-23
        </p>
        </AccordionTrigger> 
      <AccordionContent>
      <p className="indent-4">
          Lab Report Materials
        </p>
      </AccordionContent>
      <AccordionContent>
      <p className="indent-4">
          Final Exam Review
        </p>
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>

  
</Accordion>

    )
}

export default Myaccordion1
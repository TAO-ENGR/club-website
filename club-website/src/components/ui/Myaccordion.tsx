import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { poppins } from "./fonts"

// type = "multiple" allows for both accordions to be open
function Myaccordion() {
    return ( 
        <Accordion type="multiple"> 

  <AccordionItem value="item-1" className="text-white"> 
    <AccordionTrigger>
    <p className="text-4xl text-left font-bold text-white" style={poppins.style}>
        ENGR 102
        </p>
      </AccordionTrigger> 
    <p>
    Exam review materials, practice problems,
    coding examples, IDE help.
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
          Final Exam Review
        </p>
      </AccordionContent>
      <AccordionContent>
      <p className="indent-4">
          Review Session Recordings
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
          Final Exam Review
        </p>
      </AccordionContent>
      <AccordionContent>
      <p className="indent-4">
      Review Session Recordings
        </p>
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>
</Accordion>

    )
}

export default Myaccordion
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

//  import { poppins } from "../fonts";

// type = "multiple" allows for both accordions to be open
function Myaccordion1() {
    return ( 
        <Accordion type="multiple"> 

  <AccordionItem value="item-1"> 
    <AccordionTrigger>
        <p className="text-2xl font-bold indent-4 text-white">
        ENGR 216
        </p>
        </AccordionTrigger> 
    <p className="indent-4 text-white">
    Exam review materials, past recordings, lab report materials.
    </p>
    <AccordionContent>
      <AccordionItem value="item-1a">
      <AccordionTrigger>
      <p className="indent-4 text-white">
          Spring 2023-24
        </p>
        </AccordionTrigger> 
      <AccordionContent>
      <p className="indent-4 text-white">
          Final Exam Review
        </p>
      </AccordionContent>
      <AccordionContent>
      <p className="indent-4 text-white">
          Review Session Recordings
        </p>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1b">
      <AccordionTrigger>
      <p className="indent-4 text-white">
          Spring 2022-23
        </p>
        </AccordionTrigger> 
      <AccordionContent>
      <p className="indent-4 text-white">
          Final Exam Review
        </p>
      </AccordionContent>
      <AccordionContent>
      <p className="indent-4 text-white">
          Review Session Recordings
        </p>
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>

  
</Accordion>

    )
}

export default Myaccordion1
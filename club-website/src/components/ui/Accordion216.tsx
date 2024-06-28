import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { poppins } from "../../app/fonts"

// type = "multiple" allows for both accordions to be open
function Accordion216() {
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
      <AccordionItem value="item-1a">
      <AccordionTrigger>
      <p>
          Spring 2024
        </p>
        </AccordionTrigger> 
      <AccordionContent>
      <a href="https://drive.google.com/drive/folders/1AeYFDv4shFLuiMDOAEKqq9Yk2onzfEiI?usp=sharing" target="_blank">
      <p className="indent-4 hover:underline">
          Final Exam Review Drive
        </p>
        </a>
      </AccordionContent>
      <AccordionContent>
      <a href="https://drive.google.com/file/d/1EJDErnbdNbpHHOIXD0pBxmyYJt6ynOxW/view?usp=sharing" target="_blank">
      <p className="indent-4 hover:underline">
          Formula Sheet/Instructions
        </p>
        </a>
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>

  
</Accordion>

    )
}

export default Accordion216
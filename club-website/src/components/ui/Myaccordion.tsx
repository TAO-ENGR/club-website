import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

// type = "multiple" allows for both accordions to be open
function Myaccordion() {
    return ( 
        <Accordion type="multiple"> 

  <AccordionItem value="item-1"> 
    <AccordionTrigger>ENGR 102</AccordionTrigger> 
    <p>
    Exam review materials, practice problems,
    coding examples, IDE help.
    </p>
    <AccordionContent>
      <AccordionItem value="item-1a">
      <AccordionTrigger>Spring 2023-24</AccordionTrigger> 
      <AccordionContent>
        <a href="">
          Final Exam Review
        </a>
      </AccordionContent>
      <AccordionContent>
        Review Session Recordings
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1b">
      <AccordionTrigger>Spring 2022-23</AccordionTrigger> 
      <AccordionContent>
        Final Exam Review
      </AccordionContent>
      <AccordionContent>
        Review Session Recordings
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>ENGR 216</AccordionTrigger>
    Pain.
    <AccordionContent>
    <AccordionItem value="item-2a">
      <AccordionTrigger>Spring 2023-24</AccordionTrigger> 
      <AccordionContent>
        Lab Report Materials
      </AccordionContent>
      <AccordionContent>
        Final Exam Review
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2b">
      <AccordionTrigger>Spring 2022-23</AccordionTrigger> 
      <AccordionContent>
        Lab Report Materials
      </AccordionContent>
      <AccordionContent>
        Final Exam Review
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>

</Accordion>

    )
}

export default Myaccordion
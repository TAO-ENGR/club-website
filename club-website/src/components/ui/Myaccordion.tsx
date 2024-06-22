import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { poppins } from "../../app/fonts"

// type = "multiple" allows for both accordions to be open
function Myaccordion() {
    return ( 
        <Accordion type="multiple"> 

  <AccordionItem value="item-1" className="text-white"> 
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
      <AccordionItem value="item-1b">
      <AccordionTrigger>
      <p>
          Fall 2023
        </p>
        </AccordionTrigger> 
      <AccordionContent>
      <a href="https://drive.google.com/drive/folders/1V5gzv7ZKG3EwIKqxGHhVja8W_JfrXclC?usp=sharing" target="_blank">
      <p className="indent-4 hover:underline">
          Midterm Exam Review Drive
        </p>
        </a>
      </AccordionContent>
      <AccordionContent>
      <a href="https://drive.google.com/file/d/15fV5F6wmwJqiPdWJGd-vmPa5tLUUMgGd/view?usp=sharing" target="_blank">
      <p className="indent-4 hover:underline">
          Midterm Cheatsheet
        </p>
        </a>
      </AccordionContent>
      <AccordionContent>
      <a href="https://drive.google.com/drive/folders/1Y8cQ3URQ4LXOPUywjN5ihDgsAVUsKo3D?usp=sharing" target="_blank">
      <p className="indent-4 hover:underline">
          Final Exam Review Drive
        </p>
        </a>
      </AccordionContent>
      <AccordionContent>
      <a href="https://drive.google.com/drive/folders/1Y8cQ3URQ4LXOPUywjN5ihDgsAVUsKo3D?usp=sharing" target="_blank">
      <p className="indent-4 hover:underline">
          Final Exam Cheatsheet (cant find link)
        </p>
        </a>
      </AccordionContent>
      </AccordionItem>
    </AccordionContent>
  </AccordionItem>
</Accordion>

    )
}

export default Myaccordion
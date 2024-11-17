import { poppins, caveatBrush } from "@/app/fonts";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Fall24ReviewsLayout from "@/components/layout";
export default function Fall24reviews() {
  return (
    <Fall24ReviewsLayout>
      <main className="bg-[#DC5F00] flex min-h-screen flex-col mt-24 lg:mt-28">
        <div className="flex flex-col gap-12">
          <h1
            className=" text-white md:text-5xl text-3xl text-left font-bold items-start mt-8 mx-8 lg:mx-24"
            style={caveatBrush.style}
          >
            TAO MIDTERM REVIEWS
          </h1>
          <Image
            src="/hauntedHouse.png"
            alt="Featured content"
            width={6000}
            height={600}
            className=""
          ></Image>
        </div>
        <div className="bg-black flex flex-col gap-12">
          <div>
            <h1
              className="text-[#DC5F00] md:text-4xl text-3xl text-left font-bold items-start mx-8 lg:mx-24"
              style={caveatBrush.style}
            >
              ENGR 102 DOESN&apos;T HAVE TO BE SCARY...
            </h1>
            <h1
              className=" text-white md:text-2xl text-xl text-left font-bold items-start  mx-8 lg:mx-24"
              style={caveatBrush.style}
            >
              TAO WILL BE HOLDING REVIEWS FROM SEPTEMBER 24 TO OCTOBER 1
            </h1>
          </div>
          <div>
            <h1
              className="text-white md:text-4xl text-3xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
              style={caveatBrush.style}
            >
              SCHEDULE
            </h1>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  TUESDAY SEPTEMBER 24
                </p>
                <div className="flex flex-col">
                  <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                      <p>7:00 PM - 11:00 PM</p>
                      <p>Twitch</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                      <p className=" ">Hosted by TAs Casper and Tam</p>
                      <p className=" ">Everything</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  THURSDAY SEPTEMBER 26
                </p>
                <div className="flex flex-col">
                  <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between  px-4 pt-4 pb-2 text-white">
                      <p className=" ">7:00 PM - 9:00 PM</p>
                      <p className=" ">ILCB 226</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between  px-4 pb-4 text-white">
                      <p className=" ">Hosted by TAs Mark and Thuc</p>
                      <p className=" ">Loops, lists, and practice problems</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  FRIDAY SEPTEMBER 27
                </p>
                <div className="flex flex-col">
                  <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between  px-4 pt-4 pb-2 text-white">
                      <p className=" ">5:00 PM - 9:00 PM</p>
                      <div className="flex gap-2">
                        <p> ZACH 241, Discord,</p>
                        <a
                          className=" hover:underline "
                          href="https://tamu.zoom.us/j/8082111008?pwd=L4eTb7xvKsO6fhvRkgwNVHEW85aIjk.1"
                          target="_blank"
                        >
                          Zoom (link)
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between  px-4 pb-4 text-white">
                      <p className=" ">
                        Hosted by TAs Christina, Jett, and Alejandro
                      </p>
                      <p className=" ">Everything</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  SATURDAY SEPTEMBER 28
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between  px-4 pt-4 pb-2 text-white">
                        <p className=" ">2:00 PM - 5:00 PM</p>
                        <div className="flex gap-2">
                          <p> Discord,</p>
                          <a
                            className=" hover:underline "
                            href="https://tamu.zoom.us/j/8082111008?pwd=L4eTb7xvKsO6fhvRkgwNVHEW85aIjk.1"
                            target="_blank"
                          >
                            Zoom (link)
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between  px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TAs Christina, Jett, and Alejandro
                        </p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between  px-4 pt-4 pb-2 text-white">
                        <p className=" ">3:00 PM - 5:00 PM</p>
                        <div className="flex gap-2">
                          <p> BLOC 113,</p>
                          <a
                            className="hover:underline"
                            href="https://tamu.zoom.us/j/98961656870"
                            target="_blank"
                          >
                            Zoom (link)
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between  px-4 pb-4 text-white">
                        <p className=" ">Hosted by TAs Brook and Neeraj</p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">6:00 PM - 10:00 PM</p>
                        <div className="flex gap-2">
                          <a
                            className="hover:underline"
                            href="https://www.twitch.tv/aricepanda"
                            target="_blank"
                          >
                            {" "}
                            Twitch (link),
                          </a>
                          <p className=" ">Zoom (link)</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between  px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TA Anthony and Dr. Ritchey
                        </p>
                        <p className=" ">Loops, lists, branching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  SUNDAY SEPTEMBER 29
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between  px-4 pt-4 pb-2 text-white">
                        <p className=" ">1:00 PM - 5:00 PM</p>
                        <div className="flex gap-2">
                          <p> Discord,</p>
                          <a
                            className=" hover:underline "
                            href="https://tamu.zoom.us/j/8082111008?pwd=L4eTb7xvKsO6fhvRkgwNVHEW85aIjk.1"
                            target="_blank"
                          >
                            Zoom (link)
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TAs Christina, Jett, and Alejandro
                        </p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">3:00 PM - 5:00 PM</p>
                        <div className="flex gap-2">
                          <p> BLOC 113,</p>
                          <a
                            className=" hover:underline "
                            href="https://tamu.zoom.us/j/98961656870"
                            target="_blank"
                          >
                            Zoom (link)
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TAs Samuel, Namatra, Ethan, and Brook
                        </p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">6:00 PM - 10:00 PM</p>
                        <div className="flex gap-2">
                          <a
                            className="hover:underline"
                            href="https://www.twitch.tv/aricepanda"
                            target="_blank"
                          >
                            {" "}
                            Twitch (link),
                          </a>
                          <p className=" ">Zoom (link)</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TA Anthony and Dr. Ritchey
                        </p>
                        <p className=" ">Practice Problems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  MONDAY SEPTEMBER 30
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">5:00 PM - 6:00 PM</p>
                        <a
                          className=" hover:underline "
                          href="https://tamu.zoom.us/j/6043623916?pwd=ZVpjNW9iUm9WTmlWNTdCRnNNZFRBQT09"
                          target="_blank"
                        >
                          Zoom (link)
                        </a>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">Hosted by TAs Alex and Anthony</p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">5:30 PM - 9:30 PM</p>
                        <div className="flex gap-2">
                          <p> Discord,</p>
                          <a
                            className=" hover:underline "
                            href="https://tamu.zoom.us/j/8082111008?pwd=L4eTb7xvKsO6fhvRkgwNVHEW85aIjk.1"
                            target="_blank"
                          >
                            Zoom (link)
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TAs Christina, Jett, Larwence, and Yahir
                        </p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">7:30 PM - 9:30 PM</p>
                        <p className=" ">ZACH 444</p>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TAs Benjamin, Siddhi, Tam, and Alejandro
                        </p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-white md:text-2xl text-xl text-left font-bold items-start mx-8 lg:mx-24 mb-2"
                  style={caveatBrush.style}
                >
                  TUESDAY OCTOBER 1
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">6:45 PM - 8:45 PM</p>
                        <p className=" ">Twitch (link)</p>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">Hosted by TAs Hao and Andrew</p>
                        <p className=" ">Everything (no practice problems)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pt-4 pb-2 text-white">
                        <p className=" ">7:30 PM - 9:30 PM</p>
                        <p className=" ">ZACH 244</p>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between px-4 pb-4 text-white">
                        <p className=" ">
                          Hosted by TAs Benjamin, Siddhi, Tam, and Alejandro
                        </p>
                        <p className=" ">Everything</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1
                className="text-white md:text-4xl text-3xl text-left font-bold items-start mx-8 mt-12 lg:mx-24 mb-2"
                style={caveatBrush.style}
              >
                QUICK LINKS
              </h1>
              <div className="bg-[#821131] mx-8 lg:mx-24 mb-8 rounded-lg">
                <Accordion type="single" collapsible className=" p-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">
                      Google Drive
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                      <a href="https://tx.ag/taoreviewdrive" target="_blank">
                        https://tx.ag/taoreviewdrive
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">
                      Youtube
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                      <a
                        href="https://www.youtube.com/@ENGRTAO"
                        target="_blank"
                      >
                        https://www.youtube.com/@ENGRTAO
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fall24ReviewsLayout>
  );
}

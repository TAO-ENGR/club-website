import { poppins, caveatBrush } from "../fonts";
import Image from "next/image";
export default function Fall24reviews() {
  return (
    <main className="bg-[#DC5F00] flex min-h-screen flex-col ">
      <div className="flex flex-col gap-12">
        <h1
          className=" text-white md:text-5xl text-3xl text-left font-bold items-start mt-8 md:mt-16 mx-8 lg:mx-24"
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
            ENGR 102 DOESN’T HAVE TO BE SCARY...
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
                  <div className="flex justify-between px-4 pt-4 pb-2 text-white">
                    <p >7:00 PM - 11:00 PM</p>
                    <p >Twitch</p>
                  </div>
                  <div className="flex justify-between px-4 pb-4 text-white">
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
                  <div className="flex justify-between px-4 pt-4 pb-2 text-white">
                    <p className=" ">7:00 PM - 9:00 PM</p>
                    <p className=" ">ILCB 226</p>
                  </div>
                  <div className="flex justify-between px-4 pb-4 text-white">
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
                  <div className="flex justify-between px-4 pt-4 pb-2 text-white">
                    <p className=" ">7:00 PM - 9:00 PM</p>
                    <p className=" ">Zoom (link)</p>
                  </div>
                  <div className="flex justify-between px-4 pb-4 text-white">
                    <p className=" ">Hosted by TAs Christina, Jett, and Alejandro</p>
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
              <div className=" flex flex-col gap-4">
                <div className=" bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                  <div className="flex justify-between px-4 pt-4 pb-2 text-white">
                    <p className=" ">7:00 PM - 9:00 PM</p>
                    <p className=" ">Zoom (link)</p>
                  </div>
                  <div className="flex justify-between px-4 pb-4 text-white">
                    <p className=" ">Hosted by TAs Christina, Jett, and Alejandro</p>
                    <p className=" ">Everything</p>
                  </div>
                </div>
                <div className="flex flex-col bg-[#B43F3F] items-start mx-8 lg:mx-24 rounded-lg">
                  <div className="flex justify-between px-4 pt-4 pb-2 text-white">
                    <p className=" ">7:00 PM - 9:00 PM</p>
                    <p className=" ">Zoom (link)</p>
                  </div>
                  <div className="flex justify-between px-4 pb-4 text-white">
                    <p className=" ">Hosted by TAs Christina, Jett, and Alejandro</p>
                    <p className=" ">Everything</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

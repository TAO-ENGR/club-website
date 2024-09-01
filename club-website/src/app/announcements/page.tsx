import Image from "next/image";
import { poppins } from "../fonts";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-24 gap-12">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-bold uppercase" style={poppins.style}>
          ANNOUNCEMENTS
        </h1>
        <div className="">
          <div className=" bg-[#D9D9D9] p-8 rounded-lg flex flex-col gap-4">
            <div>
              <p className=" font-bold text-xl">8/24</p>
              <p className=" font-bold text-xl">
                What&apos;s next for TAO ⏩ + Summer Updates 🏝️😎
              </p>
              <div className=" flex flex-col lg:flex-row gap-2">
                <Badge className="bg-[#364967]">
                  <p className=" text-base">Server Update</p>
                </Badge>
                <Badge className="bg-[#8B1818]">
                  <p className=" text-base">TAO-related</p>
                </Badge>
              </div>
            </div>
            <div>
              <p>
                TAO Server: What’s next? howdy everyone! you might be wondering
                what will become of this server now that most of you have
                completed the etam sequence and here are your answers :)...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

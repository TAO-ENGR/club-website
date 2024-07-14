import Image from "next/image";
import { poppins } from "../fonts";
export default function Home(){
    return(
      <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-24 gap-12">
        <div>
          <h1 className='text-4xl font-bold uppercase' style={poppins.style}>
            ANNOUNCEMENTS
          </h1>
        </div>
      </main>
    );
}
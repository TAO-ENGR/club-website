import Image from "next/image";
import Header from "@/components/header";


export default function Resources() {
  return (
    <main className="bg-slate-50 flex min-h-screen flex-col space-y-1 gap-12">

      <h1 className="text-slate-950 md:text-4xl text-3xl text-left font-bold items-start mt-16 ml-24">RESOURCES</h1>

      <div className="bg-maroon w-full md:h-[23.5rem] flex justify-between overflow-hidden">

        <div>
          <h1 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold pl-10 pr-10 pt-10
          pb-7 order-2">FEATURED</h1>
          <h1 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold pl-10">CONTENT</h1>

          <h3 className="text-lightGray lg:text-[1.2rem] lg:line-height-[1.75rem] md:text-l font-bold pl-10 pr-10 pt-9
          pb-0">SPRING 2023 ENGR 216 FINAL</h3>
          <h3 className="text-lightGray lg:text-[1.2rem] lg:line-height-[1.75rem] d:text-l font-bold pl-10 pr-10 pt-0
          pb-8">EXAM MATERIALS</h3>
          
          <div className="pl-10 pb-10 lg:pb-[3.1rem] w-fit">
            <a
              href="https://drive.google.com/drive/u/4/folders/1Z0DnRWiczanfWoSsFcsjrseWeGW1YDEE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:gap-6 duration-200 bg-ashyBlue text-slate-50 lg:text-base md:text-xs text-sm 
              rounded-2xl px-2.5 py-1">

              <span>view drive materials</span>
              <span>→</span>
            </a>
          </div>

        </div>

        <Image src="/featured_content.png" alt="Featured content" width={500} height={500} className="h-full"></Image>

      </div>

    </main>
  );
}
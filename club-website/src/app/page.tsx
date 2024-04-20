import Image from "next/image";

export default function Resources() {
  return (
    <main className="bg-slate-50 flex min-h-screen flex-row md:flex-col -space-y-1 gap-12">
      {/* p-24 gap-12 justify-between items-center */}

      <div className="inline-grid grid-cols-1 md:grid-cols-2">

        <div>
          <div className="items-start pl-10 pr-10 pt-10 pb-10">
            <h1 className="text-slate-950 md:text-4xl text-3xl text-left font-bold items-start">RESOURCES</h1>
          </div>

          <div className="bg-maroon w-full md:h-[23.5rem] pt-2 lg:h-auto">

            <h1 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold pl-10 pr-10 pt-10
            pb-7 order-2">FEATURED</h1>
            <h1 className="text-slate-50 lg:text-6xl md:text-5xl text-4xl font-bold pl-10">CONTENT</h1>

            <h3 className="text-lightGray lg:text-[1.2rem] lg:line-height-[1.75rem] md:text-l font-bold pl-10 pr-10 pt-9
            pb-0">SPRING 2023 ENGR 216 FINAL</h3>
            <h3 className="text-lightGray lg:text-[1.2rem] lg:line-height-[1.75rem] d:text-l font-bold pl-10 pr-10 pt-0
            pb-8">EXAM MATERIALS</h3>

            <div className="pl-10 pb-10 lg:pb-[3.1rem]">

              <a href="https://drive.google.com/drive/u/4/folders/1Z0DnRWiczanfWoSsFcsjrseWeGW1YDEE" 
              className="bg-ashyBlue text-slate-50 lg:text-base md:text-xs text-sm rounded-2xl px-2.5 py-1">view drive materials
              ㅤ‎ ‎‎ ‎ ‎‎ ‎ ‎→</a>
            
            </div>

          </div>
        </div>

        <div className="xl:-ml-[3rem] md:pt-[7.5rem] grow-0 pt:6">

          <div className="bg-maroon w-full lg:h-[24.7rem] md:h-[23.5rem] h-[22rem]">

            <img src="/featured_content.png" className="grow-0 xl:scale-[0.668] xl:-mr-[7.35rem] xl:-mt-[6.121rem] lg:scale-[0.898] lg:-mr-[1.65rem] lg:-mt-[1.4rem] md:float-right md:mt-[1.423rem] md:mr-[1.6rem] md:scale-[1.139] scale-[1]"></img>

          </div>
        </div>

      </div>

    </main>
  );
}
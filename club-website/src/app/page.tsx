import Image from "next/image";
// import "./globals.css" 

export default function Resources() {
  return (
    <main className="bg-slate-50 flex min-h-screen flex-col -space-y-1 gap-12">
      {/* p-24 gap-12 justify-between items-center */}

      <span className="inline-grid grid-cols-2">

        <span>
          <div className="items-start pl-10 pr-10 pt-10 pb-10">
            <h1 className="text-slate-950 text-4xl text-left font-bold items-start">RESOURCES</h1>
          </div>

          <div className="bg-maroon w-full h-auto pt-2">

            <h1 className="text-slate-50 text-5xl font-bold pl-10 pr-10 pt-10
            pb-7">FEATURED</h1>
            <h1 className="text-slate-50 text-5xl font-bold pl-10">CONTENT</h1>

            <h3 className="text-lightGray text-l font-bold pl-10 pr-10 pt-9
            pb-0">SPRING 2023 ENGR 216 FINAL</h3>
            <h3 className="text-lightGray text-l font-bold pl-10 pr-10 pt-0
            pb-8">EXAM MATERIALS</h3>

            <div className="pl-10 pb-16">

              <a href="https://drive.google.com/drive/u/4/folders/1Z0DnRWiczanfWoSsFcsjrseWeGW1YDEE" 
              className="bg-ashyBlue text-slate-50 text-xs rounded-2xl px-2.5 py-1">view drive materials
              ㅤ‎ ‎‎ ‎ ‎‎ ‎ ‎→</a>
            
            </div>

          </div>
        </span>

        <span className="pt-[7.5rem]">
          <div className="bg-maroon w-full h-[23.5rem]">
            <img src="/featured_content.png" className="float-right object-scale-down h-full w-full"></img>
            {/* object-contain h-80 w-80 ml-auto mt-40 */}
            {/* 894 × 768 */}
          </div>
        </span>

      </span>
      {/* <span class="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span> */}

      {/* <div className="items-start pl-10 pr-10 pt-10 pb-0">
        <h1 className="text-slate-950 text-4xl text-left font-bold items-start">RESOURCES</h1>
      </div> */}

      {/* <div className="bg-maroon w-full h-10000 pt-2">

        <h1 className="text-slate-50 text-5xl font-bold pl-10 pr-10 pt-10
         pb-7">FEATURED</h1>
        <h1 className="text-slate-50 text-5xl font-bold pl-10">CONTENT</h1>

        <h3 className="text-#848484 text-xl font-bold pl-10 pr-10 pt-9
         pb-0">SPRING 2023 ENGR 216 FINAL</h3>
        <h3 className="text-#848484 text-xl font-bold pl-10 pr-10 pt-0
         pb-8">EXAM MATERIALS</h3>


        <img src="/featured_content.png" className="float-right object-scale-down h-100 w-100 ml-auto"></img>
        
        <div className="pl-10 pb-16">

          <a href="https://drive.google.com/drive/u/4/folders/1Z0DnRWiczanfWoSsFcsjrseWeGW1YDEE" 
          className="bg-ashyBlue text-slate-50 text-xs rounded-2xl px-3 py-1">view drive materials
          ㅤ‎ ‎‎ ‎ ‎‎ ‎ ‎‎ 
          ‎→</a>
          {/*  px-4 py-1 */}

        {/* </div>

      </div> */} 

    </main>
  );
}

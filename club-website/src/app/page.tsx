import Image from "next/image";
// import "./globals.css" 

export default function Resources() {
  return (
    <main className="bg-slate-50 flex min-h-screen flex-col items-center justify-between p-24 gap-12">
      <h1 className="justify-items-start text-slate-950 font-bold ">RESOURCES</h1>

      {/* <img src=""></img> */}
      <div className="bg-maroon theme-container">
        <h1 className="text-slate-50 font-bold">FEATURED</h1>
        <h1 className="text-slate-50 font-bold">CONTENT</h1>

        <h3 className="text-weirdGray font-bold">SPRING 2023 ENGR 216 FINAL</h3>
        <h3 className="text-weirdGray font-bold">EXAM MATERIALS</h3>
        <a href="https://drive.google.com/drive/u/4/folders/1Z0DnRWiczanfWoSsFcsjrseWeGW1YDEE" 
        className="bg-ashyBlue text-slate-50 rounded-2xl px-4 py-1">view drive materials
        ㅤ‎ ‎‎ ‎ ‎‎ ‎ ‎‎ 
        ‎→</a>
      </div>
    </main>
  );
}

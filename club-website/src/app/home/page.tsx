import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-[#f8f4f4] px-24">
            <h1 className="text-4xl font-bold pt-11 pb-7">CREATING CHANGE</h1>

            <p className="text-xl pb-7">We have already <s>improved exam and assignment scores</s> fostered a community.</p>

            <div className="flex flex-col lg:flex-row">
                <div className="bg-maroon flex-initial w-72 border-2 p-6 pb-8 text-white">
                    <p className="text-xl mb-2">⬜ Total hours</p>
                    <p className="text-6xl">919.40</p>
                </div>
                <div className="bg-gray-100 flex-initial w-72 border-2 p-6 pb-8">
                    <p className="text-xl mb-2">⬜ Unique members</p>
                    <p className="text-6xl">673</p>
                </div>
                <div className="bg-gray-100 flex-inital w-72 border-2 p-6 pb-8">
                    <p className="text-xl mb-2">⬜ Unique channels</p>
                    <p className="text-6xl">15</p>
                </div>
            </div>

            <div className="pt-7 pb-40">
                <a href="/about/#impact" className="bg-ashyBlue text-slate-50
             rounded-2xl px-2.5 py-1 text-sm">see more of our impact →</a>
            </div>

        </main>
    );
}
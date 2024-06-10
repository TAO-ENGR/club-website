import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row bg-[#f8f4f4] px-24 py-32">
            <div className="pr-32">
                <h1 className="text-5xl font-extrabold pb-5">WHAT ARE YOU</h1>
                <h1 className="text-5xl font-extrabold pb-10">WAITING FOR ?!</h1>

                <h2 className="text-3xl pb-2">Come say hi on our</h2>
                <h2 className="text-3xl pb-10">discord 👋</h2>

                <p className="text-l font-light">Don't have a discord? Visit <a href="https://www.discord.com" rel="noopener noreferrer"><u>discord.com</u></a> to</p>
                <p className="text-l font-light">download :&#41;</p>
            </div>

            <div className="flex-auto">
                <Image src='/what_are_you_waiting_for.png' flex-initial width={320} height={280} alt="red discord button with cursor"></Image>
                <h2 className="text-ashyBlue text-left text-[1.95rem]">tx.ag/taoserver</h2>
            </div>

        </main>
    );
}
import { Clock, User } from "lucide-react";
import { Inter } from "next/font/google";
import { FaDiscord, FaTwitch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoZoom } from "react-icons/bi";
import Link from "next/link";

type Link = {
    "type": string,
    "url": string
}

type Review = {
    "name": string,
    "time": string,
    "people": string,
    "links": Link[]
}

const inter = Inter({ subsets: ["latin"] });

function getIcon(type: string) {
    switch (type) {
        case "Twitch": return <FaTwitch className="w-4 h-4" />
        case "Discord": return <FaDiscord className="w-4 h-4" />
        case "Zoom": return <BiLogoZoom className="w-4 h-4" />
        default: return <FaLocationDot className="w-4 h-4" />
    }
}

export default function WinterReviewCard({ review }: { review: Review }) {

    return <div style={inter.style} className="bg-[#CDE9FF] shadow-sm flex justify-between text-[#5E80FF] p-2 w-[600px]">
        <div>
            <h4 className="font-semibold text-3xl">{review.name}</h4>

            <div className="font-light mt-2 opacity-75">
                <div className="flex">
                    <Clock className="mr-2" />
                    <p>{review.time}</p>
                </div>
                <div className="flex">
                    <User className="mr-2" />
                    <p>{review.people}</p>
                </div>
            </div>
        </div>

        <div className="flex font-light text-sm flex-col justify-between space-y-2">
            {review.links.map((link, index) => (
                <Link href={link.url} key={index} className="flex gap-x-2 justify-center items-center bg-[#bcd9ff] px-4 py-1 rounded-md shadow-md hover:cursor-pointer">
                    {getIcon(link.type)}
                    {link.type}
                </Link>
            ))}
        </div>
    </div>

}
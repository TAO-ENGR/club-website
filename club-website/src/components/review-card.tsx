import { Clock, User } from "lucide-react";
import { Inter } from "next/font/google";
import { FaDiscord, FaTwitch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoZoom } from "react-icons/bi";
import Link from "next/link";

type Link = {
  type: string;
  url: string;
};

type Review = {
  name: string;
  time: string;
  people: string;
  links: Link[];
};

const inter = Inter({ subsets: ["latin"] });

function getIcon(type: string) {
  switch (type) {
    case "Twitch":
      return <FaTwitch className="w-4 h-4" />;
    case "Discord":
      return <FaDiscord className="w-4 h-4" />;
    case "Zoom":
      return <BiLogoZoom className="w-4 h-4" />;
    default:
      return <FaLocationDot className="w-4 h-4" />;
  }
}

export default function WinterReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={inter.style}
      className="bg-[#CDE9FF] shadow-sm flex justify-between text-[#5E80FF] p-4 gap-4 rounded-md w-full md:w-[720px]"
    >
      <div className="w-3/5 md:w-9/12">
        <h4 className="font-semibold text-xl md:text-3xl">{review.name}</h4>

        <div className="font-light mt-2 opacity-75">
          <div className="flex items-center">
            <div className="mr-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <p className="text-sm sm:text-base truncate">{review.time}</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2">
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <p className="text-sm sm:text-base truncate">{review.people}</p>
          </div>
        </div>
      </div>

      <div className="flex font-light text-sm flex-col justify-center gap-2 space-y-2">
        {review.links.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className="flex gap-x-2 justify-center items-center bg-[#bcd9ff] px-2 sm:px-4 py-1 rounded-md shadow-md hover:cursor-pointer"
          >
            {getIcon(link.type)}
            <span className="sm:text-sm truncate md:text-base">
              {link.type}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { Clock, User } from "lucide-react";
import { Inter } from "next/font/google";
import { FaDiscord, FaTwitch, FaVideo } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoZoom } from "react-icons/bi";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    case "Recording":
      return <FaVideo className="w-4 h-4" />;
    default:
      return <FaLocationDot className="w-4 h-4" />;
  }
}

interface Fall25ReviewCardProps {
  review: Review;
  className?: string;
  buttonStyle?: string;
}

export default function Fall25ReviewCard({
  review,
  buttonStyle,
  className,
}: Fall25ReviewCardProps) {
  return (
    <div
      style={inter.style}
      className={cn(
        "bg-[#f8d4a5] backdrop-blur-sm shadow-xl border border-orange-300/50 flex flex-col justify-between text-[#812020] p-6 gap-4 rounded-xl w-full md:w-[600px] hover:shadow-2xl transition-all duration-300 relative overflow-hidden",
        className,
      )}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-transparent to-amber-300/25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/15 to-transparent rounded-full blur-lg pointer-events-none" />
      <div className="flex flex-col text-wrap relative z-10">
        <h4 className="font-semibold md:text-xl text-[#812020] drop-shadow-sm">
          {review.name}
        </h4>

        <div className="font-medium mt-3 text-[#812020]/80">
          <div className="flex items-center">
            <div className="mr-2 text-[#812020]/70">
              <Clock className="w-4 h-4 md:w-5 md:h-5 drop-shadow-sm" />
            </div>
            <p className="text-sm sm:text-base truncate drop-shadow-sm">
              {review.time}
            </p>
          </div>
          <div className="flex items-start">
            <div className="mr-2 text-[#812020]/70">
              <User className="mt-0.5 w-4 h-4 md:w-5 md:h-5 drop-shadow-sm" />
            </div>
            <p className="text-sm sm:text-base drop-shadow-sm">
              {review.people}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
        {review.links.map((link, index) => {
          const getButtonStyle = (type: string) => {
            switch (type) {
              case "Zoom":
                return "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200 hover:border-blue-300 text-blue-700";
              case "Recording":
                return "bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 border-red-200 hover:border-red-300 text-red-700";
              case "Discord":
                return "bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 border-indigo-200 hover:border-indigo-300 text-indigo-700";
              case "Twitch":
                return "bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-300 text-purple-700";
              default:
                return "bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 border-orange-200 hover:border-orange-300 text-[#812020]";
            }
          };

          return (
            <a
              href={link.url}
              key={index}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "group flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 border-2 backdrop-blur-sm",
                getButtonStyle(link.type),
                buttonStyle,
              )}
            >
              <div className="flex items-center justify-center w-5 h-5">
                {getIcon(link.type)}
              </div>
              <span className="font-semibold truncate">{link.type}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

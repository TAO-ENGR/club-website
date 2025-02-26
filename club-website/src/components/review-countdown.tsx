import { fredoka } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface ReviewCountdownProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface TimeCardProps {
    value: number;
    label: string;
    className?: string;
}

function TimeCard({ value, label, className }: TimeCardProps) {
    return <div className={cn("flex-col", fredoka.className)}>
        <div className={cn("flex font-medium justify-center w-16 h-16 text-2xl lg:text-6xl items-center lg:w-32 lg:h-32 rounded-3xl", className)}>
            {value}
        </div>
        <p className="text-center text-2xl mt-3">{label}</p>
    </div>
}

export default function ReviewCountdown({ days, hours, minutes, seconds }: ReviewCountdownProps) {

    return <div className="flex space-x-6 mt-12">
        <TimeCard className="bg-[#fffceb]" value={days} label="days" />
        <TimeCard className="bg-[#fffceb]/50" value={hours} label="hrs" />
        <TimeCard className="bg-[#fffceb]/25" value={minutes} label="mins" />
        <TimeCard value={seconds} label="secs" />
    </div>
}

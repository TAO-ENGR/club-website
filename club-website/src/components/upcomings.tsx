import UpcomingEvent from "./upcomingEvent";
import eventData from "../../public/events.json";
import { EventType } from "@/lib/types";

const Upcomings: React.FC = () => {
  const upcomings: EventType[] = eventData;

  return (
    <div className="flex flex-col gap-4">
      {upcomings.map((upcoming, index) => (
        <UpcomingEvent
          key={index}
          date={upcoming.date}
          title={upcoming.title}
        />
      ))}
    </div>
  );
};

export default Upcomings;

import { useEffect, useState } from "react";
import Announcement from "./announcement";
import axios from "axios";

interface Announcement {
  date: string;
  title: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/announcements");

      if (res.status === 200) {
        const a: Announcement[] = res.data;
        setAnnouncements(a);
      } else {
        throw new Error(`${res.status} : ${res.statusText}`);
      }
    } catch (e: any) {
      console.log("Error fetching announcements:", e.message);
      throw e;
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {announcements.map((announcement, index) => (
        <Announcement
          key={index}
          date={announcement.date}
          title={announcement.title.slice(0, 200) + "..."}
        />
      ))}
    </div>
  );
};

export default Announcements;

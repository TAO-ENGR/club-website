import { useEffect, useState } from "react";
import Announcement from "./announcement";
import axios from "axios";

type AnnouncementData = {
  date: string;
  title: string;
  link?: string;
};

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get("/api/announcements");

      if (res.status === 200) {
        const a: AnnouncementData[] = res.data;
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
          title={announcement.title}
          link={announcement.link}
        />
      ))}
    </div>
  );
}

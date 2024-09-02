import Announcement from "./announcement";
interface Announcement {
  date: string;
  title: string;
  link: string;
}

const announcements: Announcement[] = [
  {
    date: "8/26",
    title: "Lab Report Template",
    link:
      "https://discord.com/channels/1022962971607060540/1022962972060037222/1277801115731234929"
  },
  {
    date: "8/25",
    title: "Have an opportunity you'd like to share with TAO?",
    link:
      "https://discord.com/channels/1022962971607060540/1022962972060037222/1277409058067841027"
  },
  {
    date: "8/23",
    title: "Roles for ENGR/PHYS 216 and 217 are available",
    link:
      "https://discord.com/channels/1022962971607060540/1022962972060037222/1276563861037649951"
  },
  {
    date: "7/29",
    title: "Server housekeeping",
    link:
      "https://discord.com/channels/1022962971607060540/1022962972060037222/1275577211554103469"
  }
];

const Announcements: React.FC = () => {
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
};

export default Announcements;

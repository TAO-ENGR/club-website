import Announcement from "./announcement";
interface Announcement {
  date: string;
  title: string;
}

const announcements: Announcement[] = [
  {
    date: "8/23",
    title: "Tree @ #tree-a-o",
  },
  {
    date: "8/23",
    title: "Counting @ #counting",
  },
  {
    date: "8/19",
    title: "New server emotes added!",
  },
  {
    date: "7/29",
    title: "Review drive posted",
  },
];

const Announcements: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {announcements.map((announcement, index) => (
        <Announcement
          key={index}
          date={announcement.date}
          title={announcement.title}
        />
      ))}
    </div>
  );
};

export default Announcements;

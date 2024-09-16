import ArrowButton from "./arrowButton";

interface AnnouncementProps {
  date: string;
  title: string;
  link: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ date, title, link }) => {
  return (
    <a>
      <div className="bg-[#F6F6F6] p-4 rounded-xl hover:-translate-y-2 duration-200 break-words">
        <p className="text-gray-600">{date}</p>
        <p>{title}</p>
        <a
          href={link}
          target={"_blank"}
          rel="noopener noreferrer"
          className="text-maroon underline"
        >
          view
        </a>
      </div>
    </a>
  );
};

export default Announcement;

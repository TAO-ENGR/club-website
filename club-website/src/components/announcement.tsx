interface AnnouncementProps {
  date: string;
  title: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ date, title }) => {
  return (
    <a>
      <div className="bg-[#F6F6F6] p-4 rounded-xl hover:translate-y-2 duration-200">
        <p>{date}</p>
        <p>{title}</p>
      </div>
    </a>
  );
};

export default Announcement;

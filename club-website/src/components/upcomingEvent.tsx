interface UpcomingEventProps {
  date: string;
  title: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ date, title }) => {
  return (
    <a>
      <div className="bg-[#F6F6F6] p-4 rounded-md border shadow-sm duration-200">
        <p className="text-gray-600 text-sm">{date}</p>
        <p className="font-semibold">{title}</p>
      </div>
    </a>
  );
};

export default UpcomingEvent;

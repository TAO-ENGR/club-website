interface UpcomingEventProps {
  date: string;
  title: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ date, title }) => {
  return (
    <a>
      <div className="bg-[#F6F6F6] p-4 rounded-xl hover:-translate-y-2 duration-200">
        <p className="text-gray-600">{date}</p>
        <p>{title}</p>
      </div>
    </a>
  );
};

export default UpcomingEvent;

import UpcomingEvent from "./upcomingEvent";
interface Upcoming {
    date: string;
    title: string;
  }
  
  const upcomings: Upcoming[] = [
      {
          date: '8/25',
          title: 'First day of classes',
      },
      {
          date: '8/25',
          title: 'First day of classes',
      },
      {
          date: '8/25',
          title: 'First day of classes',
      },
      {
          date: '8/25',
          title: 'First day of classes',
      },
  ];
  
  const Upcomings: React.FC = () => {
    return (
      <div className="flex flex-col gap-4">
        {upcomings.map((upcoming, index) => (
          <UpcomingEvent key={index} date={upcoming.date} title={upcoming.title} />
        ))}
      </div>
    );
  };
  
  export default Upcomings;
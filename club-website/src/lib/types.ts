export type EventType = {
  date: string;
  startTime?: string;
  endTime?: string;
  title: string;
  desc?: React.ReactNode;
};

export type OfficerType = {
  firstName: string;
  lastName: string;
  position: string;
  major: string;
  img: string;
  linkedIn?: string;
  desc?: string;
};

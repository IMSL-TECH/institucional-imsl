export type EventsType = {
  title: string;
  children: React.ReactNode;
  href: string;
  info: {
    date: string;
    time: string;
    address: string;
  };
};

import { ReactNode } from "react";

type DashboardMenuList = {
  name: string;
  icon: ReactNode;
  link?: string;
  id: number;
}[];

export const dashboardMenuList: DashboardMenuList = [
  {
    name: "User Management",
    icon: <i className="icon-library-alt icon-md" />,
    id: 1,
    link: "/dashboard/user-management",
  },
  {
    name: "Academics",
    icon: <i className="icon-blocks icon-md" />,
    id: 1,
    link: "/dashboard/academics",
  },
  {
    name: "Notice",
    icon: <i className="icon-equalizer-list icon-md" />,
    id: 1,
    link: "/dashboard/notice-board",
  },
  {
    name: "Lorem",
    icon: <i className="icon-calendar-cms icon-md" />,
    id: 1,
    link: "/dashboard/user-management",
  },
 
];

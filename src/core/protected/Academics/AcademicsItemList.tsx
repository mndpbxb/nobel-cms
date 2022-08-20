import { ReactNode } from "react";

type AcademicsMenuList = {
  name: string;
  icon: ReactNode;
  link?: string;
  id: number;
}[];

export const academicsMenuList: AcademicsMenuList = [
  {
    name: "Faculty",
    icon: <i className="icon-library-alt icon-md" />,
    id: 1,
    link: "/dashboard/academics/faculty",
  },
  {
    name: "Program",
    icon: <i className="icon-blocks icon-md" />,
    id: 1,
    link: "/dashboard/academics/program",
  },
  {
    name: "Courses",
    icon: <i className="icon-equalizer-list icon-md" />,
    id: 1,
    link: "/dashboard/academics/courses",
  },
  {
    name: "Slides",
    icon: <i className="icon-equalizer-list icon-md" />,
    id: 1,
    link: "/dashboard/academics/slides",
  },
  {
    name: "Attendance",
    icon: <i className="icon-equalizer-list icon-md" />,
    id: 1,
    link: "/dashboard/academics/attendance",
  },
 
];

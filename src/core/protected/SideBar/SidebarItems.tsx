import { MdLayers } from "react-icons/md";
import { SideBarPaths } from "./SidebarPaths";
type SideBarItems = {
  path: string;
  title: string;
  icon: any;
  children?: {
    path: string;
    title: string;
  }[];
}[];

export const SideBarItems: SideBarItems = [
  {
    path: SideBarPaths.dashboard,
    title: "Dashboard",
    icon: <MdLayers size={25} />,
  },
  {
    path: SideBarPaths.usermanagement.base,
    title: "User Management",
    icon: <MdLayers size={25} />,
    children: [
      {
        path: SideBarPaths.usermanagement.userPermissions,
        title: "User Permission",
      },
      {
        path: SideBarPaths.usermanagement.userRole,
        title: "User Roles",
      },
      {
        path: SideBarPaths.usermanagement.users,
        title: "Users",
      },
    ],
  },
  {
    path: SideBarPaths.academics.base,
    title: "Academics",
    icon: <MdLayers size={25} />,
    children: [
      {
        path: SideBarPaths.academics.faculty,
        title: "Faculty",
      },
      {
        path: SideBarPaths.academics.program,
        title: "Program",
      },
      {
        path: SideBarPaths.academics.courses,
        title: "Courses",
      },
      {
        path: SideBarPaths.academics.slides,
        title: "Slides",
      },
      {
        path: SideBarPaths.academics.attendance,
        title: "Attendance",
      },
    ],
  },
  {
    path: SideBarPaths.noticeBoard,
    title: "Notice Board",
    icon: <MdLayers size={25} />,
  },
];

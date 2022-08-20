import { ReactNode } from "react";

type UserManagementMenuList = {
  name: string;
  icon: ReactNode;
  link?: string;
  id: number;
}[];

export const usermanagementMenuList: UserManagementMenuList = [
  
  {
    name: "Permissions",
    icon: <i className="icon-blocks icon-md" />,
    id: 1,
    link: "/dashboard/user-management/permissions",
  },
  {
    name: "Roles",
    icon: <i className="icon-library-alt icon-md" />,
    id: 1,
    link: "/dashboard/user-management/roles",
  },
  {
    name: "Users",
    icon: <i className="icon-equalizer-list icon-md" />,
    id: 1,
    link: "/dashboard/user-management/users",
  },
];


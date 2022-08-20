import { ReactNode } from "react";

type NoticeBoardMenuList = {
  name: string;
  icon: ReactNode;
  link?: string;
  id: number;
}[];

export const noticeboarddMenuList: NoticeBoardMenuList = [
  {
    name: "Notice",
    icon: <i className="icon-library-alt icon-md" />,
    id: 1,
    link: "/dashboard/notice-board/notice",
  },
  {
    name: "SMS",
    icon: <i className="icon-blocks icon-md" />,
    id: 1,
    link: "/dashboard/notice-board/sms",
  },
  {
    name: "Email",
    icon: <i className="icon-equalizer-list icon-md" />,
    id: 1,
    link: "/dashboard/notice-board/email",
  },
  {
    name: "Lorem",
    icon: <i className="icon-calendar-cms icon-md" />,
    id: 1,
    link: "/dashboard/notice-board/lorem",
  },
 
];

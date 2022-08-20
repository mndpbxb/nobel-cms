import AddNewFaculty from '../Academics/Faculty/AddNewFaculty';
export const SideBarPaths = {
  main: "/dashboard",
  dashboard: "/dashboard/main",
  usermanagement: {
    base: "/dashboard/user-management",
    addNewUser: "/dashboard/user-management/add-new-user",
    userRole: "/dashboard/user-management/roles",
    userPermissions: "/dashboard/user-management/permissions",
    addNewPermission: "/dashboard/user-management/add-new-permission",
    addNewRole: "/dashboard/user-management/add-new-role",
    users: "/dashboard/user-management/users",
  },
  academics: {
    base: "/dashboard/academics",
    faculty: "/dashboard/academics/faculty",
    program: "/dashboard/academics/program",
    courses: "/dashboard/academics/courses",
    addNewCourse: "/dashboard/academics/add-new-course",
    slides: "/dashboard/academics/slides",
    attendance: "/dashboard/academics/attendance",
    addNewFaculty : "/dashboard/academics/add-new-faculty",
    addNewProgram : "/dashboard/academics/add-new-program",
  },

  noticeBoard: "/dashboard/notice-board",
};

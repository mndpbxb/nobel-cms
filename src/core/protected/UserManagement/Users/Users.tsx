import { IconButton, TextField } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Table from "../../../../components/Table/Table";
import TableHeader from "../../../../components/Table/TableHeader";
import { SideBarPaths } from "../../SideBar/SidebarPaths";

const Users = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "users",
      headerName: "Name",
      width: 70,
      flex: 2,
    },
    {
      field: "roles",
      headerName: "Role Name",

      flex: 2,
    },
    {
      field: "permissions",
      headerName: "Permission Name",

      flex: 2,
    },
    {
      headerName: "Actions",
      field: "actions",
      width: 200,
      renderCell: (params: GridValueGetterParams) => (
        <>
          <IconButton aria-label="view">
            <BsFillEyeFill />
          </IconButton>
          <IconButton aria-label="edit">
            <FiEdit />
          </IconButton>
          <IconButton aria-label="delete">
            <MdDelete />
          </IconButton>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      users: "Sudarshan Sharma",
      roles: "Student",
      permissions: "User Management",
    },
    {
      id: 2,
      users: "Rojan Neupane",
      roles: "Teacher",
      permissions: "Academics",
    },
    {
      id: 3,
      users: "Shailendra Sapkota",
      roles: "Admin",
      permissions: "Notice",
    },
    {
      id: 3,
      users: "Sulav Bhattarai",
      roles: "HOD",
      permissions: "Attendance",
    },
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="New user"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.usermanagement.addNewUser}
      />
      <div className="flex-grow-1">
        <Table
          columns={columns}
          data={rows}
          listSize={10}
          checkbox
          rowsPerPage={[10, 20, 30]}
        />
      </div>
    </div>
  );
};

export default Users;

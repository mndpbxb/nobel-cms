import { IconButton } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Table from "../../../../components/Table/Table";
import TableHeader from "../../../../components/Table/TableHeader";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { SideBarPaths } from "../../SideBar/SidebarPaths";

const Roles = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Roles");
  }, []);
  const handleSearch = () => {};

  const columns: GridColDef[] = [
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
    { id: 1, roles: "Student", permissions: "User Management" },
    { id: 2, roles: "Teacher", permissions: "Academics" },
    { id: 3, roles: "Admin", permissions: "Notice" },
    { id: 4, roles: "HOD", permissions: "Attendance" },
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="New Role"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.usermanagement.addNewRole}
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

export default Roles;

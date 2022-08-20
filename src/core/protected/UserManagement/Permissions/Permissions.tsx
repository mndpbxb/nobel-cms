import { IconButton } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Table from "../../../../components/Table/Table";
import TableHeader from "../../../../components/Table/TableHeader";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { SideBarItems } from "../../SideBar/SidebarItems";
import { SideBarPaths } from "../../SideBar/SidebarPaths";

const Permissions = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Permissions");
  }, []);

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "permissions",
      headerName: "Permissions",
      width: 70,
      flex: 2,
    },
    {
      headerName: "Actions",
      field: "actions",
      flex: 1,
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
    { id: 1, permissions: "User Management" },
    { id: 2, permissions: "Academics" },
    { id: 3, permissions: "Notice" },
    { id: 4, permissions: "Attendance" },
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="New Permission"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.usermanagement.addNewPermission}
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

export default Permissions;

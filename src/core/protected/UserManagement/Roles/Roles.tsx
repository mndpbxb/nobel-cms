import { Chip, IconButton } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Table from "../../../../components/Table/Table";
import TableHeader from "../../../../components/Table/TableHeader";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import { adminServices } from "../../../../service/admin-services";

const Roles = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Roles");
  }, []);

  const { data, isSuccess } = useQuery(["roles"], adminServices.getRoles);

  if (!isSuccess) {
    return <>Loading...</>;
  }

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Role Name",

      flex: 2,
    },
    {
      field: "permissions",
      headerName: "Permission Name",

      flex: 2,

      renderCell: (params) => (
        <>
          {params.row.permissions.map((permission, index) => (
            <Chip label={permission.name} key={index} />
          ))}
        </>
      ),
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

  const rows = data.data;
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

import { IconButton, TextField } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Table from "../../../../components/Table/Table";
import TableHeader from "../../../../components/Table/TableHeader";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import { adminServices } from '../../../../service/admin-services';

const Users = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");

  const { data, isSuccess } = useQuery(["users"], adminServices.getUsers);

  if (!isSuccess) {
    return <>Loading...</>;
  }

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 70,
      flex: 2,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 2,
    },
    {
      field: "address",
      headerName: "Address",

      flex: 2,
    },
    {
      field: "role",
      headerName: "Role",

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

  const rows = data.data;
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

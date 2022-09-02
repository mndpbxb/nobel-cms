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
import { useQuery } from "react-query";
import { adminServices } from "../../../../service/admin-services";

const Program = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Programs");
  }, []);

  const { data, isSuccess } = useQuery(["programs"], adminServices.getPrograms);

  if (!isSuccess) {
    return <>Loading...</>;
  }
  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Program ID",

      flex: 2,
    },
    {
      field: "name",
      headerName: "Program Name",

      flex: 2,
    },
    {
      field: "description",
      headerName: "Description",

      flex: 2,
    },
    {
      field: "faculty.name",
      headerName: "Faculty Name",

      flex: 2,
      valueGetter: (params) => {
        return params.row.faculty.name;
      },
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

  const rows = data.data;
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="New Program"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.academics.addNewProgram}
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

export default Program;

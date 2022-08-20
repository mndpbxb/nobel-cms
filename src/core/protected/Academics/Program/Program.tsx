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

const Program = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Programs");
  }, []);
  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "program",
      headerName: "Program ID",

      flex: 2,
    },
    {
      field: "programname",
      headerName: "Program Name",

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
    {
      id: 1,
      program: "BCIS",
      programname: "Bachelor in Computer Information System",
    },
    {
      id: 2,
      program: "BBA",
      programname: "Bachelor in Business Admininstration  ",
    },
    { id: 3, program: "BPH", programname: "Bachelor in Pharmacy" },
    { id: 4, program: "NUR", programname: "Bachelor in Nursing" },
  ];
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

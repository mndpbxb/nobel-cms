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

const Faculty = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Faculty");
  }, []);

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "faculty",
      headerName: "Faculty ID",

      flex: 2,
    },
    {
      field: "facultyname",
      headerName: "Faculty Name",

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
    { id: 1, faculty: "Mgmt", facultyname: "Faculty of Management" },
    { id: 2, faculty: "Sci", facultyname: "Faculty of Science" },
    { id: 3, faculty: "Nur", facultyname: "Faculty of Nursing" },
    { id: 4, faculty: "Bph", facultyname: "Bachelor of Pharmacy" },
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="New Faculty"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.academics.addNewFaculty}
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

export default Faculty;

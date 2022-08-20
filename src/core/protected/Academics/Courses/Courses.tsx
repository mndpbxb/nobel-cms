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

const Courses = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Courses");
  }, []);

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "courses",
      headerName: "Courses ID",

      flex: 2,
    },
    {
      field: "coursesname",
      headerName: "Courses Name",

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
    { id: 1, courses: "120", coursesname: "General Pscychology" },
    { id: 2, courses: "121", coursesname: "Business Mathematics" },
    { id: 3, courses: "122", coursesname: "Microeconomics" },
    { id: 4, courses: "121", coursesname: "English I" },
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="New Course"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.academics.addNewCourse}
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

export default Courses;

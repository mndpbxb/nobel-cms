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

const Courses = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Courses");
  }, []);

  const { data, isSuccess } = useQuery(["programs"], adminServices.getCourses);

  if (!isSuccess) {
    return <>Loading...</>;
  }

  const handleSearch = () => {};

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Courses ID",

      flex: 2,
    },
    {
      field: "name",
      headerName: "Courses Name",

      flex: 2,
    },
    {
      field: "description",
      headerName: "Courses Description",

      flex: 2,
    },
    {
      field: "subject_code",
      headerName: "Courses Code",

      flex: 2,
    },
    {
      field: "credit",
      headerName: "Credit",

      flex: 2,
    },

    {
      field: "program.name",
      headerName: "Faculty Name",

      flex: 2,
      valueGetter: (params) => {
        return params.row.program.name;
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

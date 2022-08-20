import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

interface TableProps {
  columns: GridColDef[];
  data: any[];
  listSize?: number;
  checkbox?: boolean;
  rowsPerPage?: number[];
}

export default function Table({
  columns,
  data,
  listSize,
  checkbox,
  rowsPerPage,
}: TableProps) {
  const [pageSize, setPageSize] = useState<number>(listSize ? listSize : 5);
  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={rowsPerPage}
      checkboxSelection={checkbox ? checkbox : false}
      disableSelectionOnClick
      sx={{
        boxShadow: 3,
        border: 0,
      }}
    />
  );
}

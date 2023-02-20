import {
  Paper,
  TableContainer,
  TablePagination,
  Table as TableMui,
} from "@material-ui/core";
import { FC, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

interface ITable {
  name: string;
  columns: GridColDef[];
  rows: readonly any[];

  // высота таблицы
  height?: number;

  width?: number | string;
}
export const Table: FC<ITable> = ({
  rows,
  columns,
  name,
  height = 400,
  width = "100%",
}) => {
  const [countRowsPage, setCountRowsPage] = useState<number>(10);

  return (
    <div style={{ height: height, width: width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={countRowsPage}
        rowsPerPageOptions={[10, 25, 50]}
        onPageSizeChange={(event) => setCountRowsPage(event)}
        checkboxSelection
      />
    </div>
  );
};

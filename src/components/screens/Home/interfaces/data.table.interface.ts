import { GridColDef } from "@mui/x-data-grid";

export interface DataTableInterface<T> {
  name: string;
  type: string;
  columns: GridColDef[];
  rows: T;
}

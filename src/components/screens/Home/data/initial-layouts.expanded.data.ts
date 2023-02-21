import { FullListLayoutsInterface } from "../interfaces/layouts.interface";
import {
  initialLayoutsLinks,
  initialLayoutsTable,
} from "./initial-layouts.data";

export const initialLayoutsExpandedData: FullListLayoutsInterface[] = [
  {
    name: "Таблицы",
    type: "table",
    data: initialLayoutsTable,
  },
  {
    name: "Ссылки",
    type: "links",
    data: initialLayoutsLinks,
  },
  {
    name: "Графики",
    type: "charts",
    data: [],
  },
];

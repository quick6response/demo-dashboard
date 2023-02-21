import { FullListLayoutsInterface } from "../interfaces/layouts.interface";
import { initialLayouts } from "./initial-layouts.data";

export const initialLayoutsExpandedData: FullListLayoutsInterface[] = [
  {
    name: "Таблицы",
    type: "table",
    data: initialLayouts[0],
  },
  {
    name: "Ссылки",
    type: "links",
    data: initialLayouts[1],
  },
  // {
  //   name: "Графики",
  //   type: "links",
  //   data: {},
  // },
];

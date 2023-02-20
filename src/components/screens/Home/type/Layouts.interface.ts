import { Layout, Layouts } from "react-grid-layout";
import { ItemBlockInterface } from "./ItemBlock.interface";

export type GroupLayoutsType = "books" | "list";

export interface LayoutsInterface {
  // Группа виджета 'Справочники' и т.д. Нужен отдельный тип для этого
  group: GroupLayoutsType;
  // наименование виджета
  name: string;
  data: ItemBlockInterface[];

  // data: {
  //   [key: Grid]: Layout[];
  // };

  // data: PartialRecord<Grid, Layout[]>;
}

type Grid = "lg" | "sm" | "xl";
type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T };

interface geo {
  test: [number, number][];
}

const test: geo = {
  test: [[12, 12]],
};

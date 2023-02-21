import { ItemInterface } from "./item.interface";

export type GroupLayoutsType = "books" | "list";
export type TypeListLayoutsType = "table" | "links" | "charts";

export interface LayoutsInterface {
  // Группа виджета 'Справочники' и т.д. Нужен отдельный тип для этого
  group: GroupLayoutsType;
  // наименование виджета
  name: string;
  data: ItemInterface[];
}

/**
 * Используется для описания ответа от сервера с группами и данными
 */
export interface FullListLayoutsInterface {
  name: string;
  type: TypeListLayoutsType;
  data: LayoutsInterface[];
}

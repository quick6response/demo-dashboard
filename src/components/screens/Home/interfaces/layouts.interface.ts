import { ItemInterface } from "./item.interface";

export type GroupLayoutsType = "books" | "list";
export type TypeListLayoutsType = "table" | "links" | "charts";

/**
 * Используется для описания ответа от сервера с группами и данными
 */
export interface FullListLayoutsInterface {
  // тип
  type: TypeListLayoutsType;
  // имя которое будет показано над списком
  name: string;
  data: LayoutsInterface[];
}

export interface LayoutsInterface {
  // Группа виджета 'Справочники' и т.д. Нужен отдельный тип для этого
  group: GroupLayoutsType;
  // наименование группы
  name: string;
  data: ItemInterface[];
}

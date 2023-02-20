/**
 * Интерфейс для блока с данными из компонента context
 */
import { Layout } from "react-grid-layout";
import { GroupLayoutsType, LayoutsInterface } from "./Layouts.interface";

export interface ItemBlockInterface extends Layout {
  // то откуда будем брать данные
  path: string;
  // группа виджета
  group: GroupLayoutsType;
}

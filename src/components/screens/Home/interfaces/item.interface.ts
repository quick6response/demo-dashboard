/**
 * Интерфейс для блока с данными из компонента context
 */
import { Layout } from "react-grid-layout";
import { GroupLayoutsType } from "./layouts.interface";

export interface ItemInterface extends Layout {
  // то откуда будем брать данные
  path: string;
  // группа виджета
  group: GroupLayoutsType;
}

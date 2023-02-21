import { faker } from "@faker-js/faker/locale/ru";
import { Layout } from "react-grid-layout";
import { ItemInterface } from "../interfaces/item.interface";
import {
  GroupLayoutsType,
  LayoutsInterface,
  TypeListLayoutsType,
} from "../interfaces/layouts.interface";

export const sizeMinAndMax = {
  minW: 4, // длинна
  maxW: 20,
  minH: 3, // высота
  maxH: 25,
};

const sizeMinAndMaxBooks: Omit<Layout, "x" | "y" | "i"> = {
  ...sizeMinAndMax,
  minW: 7,
  w: 8,
  minH: 8,
  h: 9,
};

export const initialLayoutsTable: LayoutsInterface[] = [
  {
    name: "Справочники",
    group: "books",
    data: [
      {
        i: "Пользователи",
        x: 0,
        y: 0,
        path: "books/get/users",
        group: "books",
        type: "table",
        ...sizeMinAndMaxBooks,
      },
      {
        i: "Книги",
        x: 5,
        y: 0,
        group: "books",
        path: "books/get/books",
        type: "table",
        ...sizeMinAndMaxBooks,
      },
      {
        i: "Телефоны",
        x: 0,
        y: 3,
        group: "books",
        path: "books/get/phone",
        type: "table",
        ...sizeMinAndMaxBooks,
      },
    ],
  },
  {
    name: "Документы",
    group: "list",
    data: [
      {
        i: "Расходы",
        x: 0,
        y: 0,
        w: 5,
        h: 3,
        group: "list",
        path: "list/get/траты",
        type: "table",
        ...sizeMinAndMax,
      },
      {
        i: "Зарплата",
        x: 5,
        y: 0,
        w: 5,
        h: 3,
        group: "list",
        path: "list/get/zp",
        type: "table",
        ...sizeMinAndMax,
      },
      {
        i: "Клиенты",
        x: 0,
        y: 3,
        w: 5,
        h: 3,
        group: "list",
        type: "table",
        path: "list/get/clients",

        ...sizeMinAndMax,
      },
    ],
  },
];

export const initialLayoutsLinks: LayoutsInterface[] = [
  {
    name: "Справочники",
    group: "books",
    data: get("books", "links"),
  },
  {
    name: "Документы",
    group: "list",
    data: get("list", "links"),
  },
];
function get(key: GroupLayoutsType, type: TypeListLayoutsType, count = 20) {
  const arr: ItemInterface[] = [];

  for (let i = 0; i < count; i++) {
    const name = faker.helpers.unique(faker.internet.email, [key]);
    const size = key === "books" ? sizeMinAndMaxBooks : sizeMinAndMax;
    arr.push({
      i: name,
      path: name,
      group: key,
      type,
      x: 0,
      y: 3,
      w: 5,
      h: 3,
      ...size,
    });
  }

  return arr;
}

import { faker } from "@faker-js/faker/locale/ru";
import { Layout } from "react-grid-layout";
import { ItemBlockInterface } from "../type/ItemBlock.interface";
import { GroupLayoutsType, LayoutsInterface } from "../type/Layouts.interface";

export const sizeMinAndMax = {
  minW: 4, // длинна
  maxW: 20,
  minH: 3, // высота
  maxH: 25,
};

const sizeMinAndMaxBooks: Omit<Layout, "x" | "y" | "i"> = {
  ...sizeMinAndMax,
  w: 7,
  h: 8,
  minH: 8,
  minW: 7,
};

export const initialLayouts: LayoutsInterface[] = [
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
        ...sizeMinAndMaxBooks,
      },
      {
        i: "Книги",
        x: 5,
        y: 0,
        group: "books",
        path: "books/get/books",
        ...sizeMinAndMaxBooks,
      },
      {
        i: "Телефоны",
        x: 0,
        y: 3,
        group: "books",
        path: "books/get/phone",
        ...sizeMinAndMaxBooks,
      },
      ...get("books"),
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
        ...sizeMinAndMax,
      },
      {
        i: "Клиенты",
        x: 0,
        y: 3,
        w: 5,
        h: 3,
        group: "list",
        path: "list/get/clients",

        ...sizeMinAndMax,
      },
      ...get("list"),
    ],
  },
];

function get(key: GroupLayoutsType, count = 20) {
  const arr: ItemBlockInterface[] = [];

  for (let i = 0; i < count; i++) {
    const name = faker.helpers.unique(faker.internet.email, [key]);
    const size = key === "books" ? sizeMinAndMaxBooks : sizeMinAndMax;
    arr.push({
      i: name,
      path: name,
      group: key,
      x: 0,
      y: 3,
      w: 5,
      h: 3,
      ...size,
    });
  }

  return arr;
}

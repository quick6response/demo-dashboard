/**
 * Выбираем и отрисовываем элемент для виджета по условию
 */ import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { Layout, Layouts } from "react-grid-layout";
import { booksUsersData } from "./data/books-users.data";
import { Table } from "./Table/Table";
import { ItemBlockInterface } from "./type/ItemBlock.interface";

interface ISelectItemWidget {
  item: ItemBlockInterface;
  layout?: Layout;
}
export const WidgetBody: FC<ISelectItemWidget> = ({ item, layout }) => {
  if (item.group === "books") {
    // эмуляция запроса на выборку данные для таблицы
    const data = booksUsersData;
    return (
      <>
        <Table
          name={`${data.name}`}
          columns={data.columns}
          rows={data.rows}
          height={55 * (layout?.h ?? 4)}
          aria-label="caption table"
        />
        <Button href={`?${item.path}`}>Перейти</Button>
      </>
    );
  } else return <div>Ничего не найдено</div>;
};

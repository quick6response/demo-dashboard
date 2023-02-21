import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { Layout } from "react-grid-layout";
import { booksUsersData } from "../data/books-users.data";
import { ItemInterface } from "../interfaces/item.interface";
import { Table } from "../Table/Table";

interface ISelectItemWidget {
  item: ItemInterface;
  layout?: Layout;
}

/**
 * Отрисовка виджета в зависимости от типа
 */
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

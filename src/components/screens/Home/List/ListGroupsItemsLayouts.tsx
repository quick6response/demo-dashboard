import { Collapse, List, ListItemText } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";
import React, { FC, useState } from "react";
import { ItemInterface } from "../interfaces/item.interface";
import {
  FullListLayoutsInterface,
  GroupLayoutsType,
} from "../interfaces/layouts.interface";
import { ListItemsLayouts } from "./ListItemsLayouts";

interface IListItemsLayouts {
  // выбранные элементы в текущей категории
  items: ItemInterface[];
  // объект с категорией
  elementLayouts: FullListLayoutsInterface;
  handleChange: (
    checked: boolean,
    group: GroupLayoutsType,
    itemId: string
  ) => void;
}

export const ListGroupsItemsLayouts: FC<IListItemsLayouts> = ({
  items,
  elementLayouts,
  handleChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ListItemButton onClick={() => setIsOpen((prevState) => !prevState)}>
        <ListItemText primary={elementLayouts?.name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List style={{ marginLeft: 7 }}>
          {elementLayouts.data.map((el) => (
            <ListItemsLayouts
              key={elementLayouts.name}
              items={items.filter((i) => i.type === elementLayouts.type)}
              elementLayouts={el}
              handleChange={handleChange}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

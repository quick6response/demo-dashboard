import { Collapse, IconButton, List, ListItemText } from "@material-ui/core";
import { Add, Delete, ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React, { FC, useState } from "react";
import { ItemInterface } from "../interfaces/item.interface";
import {
  GroupLayoutsType,
  LayoutsInterface,
} from "../interfaces/layouts.interface";

interface IListItemsLayouts {
  // выбранные элементы в текущей категории
  items: ItemInterface[];
  elementLayouts: LayoutsInterface;
  handleChange: (
    checked: boolean,
    group: GroupLayoutsType,
    itemId: string
  ) => void;
}

export const ListItemsLayouts: FC<IListItemsLayouts> = ({
  items,
  elementLayouts,
  handleChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addElementSelect = (itemId: string) => {
    // проверка на добавленный элемент
    const isCheck = !Boolean(items.find((t) => t.i === itemId));
    handleChange(isCheck, elementLayouts?.group, itemId);
  };

  return (
    <>
      <ListItemButton onClick={() => setIsOpen((prevState) => !prevState)}>
        <ListItemText primary={elementLayouts?.name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List>
          {elementLayouts.data.map((currentElementLayouts) => (
            <ListItem
              key={currentElementLayouts.i}
              style={{ marginLeft: 7 }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => addElementSelect(currentElementLayouts.i)}
                >
                  {items.find((t) => t.i === currentElementLayouts.i) ? (
                    <Delete />
                  ) : (
                    <Add />
                  )}
                </IconButton>
              }
            >
              <ListItemText primary={currentElementLayouts.i} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

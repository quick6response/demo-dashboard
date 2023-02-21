import { Collapse, IconButton, List, ListItemText } from "@material-ui/core";
import { Add, Delete, ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React, { FC, useState } from "react";
import { ItemInterface } from "../interfaces/item.interface";
import {
  LayoutsInterface,
  TypeListLayoutsType,
} from "../interfaces/layouts.interface";

interface IListItemsLayouts {
  // выбранные элементы в текущей категории
  items: ItemInterface[];
  elementLayouts: LayoutsInterface;
  type: TypeListLayoutsType;
  onChangeElementLayout: (widget: ItemInterface) => void;
}

export const ListItemsLayouts: FC<IListItemsLayouts> = ({
  items,
  elementLayouts,
  onChangeElementLayout,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
                  onClick={() => onChangeElementLayout(currentElementLayouts)}
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

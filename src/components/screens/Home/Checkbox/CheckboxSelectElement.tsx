import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemText,
} from "@material-ui/core";
import ListItem from "@mui/material/ListItem";
import { Add, Delete, ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, { FC, useState } from "react";
import { ItemBlockInterface } from "../type/ItemBlock.interface";
import { GroupLayoutsType, LayoutsInterface } from "../type/Layouts.interface";

interface ICheckboxSelectElement {
  // выбранные элементы в текущей категории
  items: ItemBlockInterface[];
  addAllElement: (group: GroupLayoutsType) => void;
  elementLayouts: LayoutsInterface;
  handleChange: (
    checked: boolean,
    group: GroupLayoutsType,
    itemId: string
  ) => void;
}
export const CheckboxSelectElement: FC<ICheckboxSelectElement> = ({
  items,
  elementLayouts,
  addAllElement,
  handleChange,
}) => {
  // выбранные элементы
  // const [selectItem, setSelectItem] = useState<string[]>(items.map((i) => i.i));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const isAllSelect = selectItem.length === elementLayouts.data.length;
  // const addAllElementSelect = () => {
  //   const addElementArray = elementLayouts?.data
  //     .filter((item) => !selectItem.includes(item.i))
  //     .map((element) => element.i);
  //   setSelectItem((prevState) => [...prevState, ...addElementArray]);
  //   addAllElement(elementLayouts.group);
  // };
  // const removeAllElementSelect = () => {
  //   setSelectItem((prevState) => {
  //     prevState.forEach((k) => handleChange(false, elementLayouts?.group, k));
  //     return [];
  //   });
  // };
  const addElementSelect = (itemId: string) => {
    // проверка на добавленный элемент
    const isCheck = !Boolean(items.find((t) => t.i === itemId));
    // console.log(isCheck);
    // if (isCheck) {
    //   setSelectItem((prevState) => [...prevState, itemId]);
    // } else {
    //   setSelectItem((prev) => prev.filter((i) => i !== itemId));
    // }
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

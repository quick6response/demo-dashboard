import {
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@mui/material/List";
import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CheckboxSelectElement } from "./Checkbox/CheckboxSelectElement";
import { ItemBlockInterface } from "./type/ItemBlock.interface";
import { GroupLayoutsType, LayoutsInterface } from "./type/Layouts.interface";

export const drawerWidth = 310;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "flex-end",
  },
  popup: {
    padding: theme.spacing(0),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    padding: theme.spacing(0, 1),
    height: "10px",
    alignItems: "flex-end",
  },
  list: {
    width: 300,
    marginLeft: "auto",
    overflowX: "hidden",
    marginTop: "100px",
    paddingTop: "65px",
  },
}));

interface IAddList {
  isOpen: boolean;
  // выбранные элементы
  items: ItemBlockInterface[];
  //доступные элементы
  originalItems: LayoutsInterface[];
  changeIsOpen: () => void;
  onAddItem: (group: GroupLayoutsType, itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
}

export const DrawerListAddElement: FC<IAddList> = ({
  items,
  onRemoveItem,
  onAddItem,
  originalItems,
  isOpen,
  changeIsOpen,
}) => {
  const classes = useStyles();
  const addAllElement = (group: GroupLayoutsType) => {
    // получаем наименования виджеты переданной группы
    const currentSelectedElementData = items
      .filter((e) => e.group === group)
      ?.map((k) => k.i);
    const currentOriginalItemsGroup = originalItems?.find(
      (e) => e.group === group
    );
    if (!currentSelectedElementData || !currentOriginalItemsGroup) return;

    // проверка на выбранные все элементы в группе
    const isAllSelectedGroup =
      currentSelectedElementData.length ===
      currentOriginalItemsGroup?.data?.length;

    const addElementArray = currentOriginalItemsGroup?.data.filter(
      (item) => !currentSelectedElementData?.includes(item.i)
    );

    isAllSelectedGroup
      ? currentSelectedElementData.forEach((elementDelete) =>
          onRemoveItem(elementDelete)
        )
      : addElementArray?.forEach((element) => onAddItem(group, element.i));
  };

  /**
   * Добавить/удалить элемент
   * @param checked Выбран ли этот элемент
   * @param group
   * @param itemId
   */
  const handleChange = (
    checked: boolean,
    group: GroupLayoutsType,
    itemId: string
  ) => {
    if (checked) onAddItem(group, itemId);
    else onRemoveItem(itemId);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => changeIsOpen()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>
          <ListItem
            key="menuHeading"
            divider
            disableGutters
            style={{ paddingTop: "65px" }}
          >
            <ListItemText inset primary="Доступные виджеты" />
          </ListItem>
          {originalItems.map((layouts) => (
            <CheckboxSelectElement
              key={layouts.name}
              items={items.filter((i) => i.group === layouts.group)}
              addAllElement={addAllElement}
              elementLayouts={layouts}
              handleChange={handleChange}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

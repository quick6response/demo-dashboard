import {
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@mui/material/List";
import React, { FC } from "react";
import { ItemInterface } from "../interfaces/item.interface";
import {
  FullListLayoutsInterface,
  GroupLayoutsType,
} from "../interfaces/layouts.interface";
import { ListGroupsItemsLayouts } from "../List/ListGroupsItemsLayouts";

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
  items: ItemInterface[];
  //доступные элементы
  originalItems: FullListLayoutsInterface[];

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
            <div style={{ marginLeft: 7 }}>
              <ListGroupsItemsLayouts
                key={layouts.name}
                items={items.filter((i) => i.type === layouts.type)}
                elementLayouts={layouts}
                handleChange={handleChange}
              />
            </div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

import { Divider, Drawer, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, { FC } from "react";
import { ItemInterface } from "../interfaces/item.interface";
import { LayoutsInterface } from "../interfaces/layouts.interface";

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
  originalItems: LayoutsInterface[];
  changeIsOpen: () => void;
  onChangeElementLayout: (widget: ItemInterface) => void;
}

export const DrawerListAddElementDefault: FC<IAddList> = ({
  items,
  originalItems,
  isOpen,
  changeIsOpen,
  onChangeElementLayout,
}) => {
  const classes = useStyles();

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
        <div>Устарело</div>
        {/*<List className={classes.list}>
          <ListItem
            key="menuHeading"
            divider
            disableGutters
            style={{ paddingTop: "65px" }}
          >
            <ListItemText inset primary="Доступные виджеты" />
          </ListItem>
          {originalItems.map((layouts) => (
            <ListItemsLayouts
              key={layouts.name}
              type="table"
              items={items.filter((i) => i.group === layouts.group)}
              elementLayouts={layouts}
              handleChange={onChangeElementLayout}
            />
          ))}
        </List>*/}
      </Drawer>
    </>
  );
};

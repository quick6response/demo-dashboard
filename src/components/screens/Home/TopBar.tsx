import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import React, { FC } from "react";
import { DrawerListItem } from "./Drawer/DrawerListItem";
import { drawerWidth } from "./Drawer/DrawerListItemsDefault";
import { ItemInterface } from "./interfaces/item.interface";
import { FullListLayoutsInterface } from "./interfaces/layouts.interface";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: "100%",
    widthMax: "270%",
    widthMin: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    alignSelf: "stretch",
    marginRight: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },

  list: {
    padding: theme.spacing(1),
    marginLeft: "auto",
  },
}));

interface ITopBar {
  isEdit: boolean;
  originalItems: FullListLayoutsInterface[];
  items: ItemInterface[];
  onLayoutSave?: () => void;
  onIsEditDashboard: () => void;

  onChangeElementLayout: (widget: ItemInterface) => void;
  // вкл/выкл редактирование дашборда
}
export const TopBar: FC<ITopBar> = ({
  onLayoutSave,
  items,
  originalItems,
  onIsEditDashboard,
  onChangeElementLayout,
  isEdit = false,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <FormControlLabel
          control={
            <Checkbox
              aria-label="edit"
              onClick={onIsEditDashboard}
              aria-labelledby="Редактирование"
              value={isEdit}
            ></Checkbox>
          }
          label="Редактирование"
        />
        <IconButton aria-label="save" onClick={onLayoutSave} disabled={!isEdit}>
          <SaveIcon />
        </IconButton>
      </Card>
      <DrawerListItem
        key={"DrawerListItem"}
        items={items}
        originalItems={originalItems}
        isOpen={isEdit}
        changeIsOpen={onIsEditDashboard}
        onChangeElementLayout={onChangeElementLayout}
      />
    </>
  );
};

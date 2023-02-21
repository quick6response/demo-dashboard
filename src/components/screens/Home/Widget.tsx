import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React, { FC, memo } from "react";
import { Layout } from "react-grid-layout";
import { ItemInterface } from "./interfaces/item.interface";
import { WidgetBody } from "./WidgetBody";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
  },
  spacer: {
    flexGrow: 1,
  },
  body: {
    padding: "0.5rem",
    flexGrow: 1,
    color: "green",
  },
});

interface IWidget {
  item: ItemInterface;
  // элемент у которого изменяются размеры в контенте
  layout?: Layout;
  onRemoveItem: (itemId: string) => void;
  // блокировка кнопок при выкл редактирование.
  isEdit: boolean;
}
export const Widget: FC<IWidget> = memo(
  ({ item, onRemoveItem, layout, isEdit = false }) => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h6" gutterBottom>
            {item.i}
          </Typography>
          <div className={classes.spacer} />
          {!isEdit ? (
            <IconButton
              aria-label="delete"
              onClick={() => onRemoveItem(item.i)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          ) : null}
        </div>
        <div className={classes.body}>
          <WidgetBody item={item} layout={layout} />
        </div>
      </Card>
    );
  }
);

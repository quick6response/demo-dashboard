import React, { FC, useLayoutEffect, useState } from "react";
import ReactGridLayout, {
  Layouts,
  Responsive as ResponsiveGridLayout,
} from "react-grid-layout";
import { useAlert } from "../../../hooks/useAlert";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Alert } from "../../Alert/Alert";
import { initialLayoutsExpandedData } from "./data/initial-layouts.expanded.data";
import { drawerWidth } from "./Drawer/DrawerListItemsDefault";
import { ItemInterface } from "./interfaces/item.interface";
import { TopBar } from "./TopBar";
import { Widget } from "./Widget/Widget";

// доступные элементы для выбора
const getLayouts = [...initialLayoutsExpandedData];

export const Content: FC = () => {
  const { setAlert, alert } = useAlert();
  const size = useWindowSize();
  const [layouts, setLayouts] = useState<{ [P: string]: ItemInterface[] }>(
    getFromLS("layoutSave") || {
      lg: [],
    }
  );

  const [availableLayouts] = useState(getLayouts);
  // выбранные
  const [items, setItems] = useState<ItemInterface[]>(layouts.lg);
  // редактирование элементов
  const [isEdit, setIsEdit] = useState(false);
  const [widthGrid, setWidthGrid] = useState(size.width);

  // расчет ширины экрана для отображения сетки
  useLayoutEffect(() => {
    setWidthGrid(isEdit ? size.width - drawerWidth : size.width);
  }, [isEdit, size.width]);

  const onLayoutChange = (
    currentLayout: ReactGridLayout.Layout[],
    allLayouts: { [P: string]: ItemInterface[] }
  ) => {
    setLayouts(allLayouts);
  };

  const onRemoveItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.i !== itemId));
    setAlert(<Alert status="info">{itemId} удален!</Alert>);
  };

  const addElement = (element: ItemInterface) => {
    // проверка на уже добавленный элемент через find
    const checkElementIsDashboard = items.find(
      (item) => item.i === element.i && item.path === element.path
    );
    if (checkElementIsDashboard) {
      // console.log(checkElementIsDashboard);
      return onRemoveItem(checkElementIsDashboard.i);
    }
    // если добавлен, то вызываем удаление
    setItems((prev) => [...prev, element]);
    setAlert(<Alert status={"info"}>{element.i} добавлен на доску!</Alert>);
  };

  const saveLocal = () => {
    saveToLS<Layouts>("layouts", { lg: items });
  };

  const onIsEditDashboard = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <TopBar
        items={items}
        onChangeElementLayout={addElement}
        onIsEditDashboard={onIsEditDashboard}
        originalItems={availableLayouts}
        isEdit={isEdit}
        onLayoutSave={saveLocal}
      />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        maxRows={60}
        width={widthGrid}
        onLayoutChange={(_, allLayouts) =>
          onLayoutChange(_, allLayouts as { [P: string]: ItemInterface[] })
        }
        isDraggable={isEdit}
        isResizable={isEdit}
      >
        {items.map((item, index) => (
          <div
            key={item.i}
            className="widget"
            data-grid={{
              ...item,
              x: 0,
              y: index * 2,
            }}
          >
            <Widget
              layout={item /*layouts?.lg?.find((lay) => lay.i === item.i)*/}
              item={item}
              isEdit={!isEdit}
              onRemoveItem={onRemoveItem}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
      {items?.length === 0 && <div>Виджеты пока не добавлены</div>}
      {alert}
    </>
  );
};

function getFromLS<T>(key: string): T | null {
  if (global.localStorage) {
    try {
      // @ts-ignore
      return JSON.parse(global?.localStorage?.getItem(key)) || null;
    } catch (e) {}
  }
  return null;
}

function saveToLS<T>(key: string, value: T) {
  if (global.localStorage) {
    global.localStorage.setItem("layoutSave", JSON.stringify(value));
  }
}

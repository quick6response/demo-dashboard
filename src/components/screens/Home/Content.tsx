import React, { FC, useLayoutEffect, useState } from "react";
import ReactGridLayout, {
  Layouts,
  Responsive as ResponsiveGridLayout,
} from "react-grid-layout";
import { useAlert } from "../../../hooks/useAlert";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Alert } from "../../Alert/Alert";
import { initialLayoutsTable } from "./data/initial-layouts.data";
import { initialLayoutsExpandedData } from "./data/initial-layouts.expanded.data";
import { drawerWidth } from "./Drawer/DrawerListItemsDefault";
import { ItemInterface } from "./interfaces/item.interface";
import { GroupLayoutsType } from "./interfaces/layouts.interface";
import { TopBar } from "./TopBar";
import { Widget } from "./Widget/Widget";

// доступные элементы для выбора
const getLayouts = [...initialLayoutsExpandedData];

// развернуть двумерный массив
// initialLayouts.map((lay) => lay.data).flat(),
export const Content: FC = () => {
  const { setAlert, alert } = useAlert();
  const size = useWindowSize();
  const [layouts, setLayouts] = useState<Layouts>({
    lg: [],
  });
  const [availableLayouts] = useState(getLayouts);
  // выбранные
  const [items, setItems] = useState<ItemInterface[]>([]);
  // редактирование элементов
  const [isEdit, setIsEdit] = useState(false);
  const [widthGrid, setWidthGrid] = useState(size.width);

  // расчет ширины экрана для отображения сетки
  useLayoutEffect(() => {
    setWidthGrid(isEdit ? size.width - drawerWidth : size.width);
  }, [isEdit, size.width]);

  const onLayoutChange = (
    currentLayout: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts
  ) => {
    setLayouts(allLayouts);
  };

  const onRemoveItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.i !== itemId));
    setAlert(<Alert status="info">{itemId} удален!</Alert>);
  };

  const onAddItem = (group: GroupLayoutsType, itemId: string) => {
    // ищем виджет в группе
    const findLayoutInGroup = initialLayoutsTable
      // ищем группу
      .find((lay) => lay.group === group)
      // если группа есть, ищем виджет по айди
      ?.data.find((layout) => layout.i === itemId);
    if (!findLayoutInGroup)
      return setAlert(
        <Alert status={"error"}>
          {itemId} не найден в списке, перезагрузите страницу и попробуйте
          снова!
        </Alert>
      );
    setItems((prev) => [...prev, findLayoutInGroup]);
    setAlert(<Alert status={"info"}>{itemId} добавлен на доску!</Alert>);
  };

  const addElrment = (element: LayoutInterface) => {
  // проверка на уже доьавоенный элемент верез find

  // если добавлен, то вызываем удаление

  // добавляем в массив текущих виджетов переданный виджет с параметами group, type 


  }
  const onIsEditDashboard = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <TopBar
        items={items}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        onIsEditDashboard={onIsEditDashboard}
        originalItems={availableLayouts}
        isEdit={isEdit}
      />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        maxRows={60}
        width={widthGrid}
        onLayoutChange={(_, allLayouts) => onLayoutChange(_, allLayouts)}
        isDraggable={isEdit}
        isResizable={isEdit}
      >
        {items.map((item, index) => (
          <div
            key={item.i}
            className="widget"
            data-grid={{
              ...item,
              w: item.w,
              h: item.h,
              x: 0,
              y: index * 2,
            }}
          >
            <Widget
              layout={layouts?.lg?.find((lay) => lay.i === item.i)}
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

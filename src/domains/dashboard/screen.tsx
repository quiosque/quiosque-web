import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "./components/Widget";
import "react-grid-layout/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const BREAKPOINTS = { md: 1920, sm: 1366, xs: 1200 };

const GRID_LAYOUT = [
  { i: "line-chart", x: 0, y: 0, w: 4, h: 2 },
  { i: "collumns-chart", x: 4, y: 0, w: 4, h: 2 },
  { i: "best-salles", x: 0, y: 4, w: 4, h: 2 },
  { i: "card", x: 4, y: 4, w: 2, h: 2 },
  { i: "card-2", x: 6, y: 4, w: 2, h: 2 },
];

const COLUMNS = {
  md: 9,
  sm: 6,
  xs: 4
}

const ROW_HEIGHT = 168;

function DashboardScreen() {
  return (
    <div className="w-screen h-screen overflow-hidden p-2">
      <ResponsiveGridLayout
        containerPadding={[0, 0]}
        className="layout"
        layouts={{ md: GRID_LAYOUT }}
        breakpoints={BREAKPOINTS}
        isResizable={false}
        draggableHandle=".react-grid-dragHandle"
        rowHeight={ROW_HEIGHT}
        compactType="vertical"
        verticalCompact
        cols={COLUMNS}
      >
        {GRID_LAYOUT.map((item) => (
          <div key={item.i}>
            <Widget type={item.i} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default DashboardScreen;

import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import Widget from "./components/Widget";
import "react-grid-layout/css/styles.css";
import useLocalStorage from "@/hooks/useLocalStorage";

const ResponsiveGridLayout = WidthProvider(Responsive);

const BREAKPOINTS = { md: 1920, sm: 1366, xs: 1200 };

const GRID_LAYOUT_DEFAULT: Layout[] = [
  { i: "salesByMonth", x: 0, y: 0, w: 3, h: 2 },
  { i: "productsColumns", x: 4, y: 0, w: 3, h: 2 },
  { i: "expensesByCategory", x: 0, y: 0, w: 3, h: 2 },
  { i: "totalExpensesCost", x: 4, y: 4, w: 1, h: 1 },
  { i: "totalSales", x: 5, y: 4, w: 1, h: 1 },
  { i: "saldo", x: 3, y: 6, w: 1, h: 1 },
];

const COLUMNS = {
  md: 9,
  sm: 6,
  xs: 4,
};

const ROW_HEIGHT = 168;

function DashboardScreen() {
  const [gridLayout, setGridLayout] = useLocalStorage("dashboard", GRID_LAYOUT_DEFAULT);

  const onDragStop = (layout: Layout[]) => {
    setGridLayout(layout)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        gap: "16px",
        padding: "16px 24px",
        backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity, 1))",
      }}
    >
      <ResponsiveGridLayout
        containerPadding={[0, 0]}
        className="layout"
        layouts={{ md: gridLayout }}
        breakpoints={BREAKPOINTS}
        isResizable={false}
        draggableHandle=".react-grid-dragHandle"
        rowHeight={ROW_HEIGHT}
        compactType="vertical"
        verticalCompact
        cols={COLUMNS}
        onDragStop={(layout) => onDragStop(layout)}
      >
        {GRID_LAYOUT_DEFAULT.map((item) => (
          <div key={item.i}>
            <Widget type={item.i} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default DashboardScreen;

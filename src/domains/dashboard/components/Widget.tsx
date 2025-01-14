import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import LineChartComponent from "./LineChart";
import { CircleDollarSign } from "lucide-react";
import useDashData from "../hooks/useDashData";
import ProductsColumnsChartComponent from "./ProductsColumnsChartComponent";
import ExpensesCollumnsChartComponent from "./ExpensesColumnsChartComponent";

type WidgetType =
  | "productsColumns"
  | "salesByMonth"
  | "totalExpensesCost"
  | "totalSales"
  | "itemsTotalCost"
  | "expensesByCategory";

type WidgetProps = {
  type: WidgetType;
};

const titles: Record<WidgetType, React.ReactNode> = {
  productsColumns: "Produtos",
  salesByMonth: "Vendas mensais:",
  totalExpensesCost: (
    <div className="flex-1 flex align-center justify-between">
      <h3 className="text-sm">Total em despesas:</h3>
      <CircleDollarSign strokeWidth={1} />
    </div>
  ),
  totalSales: (
    <div className="flex-1 flex align-center justify-between">
      <h3 className="text-sm">Valor total das vendas:</h3>
      <CircleDollarSign strokeWidth={1} />
    </div>
  ),
  expensesByCategory: "Despesas por tipo"
};

const WidgetCard = (props: { data: number | string }) => {
  return (
    <CardContent className="p-3 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">R$ {props.data}</h2>
    </CardContent>
  );
};

function Widget(props: WidgetProps) {
  const { data } = useDashData();
  const { type } = props;

  const content = () => {
    switch (type) {
      case "productsColumns":
        return <ProductsColumnsChartComponent />;
      case "salesByMonth":
        return <LineChartComponent salesByMonth={data.salesByMonth} />;
      case "totalExpensesCost":
        return <WidgetCard data={data.totalExpensesCost} />;
      case "itemsTotalCost":
        return <WidgetCard data={data.itemsTotalCost} />;
      case "totalSales":
        return <WidgetCard data={data.totalSales} />;
      case "expensesByCategory":
        return <ExpensesCollumnsChartComponent />;
    }
  };

  return (
    <Card key={type} className="w-full h-full flex-1">
      <CardHeader className="react-grid-dragHandle cursor-grab flex flex-row items-center justify-start p-2 pt-1 select-none text-ellipsis flex-1">
        <GripVertical
          className="mt-2 hover:text-purple-500"
          style={{
            color: "#132D42",
          }}
        />
        <CardTitle
          className="text-base flex-1"
          style={{
            color: "#132D42",
          }}
        >
          {titles[type]}
        </CardTitle>
      </CardHeader>
      {content()}
    </Card>
  );
}

export default Widget;

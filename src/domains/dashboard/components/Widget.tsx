import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import LineChartComponent from "./LineChart";
import useDashData from "../hooks/useDashData";
import ProductsColumnsChartComponent from "./ProductsColumnsChartComponent";
import ExpensesCollumnsChartComponent from "./ExpensesColumnsChartComponent";

type WidgetProps = {
  type: string;
};

const titles: Record<string, React.ReactNode> = {
  productsColumns: "Produtos",
  salesByMonth: "Vendas mensais:",
  totalExpensesCost: "Total em despesas",
  totalSales: "Valor total das vendas",
  expensesByCategory: "Despesas por tipo",
  saldo: "Saldo",
};

const WidgetCard = (props: { data: number | string; title: string }) => {
  return (
    <Card className="w-full h-full flex-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2 react-grid-dragHandle cursor-grab">
        <CardTitle className="text-base font-medium text-muted-foreground">
          {props.title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
          <DollarSign className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-start text-2xl font-bold">
        {props.data}
      </CardContent>
    </Card>
  );
};

function Widget(props: WidgetProps) {
  const { data } = useDashData();
  const { type } = props;

  const content = () => {
    if(!data) return "Sem dados retornados";

    switch (type) {
      case "productsColumns":
        return <ProductsColumnsChartComponent />;
      case "salesByMonth":
        return <LineChartComponent salesByMonth={data.salesByMonth} />;
      case "expensesByCategory":
        return <ExpensesCollumnsChartComponent />;
    }
  };

  if (type === "totalExpensesCost") {
    return (
      <WidgetCard
        data={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.totalExpensesCost)}
        title="Total em despesas"
      />
    );
  }
  if (type === "totalSales") {
    return (
      <WidgetCard
        data={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.totalSales)}
        title="Valor total das vendas"
      />
    );
  }

  if(type === "saldo") {
    return (
      <WidgetCard
        data={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.totalSales - data.totalExpensesCost)}
        title="Saldo"
      />
    );
  }

  return (
    <Card key={type} className="w-full h-full flex-1">
      <CardHeader className="react-grid-dragHandle cursor-grab flex flex-row items-center justify-start p-2 pt-1 select-none text-ellipsis flex-1">
        {
          <CardTitle
            className="text-base font-medium text-muted-foreground flex-1"
          >
            {titles[type]}
          </CardTitle>
        }
      </CardHeader>
      {content()}
    </Card>
  );
}

export default Widget;

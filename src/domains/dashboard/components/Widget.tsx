import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import LineChartComponent from "./LineChart";
import { CircleDollarSign, PackageOpen } from "lucide-react";

type WidgetType = 'collumnsChart' | 'lineChart' | 'productCard' | 'itemCard';

type WidgetProps = {
  type: WidgetType;
};

const titles: Record<WidgetType, React.ReactNode> = {
  collumnsChart: "Gráfico de Colunas",
  lineChart: "Gráfico de Linhas",
  productCard: (
    <div className="flex-1 flex align-center justify-between">
      <h3 className="text-sm">O produto mais vendido:</h3>
      <CircleDollarSign strokeWidth={1}/>
    </div>
  ),
  itemCard: (
    <div className="flex-1 flex align-center justify-between">
      <h3 className="text-sm">O item mais utilizado:</h3>
      <PackageOpen strokeWidth={1}/>
    </div>
  ),
};

const WidgetCard = () => {
  return <CardContent className="p-3"></CardContent>;
};

function Widget(props: WidgetProps) {
  const { type } = props;

  const content = () => {
    switch (type) {
      case "collumnsChart":
      case "lineChart":
        return <LineChartComponent />;
      case "productCard":
        return <WidgetCard />;
    }
  };

  return (
    <Card key={type} className="w-full h-full flex-1">
      <CardHeader className="react-grid-dragHandle cursor-grab flex flex-row items-center justify-start p-1 pt-1 select-none text-ellipsis flex-1">
        <GripVertical className="mt-2 hover:text-purple-500" />
        <CardTitle className="text-base flex-1">{titles[type]}</CardTitle>
      </CardHeader>
      {content()}
    </Card>
  );
}

export default Widget;

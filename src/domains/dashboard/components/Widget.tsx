import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import LineChartComponent from "./LineChart";

type WidgetProps = {
  type: string;
};

function Widget(props: WidgetProps) {
  const { type } = props;

  return (
    <Card key={type} className="w-full h-full">
      <CardHeader className="react-grid-dragHandle cursor-grab flex flex-row items-center justify-start p-1 pt-1 select-none text-ellipsis">
        <GripVertical className="mt-2 hover:text-purple-500" />
        <CardTitle>Card {type}</CardTitle>
      </CardHeader>
      {type.includes("chart") ? (
        <LineChartComponent />
      ) : (
        <CardContent className="p-3">Card {type} content</CardContent>
      )}
    </Card>
  );
}

export default Widget;

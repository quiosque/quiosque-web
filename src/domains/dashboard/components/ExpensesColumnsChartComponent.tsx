// @ts-nocheck
import { useExpenses } from "@/domains/expenses/hooks";
import { useMemo } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

function formatData(data) {
  const groupedData = data.reduce((acc, item) => {
    const type = item.type || "Sem tipo";

    if (!acc[type]) {
      acc[type] = 0;
    }

    acc[type] += item.cost;
    return acc;
  }, {});

  return Object.entries(groupedData).map(([type, totalCost]) => ({
    type,
    Custo: totalCost
  }));
}

function ExpensesCollumnsChartComponent() {
  const { data } = useExpenses();

  const formattedData = useMemo(
    () =>
      formatData(data),
    [data]
  );

  return (
    <div className="p-0 w-full">
      <BarChart
        width={800}
        height={300}
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Custo" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ExpensesCollumnsChartComponent;

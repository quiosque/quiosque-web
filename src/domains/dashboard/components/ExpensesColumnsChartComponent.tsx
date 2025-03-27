// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
  ResponsiveContainer
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
    Custo: totalCost.toFixed(2),
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
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="86%">
      <BarChart
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
        <Tooltip formatter={(value) => `R$ ${value}`}/>
        <Legend />
        <Bar dataKey="Custo" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensesCollumnsChartComponent;

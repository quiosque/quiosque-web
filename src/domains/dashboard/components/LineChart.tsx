import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function LineChartComponent(props: {
  salesByMonth: { month: number; value: number }[];
}) {
  const { salesByMonth } = props;
  const formattedData = useMemo(
    () =>
      salesByMonth
        .sort((a, b) => a.month - b.month)
        .map((item) => ({
          name: monthNames[item.month - 1],
          Valor: item.value,
        })),
    [salesByMonth]
  );

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="86%">
        <LineChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `R$ ${value}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Valor"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;

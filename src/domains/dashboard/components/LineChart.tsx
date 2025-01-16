import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    <div className="p-0 w-full">
      <LineChart
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Valor"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default LineChartComponent;

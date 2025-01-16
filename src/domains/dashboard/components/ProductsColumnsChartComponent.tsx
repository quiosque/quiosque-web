import { useProducts } from "@/domains/products/hooks";
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

function ProductsColumnsChartComponent() {
  const { data } = useProducts();

  const formattedData = useMemo(
    () =>
      data.map((item) => ({
        name: item.name,
        Preço: item.price,
      })),
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Preço" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ProductsColumnsChartComponent;

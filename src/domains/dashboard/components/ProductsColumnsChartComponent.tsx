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
  ResponsiveContainer,
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
          barCategoryGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `R$ ${value}`} />
          <Legend />
          <Bar dataKey="Preço" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductsColumnsChartComponent;

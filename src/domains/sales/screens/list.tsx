import { DataTable } from "@/components/DataTable";
import useSales from "../hooks/useSales";
import { ColumnDef } from "@tanstack/react-table";
import { SaleResponseData } from "../types";
import ProductsList from "../components/ProductsList";

function ListSalesScreen() {
  const { data, isLoading } = useSales();

  const columns: ColumnDef<SaleResponseData>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <p className="font-medium">#{row.original.id}</p>,
    },
    {
      accessorKey: "total_value",
      header: "Valor da venda",
      cell: ({ row }) => {
        const value = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.original.total_value);
        return <p className="font-medium text-green-600">{value}</p>;
      },
    },
    {
      accessorKey: "sold_at",
      header: "Data da venda",
      cell: ({ row }) => {
        return new Date(row.original.sold_at).toLocaleDateString();
      },
    },
    {
      accessorKey: "products",
      header: "Produtos vendidos",
      cell: ({ row }) => {
        return <ProductsList products={row.original.products} />;
      },
    },
  ];

  return (
    <div
      className="container py-10 px-10"
      style={{ backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity, 1))" }}
    >
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}

export default ListSalesScreen;

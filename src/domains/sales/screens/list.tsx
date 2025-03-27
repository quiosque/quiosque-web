import { DataTable } from "@/components/DataTable";
import useSales  from "../hooks/useSales";
import { ColumnDef } from "@tanstack/react-table";
import { SaleResponseData } from "../types";

function ListSalesScreen() {
  const { data, isLoading } = useSales();

  const columns: ColumnDef<SaleResponseData>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "total_value",
      header: "Valor da venda",
      cell: ({ row }) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.original.total_value);
      }
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
        return (
          <>
            {row.original.products.map((product) => (
              <div key={product.id} className="flex items-center gap-3" >
                <span>{product.name}:</span>
                <span className="bg-primary text-white rounded w-4 items-center justify-center inline-flex ">{product.quantity}</span>
              </div>
            ))}
          </>
        )
      },
    }
  ];

  return (
    <div className="container py-10 px-10" style={{ backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity, 1))" }}>
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}

export default ListSalesScreen;

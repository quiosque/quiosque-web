// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { DataTable } from "@/components/DataTable";
import { useProducts } from "../hooks";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { ProductsTableData } from "../types";
import { deleteProduct } from "../services";

function ListProductsScreen() {
  const { data, isLoading, handleRefetch } = useProducts();
  // Move this to another file, where hooks can be accessed
  const columns: ColumnDef<ProductsTableData>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
      accessorKey: "description",
      header: "Descrição",
    },
    {
      accessorKey: "category",
      header: "Categoria",
    },
    {
      accessorKey: "price",
      header: "Preço de comercialização",
      cell: ({ row }) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.original.price);
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const rowId = row.original.id;

        if (!rowId) return null;

        const handleDelete = async () => {
          await deleteProduct(rowId);
          handleRefetch();
        }

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to={`/products/edit/${rowId}`}>
                <DropdownMenuItem>Editar</DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="text-red-600"
                onClick={handleDelete}
              >
                Deletar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="container px-10 py-10" style={{ backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity, 1))" }}>
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}

export default ListProductsScreen;

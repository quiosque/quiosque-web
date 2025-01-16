// @ts-nocheck
import { DataTable } from "@/components/DataTable";
import { useItems } from "../hooks";
import { ColumnDef } from "@tanstack/react-table";
import { Item } from "../types";
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
import { deleteItem } from "../services";

function ListItemsScreen() {
  const { data, isLoading, refetch } = useItems();
  // Move this to another file, where hooks can be accessed
  const columns: ColumnDef<Item>[] = [
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
      accessorKey: "quantity",
      header: "Quantidade",
    },
    {
      accessorKey: "measure",
      header: "Unidade de medida",
    },
    {
      accessorKey: "cost",
      header: "Custo por unidade",
      cell: ({ row }) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.original.cost);
      },
    },
    {
      accessorKey: "totalCost",
      header: "Custo total",
      cell: ({ row }) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.original.totalCost);
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const rowId = row.original.id;

        if (!rowId) return null;

        const handleDelete = async () => {
          await deleteItem(rowId);
          refetch();
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
              <Link to={`/items/edit/${rowId}`}>
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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}

export default ListItemsScreen;

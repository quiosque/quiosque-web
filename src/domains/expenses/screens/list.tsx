// @ts-nocheck
import { DataTable } from "@/components/DataTable";
import { useExpenses } from "../hooks";
import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "../types";
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
import { deleteExpense } from "../services";

function ListExpensesScreen() {
  const { data, isLoading, refetch } = useExpenses();
  // Move this to another file, where hooks can be accessed
  const columns: ColumnDef<Expense>[] = [
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
      accessorKey: "type",
      header: "Tipo",
    },
    {
      accessorKey: "recurrency",
      header: "Recorrência",
    },
    {
      accessorKey: "cost",
      header: "Custo",
      cell: ({ row }) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.original.cost);
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const rowId = row.original.id;

        if (!rowId) return null;

        const handleDelete = async () => {
          await deleteExpense(rowId);
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
              <Link to={`/expenses/edit/${rowId}`}>
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
    <div className="container mx-auto px-10 py-10">
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}

export default ListExpensesScreen;

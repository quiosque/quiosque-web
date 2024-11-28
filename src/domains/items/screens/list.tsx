import React from "react";
import { columns } from "../utils/columns";
import { DataTable } from "../components/DataTable";
import { useItems } from "../hooks";

function ListItemsScreen() {
  const { data, isLoading } = useItems();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}

export default ListItemsScreen;

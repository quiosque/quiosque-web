import React from "react"
import { Payment, columns } from "../utils/columns"
import { DataTable } from "../components/DataTable"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

function ListItemsScreen() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )

}

export default ListItemsScreen
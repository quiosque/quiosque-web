export type DashData = {
  totalItemCost: number
  totalExpensesCost: number
  totalSales: number
  salesByMonth: SalesByMonth[]
}

export type SalesByMonth = {
  month: number
  value: number
}

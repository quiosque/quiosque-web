import { createFileRoute } from '@tanstack/react-router'
import ListSalesScreen from '@/domains/sales/screens/list'

export const Route = createFileRoute('/_auth/sales/list')({
  component: ListSalesScreen,
})

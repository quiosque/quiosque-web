import ListExpensesScreen from '@/domains/expenses/screens/list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/expenses/list')({
  component: ListExpensesScreen,
})

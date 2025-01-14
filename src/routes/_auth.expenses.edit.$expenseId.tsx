import { createFileRoute } from '@tanstack/react-router'
import EditExpenseScreen from '@/domains/expenses/screens/edit'

export const Route = createFileRoute('/_auth/expenses/edit/$expenseId')({
  component: EditExpenseScreen,
})

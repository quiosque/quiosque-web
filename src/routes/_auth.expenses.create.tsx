import { createFileRoute } from '@tanstack/react-router'
import CreateExpenseScreen from '@/domains/expenses/screens/create'

export const Route = createFileRoute('/_auth/expenses/create')({
  component: CreateExpenseScreen,
})

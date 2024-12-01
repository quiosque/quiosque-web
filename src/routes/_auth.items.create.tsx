import CreateItemScreen from '@/domains/items/screens/create'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/items/create')({
  component: CreateItemScreen,
})

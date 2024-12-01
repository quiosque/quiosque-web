import ListItemsScreen from '@/domains/items/screens/list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/items/list')({
  component: ListItemsScreen,
})

import { createFileRoute } from '@tanstack/react-router'
import EditItemScreen from '@/domains/items/screens/edit'

export const Route = createFileRoute('/_auth/items/edit/$itemId')({
  component: EditItemScreen,
})

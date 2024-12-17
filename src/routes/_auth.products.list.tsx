import { createFileRoute } from '@tanstack/react-router'
import ListProductsScreen from '@/domains/products/screens/list'

export const Route = createFileRoute('/_auth/products/list')({
  component: ListProductsScreen,
})

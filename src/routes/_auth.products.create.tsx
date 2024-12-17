import { createFileRoute } from '@tanstack/react-router'
import CreateProductsScreen from '@/domains/products/screens/create'

export const Route = createFileRoute('/_auth/products/create')({
  component: CreateProductsScreen,
})

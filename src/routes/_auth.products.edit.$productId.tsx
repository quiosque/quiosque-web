import { createFileRoute } from '@tanstack/react-router'
import EditProductsScreen from '@/domains/products/screens/edit'

export const Route = createFileRoute('/_auth/products/edit/$productId')({
  component: EditProductsScreen,
})

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sales/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_auth/sales/create!'
}

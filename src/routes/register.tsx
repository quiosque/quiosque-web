import CreateAccountScreen from '@/domains/auth/createAccountScreen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: CreateAccountScreen,
})

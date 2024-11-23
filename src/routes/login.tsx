import { createFileRoute } from '@tanstack/react-router'
import LoginScreen from '@/domains/auth/loginScreen'

export const Route = createFileRoute('/login')({
  component: LoginScreen,
})

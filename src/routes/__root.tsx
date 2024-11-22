import { createRootRoute } from '@tanstack/react-router'
import AuthScreen from '@/domains/auth/screen'

export const Route = createRootRoute({
  component: AuthScreen,
})

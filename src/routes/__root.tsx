import React from 'react'
import {Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import LoginScreen from '@/domains/auth/loginScreen'

export const Route = createRootRoute({
  component: RootRoute,
  notFoundComponent: LoginScreen,
})

function RootRoute() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' initialIsOpen={true}/>
    </>
  )
}

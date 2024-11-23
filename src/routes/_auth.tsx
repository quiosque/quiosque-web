import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

// TODO: Implement auth context and apply to this route soon
// TODO: Use js-cookies to persist the sidebar state
function RouteComponent() {
  return (
    <SidebarProvider defaultOpen>
      <Outlet />
      <AppSideBar />
    </SidebarProvider>
  );
}

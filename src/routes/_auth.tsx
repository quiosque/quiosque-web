import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useQuiosqueStore } from "@/store";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  beforeLoad: async () => {
    const { user } = useQuiosqueStore.getState() 
    console.log({user})
    if (!user) {
      throw redirect({
        to: '/login',
      })
    }
  }
});

// TODO: Implement auth context and apply to this route soon
// TODO: Use js-cookies to persist the sidebar state
function RouteComponent() {
  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSideBar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}

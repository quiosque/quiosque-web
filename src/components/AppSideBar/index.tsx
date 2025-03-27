import React, { useState } from "react";
import { MENU_GROUP_ITEMS } from "./utils/items";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import QuiosqueLogo from "@/assets/quiosque.svg";
import { Logo, LogoLink } from "./styles";
import { CreateSale } from "@/domains/sales/screens/create";
import { Button } from "../ui/button";
import { useQuiosqueStore } from "@/store";
import { useNavigate } from "@tanstack/react-router";
import { LogOutIcon } from "lucide-react";

const generateGetStyle = (currentRoute: string) => (url: string) => ({
  backgroundColor: currentRoute.includes(url)
    ? "rgba(0, 0, 0, 0.1)"
    : "transparent",
  borderRadius: 4,
});

function AppSidebar() {
  const navigate = useNavigate({ from: "/" });
  const [currentRoute, setCurrentRoute] = useState(window.location.href);
  const clearUser = useQuiosqueStore((state) => state.clearUser);

  const handleLogout = () => {
    clearUser();
    navigate({ to: "/login" });
  }

  return (
    <Sidebar>
      <>
        <SidebarContent>
          <SidebarGroup className="gap-6">
            <LogoLink to="/dashboard">
              <Logo src={QuiosqueLogo} alt="Quiosque Inc." />
            </LogoLink>
            <CreateSale />
            <SidebarGroupContent>
              <SidebarMenu>
                {MENU_GROUP_ITEMS.map((group, index) => (
                  <React.Fragment key={`${group.group_title}-${index}`}>
                    {group.group_title && (
                      <SidebarGroupLabel key={group.group_title}>
                        {group.group_title}
                      </SidebarGroupLabel>
                    )}
                    {group.items.map((item) => (
                      <SidebarMenuItem
                        key={item.title}
                        style={generateGetStyle(currentRoute)(item.url)}
                      >
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.url}
                            onClick={() => setCurrentRoute(item.url)}
                          >
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </React.Fragment>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <hr/>
        <div className="flex flex-col w-full p-2 items-center justify-start">
          <Button className="w-full max-h-[40px] m-3 text-left flex justify-start p-2" variant="outline" onClick={handleLogout}><LogOutIcon /> Sair</Button>
        </div>
      </>
    </Sidebar>
  );
}

export default AppSidebar;

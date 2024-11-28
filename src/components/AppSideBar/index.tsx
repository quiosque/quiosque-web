import React from "react";
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

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className='gap-6'>
          <LogoLink to='/dashboard'>
            <Logo src={QuiosqueLogo} alt="Quiosque Inc." />
          </LogoLink>
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
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
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
    </Sidebar>
  );
}

export default AppSidebar;

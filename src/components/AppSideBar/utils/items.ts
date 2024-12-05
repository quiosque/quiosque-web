import { ChartLine, LucideIcon, PackagePlus, PackageOpen, ShoppingBag, Plus } from "lucide-react";

export type MenuGroupItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type MenuGroup = {
  group_title?: string;
  items: MenuGroupItem[];
};

export const MENU_GROUP_ITEMS: Array<MenuGroup> = [
  {
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: ChartLine,
      },
    ],
  },
  {
    group_title: "Items",
    items: [
      {
        title: "Listar itens",
        url: "/items/list",
        icon: PackageOpen,
      },
      {
        title: "Cadastrar item",
        url: "/items/create",
        icon: PackagePlus,
      },
    ],
  },
  {
    group_title: "Produtos",
    items: [
      {
        title: "Listar produtos",
        url: "/products/list",
        icon: ShoppingBag,
      },
      {
        title: "Cadastrar produto",
        url: "/products/create",
        icon: Plus,
      },
    ],
  }
];

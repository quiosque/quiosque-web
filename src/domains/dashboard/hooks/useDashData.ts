import { useQuery } from "@tanstack/react-query";
import getDashData from "../services/getData";
import { DashData } from "../types";
import { useItems } from "@/domains/items/hooks";
import { Item } from "@/domains/items/types";
import { useMemo } from "react";
import useSales from "@/domains/sales/hooks/useSales";

const serializeData = (itemsData: Item[], dashData?: DashData, salesData ) => {
  const itemTotalQuantity = itemsData?.reduce((acc, item) => acc + item.quantity, 0);

  return {
    salesByMonth: dashData?.salesByMonth ?? []
    ,
    itemsTotalCost:  dashData?.totalItemCost ?? 0
    ,
    itemTotalQuantity:  itemTotalQuantity
    ,
    totalExpensesCost: dashData?.totalExpensesCost ?? 0,
    totalSales: salesData?.reduce((acc, sale) => acc + sale.total_value, 0).toFixed(2) ?? 0,
  }
}

function useDashData() {
  const { data: itemsData } = useItems();
  const { data: salesData } = useSales();
  const { data: dashData, error, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashData(),
    refetchInterval: 4000,
  });

  const data = useMemo(() => serializeData(itemsData, dashData, salesData), [dashData, itemsData, salesData]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useDashData
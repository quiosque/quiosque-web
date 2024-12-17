import { useQuery } from "@tanstack/react-query";
import getDashData from "../services/getData";
import { DashData } from "../types";
import { useItems } from "@/domains/items/hooks";
import { Item } from "@/domains/items/types";

const serializeData = (itemsData: Item[], dashData?: DashData ) => {
  const itemTotalQuantity = itemsData.reduce((acc, item) => acc + item.quantity, 0);

  return {
    salesByMonth: dashData?.salesByMonth ?? []
    ,
    itemsTotalCost:  dashData?.totalItemCost ?? 0
    ,
    itemTotalQuantity:  itemTotalQuantity
    ,
    totalExpensesCost: dashData?.totalExpensesCost ?? 0
  }
}

function useDashData() {
  const { data: itemsData } = useItems();
  const { data: dashData, error, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashData(),
  });

  const data = serializeData(itemsData, dashData);

  return {
    data,
    error,
    isLoading,
  };
}

export default useDashData
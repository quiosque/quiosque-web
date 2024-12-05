import { useQuery } from "@tanstack/react-query";
import getItemDetails from "../services/getItemById";

const DEFAULT_ITEM_DATA = {
  name: "",
  description: "",
  quantity: 1,
  quantity_min: 1,
  measure: "",
  cost: "R$ 0,00",
};

function useItemDetails(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItemDetails(id)
  });

  return {
    data: data ?? DEFAULT_ITEM_DATA,
    isLoading,
  };
}

export default useItemDetails;

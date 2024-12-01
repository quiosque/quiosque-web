import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services";

function useItems() {
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
    refetchInterval: 10000,
  });

  return {
    data: data ?? [],
    isLoading,
  };
}

export default useItems;
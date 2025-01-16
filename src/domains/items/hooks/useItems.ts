import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services";

function useItems() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
    refetchInterval: 100000,
  });

  return {
    data: data ?? [],
    isLoading,
    refetch
  };
}

export default useItems;
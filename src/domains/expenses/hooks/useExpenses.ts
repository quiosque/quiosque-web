import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../services";

function useExpenses() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["expenses"],
    queryFn: () => getExpenses(),
    refetchInterval: 100000,
  });

  return {
    data: data ?? [],
    isLoading,
    refetch
  };
}

export default useExpenses;
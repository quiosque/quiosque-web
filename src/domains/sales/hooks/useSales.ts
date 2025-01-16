import { useQuery } from "@tanstack/react-query";
import getSales from "../services/getSales";

function useSales() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["sales"],
    queryFn: () => getSales(),
    refetchInterval: 100000,
  });

  return {
    data: data ?? [],
    isLoading,
    refetch
  };
}

export default useSales;
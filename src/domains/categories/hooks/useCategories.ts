import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services";
import { useMemo } from "react";

function useCategories() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    refetchInterval: 10000,
  });

  const categoriesFormOptions = useMemo(() => data?.map((category) => ({
    label: category.name,
    value: category.id
  })),[data])

  return {
    data: data ?? [],
    isLoading,
    refetch,
    categoriesFormOptions: categoriesFormOptions ?? []
  };
}

export default useCategories;
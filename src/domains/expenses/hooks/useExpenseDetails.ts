import { useQuery } from "@tanstack/react-query";
import getExpenseDetails from "../services/getExpenseById";
import { useMemo } from "react";

const DEFAULT_EXPENSE_DATA = {
  name: "",
  description: "",
  type: "",
  recurrency: "",
  cost: "R$ 0,00",
};

function useExpenseDetails(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["expenseDetails"],
    queryFn: () => getExpenseDetails(id),
  });

  const details = useMemo(
    () => (data ?? DEFAULT_EXPENSE_DATA),
    [data]
  );

  return {
    data: details,
    isLoading
  };
}

export default useExpenseDetails;

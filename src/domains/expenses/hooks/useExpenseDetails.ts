import { useQuery } from "@tanstack/react-query";
import getExpenseDetails from "../services/getExpenseById";
import { useEffect, useMemo } from "react";
import { currencyFormat } from "@/formatters";
import { useForm } from "react-hook-form";
import CreateExpenseSchema from "../utils/createSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const DEFAULT_EXPENSE_DATA = {
  name: "",
  description: "",
  type: "",
  recurrency: "",
  cost: "R$ 0",
};

function useExpenseDetails(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["expenseDetails"],
    queryFn: () => getExpenseDetails(id),
  });

  const defaultValues = useMemo(
    () =>
      data
        ? {
            name: data.name,
            description: data.description,
            cost: currencyFormat(Number(data.cost)),
            type: data.type,
            recurrency: data.recurrency,
          }
        : DEFAULT_EXPENSE_DATA,
    [data]
  );

  const form = useForm<z.infer<typeof CreateExpenseSchema>>({
    resolver: zodResolver(CreateExpenseSchema),
    defaultValues,
  });

  useEffect(() => {
    if (data) {
      form.reset(defaultValues);
    }
  }, [data, form, defaultValues]);

  return {
    form,
    isLoading,
  };
}

export default useExpenseDetails;

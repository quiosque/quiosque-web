import React from "react";
import CreateExpenseSchema from "../utils/createSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import FormCombobox from "@/components/FormCombobox";
import { useEditExpenseMutation, useExpenseDetails } from "../hooks";
import { currencyToNumber } from "@/formatters";
import RadioGroup from "@/components/RadioGroup";
import { useParams } from "@tanstack/react-router";
import { Skeleton } from "@/components/ui/skeleton";

const RECURRENCY_UNITS_OPTIONS = [
  { label: "Diária", value: "Diária" },
  { label: "Semanal", value: "Semanal" },
  { label: "Mensal", value: "Mensal" },
  { label: "Anual", value: "Anual" },
];

const TYPE_UNITS_OPTIONS = [
  { label: "Investimento", value: "Investimento" },
  { label: "Despesa recorrente", value: "Despesa recorrente" },
  { label: "Gasto único", value: "Gasto único" },
];

function EditExpenseScreen() {
  const { mutate } = useEditExpenseMutation();
  const { expenseId } = useParams({ strict: false });
  const { form, isLoading } = useExpenseDetails(Number(expenseId));

  const onSubmit = (data: z.infer<typeof CreateExpenseSchema>) => {
    const formattedData = {
      ...data,
      cost: currencyToNumber(data.cost),
      id: Number(expenseId),
    };

    mutate(formattedData);
  };

  const handleRecurrencyChange = (value: string) => {
    form.setValue("recurrency", value);
  };

  if (isLoading) return <Skeleton className="h-full w-full" />;

  return (
    <div className="w-screen h-screen p-2 flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (fieldValidationErrors) =>
            console.log(fieldValidationErrors)
          )}
          className="space-y-8 max-w-4xl w-full"
        >
          <FormInput
            control={form.control}
            label="Nome"
            placeholder="Nome"
            name="name"
          />

          <FormInput
            control={form.control}
            label="Descrição"
            placeholder="Descrição da despesa"
            name="description"
            description="Descreva a despesa para facilitar a identificação."
          />

          <FormInput
            control={form.control}
            label="Custo da despesa"
            placeholder="R$ 0,00"
            description="Custo total da despesa referida."
            name="cost"
            inputProps={{ type: "currency" }}
          />

          <div className="flex flex-col gap-2">
            <FormCombobox
              control={form.control}
              label="Tipo de despesa"
              placeholder="Selecione"
              name="type"
              description="Defina abaixo qual o tipo de recorrência."
              options={TYPE_UNITS_OPTIONS}
            />

            {form.watch("type") === "Despesa recorrente" && (
              <RadioGroup
                options={RECURRENCY_UNITS_OPTIONS}
                defaultValue={RECURRENCY_UNITS_OPTIONS[0].value}
                onChange={handleRecurrencyChange}
              />
            )}
          </div>

          <Button type="submit">Finalizar</Button>
        </form>
      </Form>
    </div>
  );
}

export default EditExpenseScreen;

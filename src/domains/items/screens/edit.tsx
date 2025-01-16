import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateItemSchema from "../utils/createSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import FormCombobox from "@/components/FormCombobox";
import { useEditItemMutation, useItemDetails } from "../hooks";
import { currencyFormat, currencyToNumber } from "@/formatters";
import { useParams } from "@tanstack/react-router";
import { Skeleton } from "@/components/ui/skeleton";

function EditItemScreen() {
  const { itemId } = useParams({ strict: false });
  const { mutate } = useEditItemMutation();
  const { data, isLoading } = useItemDetails(Number(itemId));

  const defaultValues = {
      name: data.name,
      description: data.description,
      quantity: data.quantity,
      quantity_min: data.quantity_min,
      cost: currencyFormat(Number(data.cost)),
      measure: data.measure,
  }

  const form = useForm<z.infer<typeof CreateItemSchema>>({
    resolver: zodResolver(CreateItemSchema),
    values: defaultValues,
  });

  const onSubmit = (data: z.infer<typeof CreateItemSchema>) => {
    const formattedData = {
      ...data,
      cost: currencyToNumber(data.cost),
      id: Number(itemId),
    };

    mutate(formattedData);
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
            placeholder="Descrição do item"
            name="description"
            description="Descreva o item criado para facilitar a identificação."
          />

          <FormInput
            control={form.control}
            label="Quantidade"
            placeholder="Quantidade"
            name="quantity"
            inputProps={{ type: "number", min: 1 }}
          />

          <FormInput
            control={form.control}
            label="Quantidade mínima"
            placeholder="Quantidade mínima"
            description="Quantidade mínima para alerta de reposição."
            name="quantity_min"
            inputProps={{ type: "number", min: 1 }}
          />

          <FormInput
            control={form.control}
            label="Custo unitário"
            placeholder="R$ 0,00"
            description="Custo de cada unidade do item."
            name="cost"
            inputProps={{ type: "currency" }}
          />

          <FormCombobox
            control={form.control}
            label="Unidade de medida"
            placeholder="Unidade de medida"
            name="measure"
            description="Defina em qual unidade de medida o item será contabilizado."
            options={[
              { label: "Unidade", value: "UN" },
              { label: "Quilograma", value: "KG" },
              { label: "Litro", value: "L" },
              { label: "Metro", value: "M" },
              { label: "Metro quadrado", value: "M2" },
              { label: "Metro cúbico", value: "M3" },
            ]}
          />

          <Button type="submit">Finalizar</Button>
        </form>
      </Form>
    </div>
  );
}

export default EditItemScreen;

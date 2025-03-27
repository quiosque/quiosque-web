import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateItemSchema from "../utils/createSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import FormCombobox from "@/components/FormCombobox";
import { useCreateItemMutation } from "../hooks";
import { currencyToNumber } from "@/formatters";

function CreateItemScreen() {
  const { mutate } = useCreateItemMutation();
  const form = useForm<z.infer<typeof CreateItemSchema>>({
    resolver: zodResolver(CreateItemSchema),
    defaultValues: {
      username: "",
      description: "",
      quantity: 1,
      measure: "",
      cost: "R$ 0,00",
    },
  });

  const onSubmit = (data: z.infer<typeof CreateItemSchema>) => {
    const formattedData = { ...data, cost: currencyToNumber(data.cost) };

    mutate(formattedData);
  };

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
              { label: "Unidade", value: "un" },
              { label: "Quilograma", value: "kg" },
              { label: "Litro", value: "l" },
              { label: "Metro", value: "m" },
              { label: "Metro quadrado", value: "m2" },
              { label: "Metro cúbico", value: "m3" },
            ]}
          />

          <Button type="submit">Finalizar</Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateItemScreen;

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateItemSchema from "../utils/createSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "../components/FormInput";

function CreateItemScreen() {
  const form = useForm<z.infer<typeof CreateItemSchema>>({
    resolver: zodResolver(CreateItemSchema),
    defaultValues: {
      name: "",
      description: "",
      quantity: 0,
    }
  });

  const onSubmit = (any: any) => {
    console.log(any);
  };

  return (
    <div className="w-screen h-screen p-2 flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
            inputProps={{ type: "number" }}
          />

          <Button type="submit">Finalizar</Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateItemScreen;

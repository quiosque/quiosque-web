// @ts-nocheck
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateProductSchema from "../utils/createSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import FormCombobox from "@/components/FormCombobox";
import { useEditProductMutation } from "../hooks";
import { currencyFormat, currencyToNumber } from "@/formatters";
import { useCategories } from "@/domains/categories/hooks";
import ItemsTable from "../components/ItemsTable";
import useProductsDetails from "../hooks/useProductsDetails";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "@tanstack/react-router";

function EditItemScreen() {
  const { productId } = useParams({ strict: false });
  const { categoriesFormOptions, isLoading: isLoadingCategories } = useCategories();
  const { mutate } = useEditProductMutation();
  const { data, isLoading } = useProductsDetails(Number(productId));

  const defaultValues = {
    id: Number(productId),
    name: data.name,
    description: data.description,
    price: currencyFormat(Number(data.price)),
    category_id: data.category_id,
    items: data.items,
  };

  const form = useForm<z.infer<typeof CreateProductSchema>>({
    resolver: zodResolver(CreateProductSchema),
    values: defaultValues,
  });

  const onSubmit = (data: z.infer<typeof CreateProductSchema>) => {
    const formattedData = {
      ...data,
      price: currencyToNumber(data.price),
    };

    mutate(formattedData);
  };

  if (isLoading || isLoadingCategories) return <Skeleton className="h-full w-full" />;

  return (
    <div className="w-screen h-screen p-8 flex flex-col items-center justify-start">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (fieldValidationErrors) =>
            console.log(fieldValidationErrors)
          )}
          className="space-y-8 max-w-4xl w-full p-8"
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
            description="Descreva o produto para facilitar a identificação."
          />

          <FormInput
            control={form.control}
            label="Preço de comercialização"
            placeholder="R$ 0,00"
            description="Preço que cada unidade do produto será vendida."
            name="price"
            inputProps={{ type: "currency" }}
          />

          <FormCombobox
            control={form.control}
            label="Categoria"
            placeholder="Categoria"
            name="category_id"
            description="Defina em qual categoria o produto será alocado."
            options={categoriesFormOptions}
          />

          <ItemsTable form={form} />

          <Button type="submit">Finalizar</Button>
        </form>
      </Form>
    </div>
  );
}

export default EditItemScreen;

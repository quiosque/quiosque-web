import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign } from "lucide-react";
import useSaleMutation from "../hooks/useNewSale";
import { Calendar } from "@/components/ui/calendar";
import { ProductsResponse } from "@/domains/products/types";
import { ProductsSelection } from "../components/ProductsSelection";
import { Label } from "@/components/ui/label";
import TemplateModal from "@/components/Modal";
import { useProducts } from "@/domains/products/hooks";
import { useForm } from "react-hook-form";

type Products = ProductsResponse & { quantity: number };

export function CreateSale() {
  const [soldAt, setSoldAt] = useState(new Date());
  const { data: productsCollection } = useProducts();
  const { mutate } = useSaleMutation();

  const form = useForm({
    defaultValues: {
      productsIds: [""],
      soldAt: new Date(),
    },
  });

  //@ts-expect-error - Dont know the type of the date coming from the calendar lib
  const handleSoldAtDate = (newSoldAt) => {
    const value = newSoldAt ?? new Date();
    form.setValue("soldAt", value);
    setSoldAt(value);
  };

  return (
    <TemplateModal>
      <TemplateModal.Trigger>
        <Button>
          Realizar venda <BadgeDollarSign />{" "}
        </Button>
      </TemplateModal.Trigger>
      <TemplateModal.Content>
        <div className="w-full flex flex-col items-start justify-center gap-4 pt-4">
          <ProductsSelection
            onSelect={(productsIds) =>
              form.setValue("productsIds", productsIds)
            }
            collection={productsCollection}
          />
          <Label htmlFor="sold_at">Data da venda</Label>
          <Calendar
            id="sold_at"
            mode="single"
            selected={soldAt}
            onSelect={handleSoldAtDate}
            className="rounded-md border flex justify-center w-full"
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
          />
        </div>
      </TemplateModal.Content>
    </TemplateModal>
  );
}

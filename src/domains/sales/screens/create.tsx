import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign } from "lucide-react";
import useSaleMutation from "../hooks/useNewSale";
import { Calendar } from "@/components/ui/calendar";
import { ProductsResponse } from "@/domains/products/types";
import { ProductsSelection } from "../components/ProductsSelection";
import { Label } from "@/components/ui/label";
import TemplateModal from "@/components/Modal";
import { useProducts } from "@/domains/products/hooks";

type Products = Array<ProductsResponse & { quantity: number }>;

const getSalesValue = (products: Products) => {
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return total.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export function CreateSale() {
  const [soldAt, setSoldAt] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { data: productsCollection } = useProducts();
  const { mutate } = useSaleMutation();
  const [salesProducts, setSalesProducts] = useState<Products>([]);

  const saleTotalValue = useMemo(() => getSalesValue(salesProducts), [salesProducts]);

  //@ts-expect-error - Dont know the type of the date coming from the calendar lib
  const handleSoldAtDate = (newSoldAt) => {
    const value = newSoldAt ?? new Date();
    setSoldAt(value);
  };

  const handleProductSelection = useCallback((products: Products) => {
    setSalesProducts(products);
  }, []);

  const handleSubmit = () => {
    const parsedData = {
      store_id: 1,
      sold_at: soldAt.toISOString(),
      total_value: salesProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0),
      products: salesProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity
      })),
      user_id: 1
    };

    mutate(parsedData);
    setOpen(false);
  }

  return (
    <TemplateModal open={open} onOpenChange={setOpen}>
      <TemplateModal.Trigger>
        <Button>
          Realizar venda <BadgeDollarSign />{" "}
        </Button>
      </TemplateModal.Trigger>
      <TemplateModal.Content>
        <div className="w-full flex flex-col items-start justify-center gap-4 pt-4">
          <TemplateModal.Title>Realizar venda</TemplateModal.Title>
          <ProductsSelection
            onSelect={handleProductSelection}
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

        <p style={{ color: '#64748B', fontSize: 16, fontWeight: 'regular' }}>
          Valor total dos produtos: R$ {saleTotalValue}
        </p>

        <Button onClick={handleSubmit}>Finalizar venda</Button>
      </TemplateModal.Content>
    </TemplateModal>
  );
}

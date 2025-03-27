import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BadgeDollarSign, ShoppingCart } from "lucide-react";
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

  return total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export function CreateSale() {
  const [soldAt, setSoldAt] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { data: productsCollection } = useProducts();
  const { mutate } = useSaleMutation();
  const [salesProducts, setSalesProducts] = useState<Products>([]);
  const [tab, setTab] = useState("products");

  const saleTotalValue = useMemo(
    () => getSalesValue(salesProducts),
    [salesProducts]
  );

  //@ts-expect-error - Dont know the type of the date coming from the calendar lib
  const handleSoldAtDate = (newSoldAt) => {
    const value = newSoldAt ?? new Date();
    setSoldAt(value);
  };

  const handleProductSelection = useCallback((products: Products) => {
    setSalesProducts(products);
  }, []);

  const handleSubmit = () => {
    if (tab === "products") {
      setTab("sold_at");
      return;
    }

    const offset = soldAt.getTimezoneOffset() * 60000;
    const utcDate = new Date(soldAt.getTime() - offset)

    const parsedData = {
      store_id: 1,
      sold_at: utcDate.toISOString().split('T')[0],
      total_value: salesProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0),
      products: salesProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
      user_id: 1,
    };

    mutate(parsedData, {
      onSuccess: () => {
        setOpen(false);
        setSalesProducts([]);
        setTab("products");
        setSoldAt(new Date());
      },
      onError: (error) => {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    return(
      () => {
        setTab("products");
        setSoldAt(new Date());
        setSalesProducts([]);
      } 
    )
  }, [])

  return (
    <TemplateModal open={open} onOpenChange={setOpen}>
      <TemplateModal.Trigger>
        <Button className="w-full">
        <ShoppingCart /> Realizar venda {" "}
        </Button>
      </TemplateModal.Trigger>
      <TemplateModal.Content>
        <div className="w-full flex flex-col items-start justify-center gap-4 pt-4">
          <TemplateModal.Title>
            <div className="flex flex-row items-center gap-2">
              {tab === "sold_at" && (
                <ArrowLeft
                  className="cursor-pointer text-[#a5a8af] hover:text-gray-600"
                  onClick={() => {
                    setTab("products");
                  }}
                />
              )}
              {tab === "products"
                ? "Selecione os produtos"
                : "Selecione a data"}
            </div>
          </TemplateModal.Title>
          {tab === "products" ? (
            <ProductsSelection
              onSelect={handleProductSelection}
              collection={productsCollection?.map((product) => ({
                ...product,
                category: product.category ?? "",
              }))}
            />
          ) : (
            <>
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
            </>
          )}
        </div>

        <p style={{ color: "#0f1114", fontSize: 16, fontWeight: "regular" }}>
          Valor total dos produtos: R$ {saleTotalValue}
        </p>

        <Button onClick={handleSubmit} disabled={!salesProducts.length}>
          {tab === "sold_at" ? "Finalizar venda" : "Avançar"}
        </Button>
      </TemplateModal.Content>
    </TemplateModal>
  );
}

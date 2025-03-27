// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { toOptions } from "@/helpers/toOptions";
import { Label } from "@/components/ui/label";
import ProductItem from "./ProductItem";
import { ProductsResponse } from "@/domains/products/types";

type Products = Array<ProductsResponse & { quantity: number }>;

type CollectionItem = {
  id: number;
} & {
  [key: string]: string | number;
};

type ProductsSelectionProps = {
  onSelect: (value: Products) => void;
  collection: CollectionItem[];
};

const createGetProductHandler =
  (collection: CollectionItem[]) => (productId: number) => {
    return collection.find(
      (product: CollectionItem) => product.id === productId
    );
  };

const formatteProducts = (
  products: CollectionItem[],
  collection: CollectionItem[]
) => {
  return products.map((product) => {
    const collectionProduct = collection.find(
      (colProduct) => colProduct.id === product.id
    );

    return {
      ...collectionProduct,
      ...product,
    };
  });
};

export function ProductsSelection(props: ProductsSelectionProps) {
  const { onSelect, collection } = props;
  const [selectedProducts, setSelectedProducts] = useState<CollectionItem[]>(
    []
  );

  const options = useMemo(() => toOptions(collection), [collection]);

  const handleSelect = (productsIds: string[]) => {
    setSelectedProducts(
      productsIds.map((productId) => ({ id: Number(productId), quantity: 1 }))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== Number(productId))
    );
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setSelectedProducts(
      selectedProducts.map((product) =>
        product.id === Number(productId) ? { ...product, quantity } : product
      )
    );
  };

  const getProduct = createGetProductHandler(collection);

  useEffect(
    () => onSelect(formatteProducts(selectedProducts, collection)),
    [selectedProducts, onSelect, collection]
  );

  return (
    <div className="flex flex-col gap-4">
      <div>
      <Label>Selecione os produtos</Label>
      <MultiSelect options={options} onSelect={handleSelect} />
      </div>

      <div className="min-h-[300px] max-h-[416px] pt-1 p-4 overflow-auto rounded" style={{
        backgroundColor: "rgb(250 250 250 / var(--tw-bg-opacity, 1))"
      }}>
        {selectedProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={getProduct(product.id)}
            onChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        ))}
        {selectedProducts.length === 0 && (
          <div className="text-center text-slate-400 mt-20">
            Nenhum produto selecionado
          </div>
        )}
      </div>
    </div>
  );
}

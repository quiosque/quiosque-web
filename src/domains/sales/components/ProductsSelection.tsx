import React, { useMemo, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { toOptions } from "@/helpers/toOptions";
import { Label } from "@/components/ui/label";
import ProductItem from "./ProductItem";

type CollectionItem = {
  id: number;
} & {
  [key: string]: string | number;
};

type ProductsSelectionProps = {
  onSelect: (productsIds: string[]) => void;
  collection: CollectionItem[];
};

const createGetProductHandler =
  (collection: CollectionItem[]) => (productId: string) => {
    return collection.find(
      (product: CollectionItem) => product.id === Number(productId)
    );
  };

export function ProductsSelection(props: ProductsSelectionProps) {
  const { onSelect, collection } = props;
  const [productsIds, setProductsIds] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<CollectionItem[]>(
    []
  );

  const options = useMemo(() => toOptions(collection), [collection]);

  const handleSelect = (productsIds: string[]) => {
    setProductsIds(productsIds);
    setSelectedProducts(
      productsIds.map((productId) => ({ id: Number(productId), quantity: 1 }))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setProductsIds(productsIds.filter((id) => id !== productId));
    setSelectedProducts(selectedProducts.filter((product) => product.id !== Number(productId)));
  }

  const handleQuantityChange = (productId: string, quantity: number) => {
    setSelectedProducts(
      selectedProducts.map((product) =>
        product.id === Number(productId) ? { ...product, quantity } : product
      )
    );
  };

  const getProduct = createGetProductHandler(collection);

  return (
    <div>
      <Label>Selecione os produtos</Label>
      <MultiSelect options={options} onSelect={handleSelect} />

      <div>
        {productsIds.map((productId) => (
          <ProductItem
            key={productId}
            product={getProduct(productId)}
            onChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    onSelect(formatteProducts(selectedProducts, collection));
  }, [selectedProducts, onSelect, collection]);

  return (
    <div>
      <Label>Selecione os produtos</Label>
      <MultiSelect options={options} onSelect={handleSelect} />

      <div>
        {selectedProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={getProduct(product.id)}
            onChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
}

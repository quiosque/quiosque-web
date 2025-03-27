import { useQuery } from "@tanstack/react-query";
import getProductById from "../services/getProductById";
import { useMemo } from "react";

const DEFAULT_PRODUCT_DATA = {
  name: "",
  description: "",
  price: "R$ 0,00",
  category_id: null,
  items: [],
};

function useProductsDetails(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["productsDetails"],
    queryFn: () => getProductById(id),
  });

  const details = useMemo(() => ({
    ...data,
    category_id: data?.categoryId ?? null,
    items: data?.items?.map((item) => ({
      item_id: item.id,
      item_quantity: item.item_quantity,
    })) ?? []
  }), [data])

  return {
    data: details ?? DEFAULT_PRODUCT_DATA,
    isLoading,
  };
}

export default useProductsDetails;

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services";
import { useMemo } from "react";
import { useCategories } from "@/domains/categories/hooks";

const useProducts = () => {
  const {
    data: categorys,
    isLoading: isLoadingCategorys,
    refetch: refetchCategorys,
  } = useCategories();

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    refetchInterval: 100000,
  });

  const products = useMemo(() => {
    if (isLoadingProducts || isLoadingCategorys || !categorys || !productsData)
      return [];

    return productsData?.map((product) => {
      const category = categorys.find(
        (category) => category.id === product.categoryId
      );

      return {
        ...product,
        category: category?.name,
      };
    }) ?? [];
  }, [productsData, categorys, isLoadingProducts, isLoadingCategorys]);

  const handleRefetch = () => {
    refetchProducts();
    refetchCategorys();
  };

  return {
    data: products ?? [],
    isLoading: isLoadingProducts,
    handleRefetch,
  };
};

export default useProducts;

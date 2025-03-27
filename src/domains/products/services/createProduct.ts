import httpClient from "@/infrastructure/axios";
import { ProductFormValues } from "../types";

const endpoint: string = "/Product";

const createProduct = async (data: Omit<ProductFormValues, "store_id">) => {
  try {
    const { data: response } = await httpClient.post(
      `${endpoint}`,
      {
        ...data,
        store_id: Quiosque.store_id
      }
    )

    return response;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
};

export default createProduct;

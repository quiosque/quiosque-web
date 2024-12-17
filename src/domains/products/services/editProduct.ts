import httpClient from "@/infrastructure/axios";
import { ProductFormValues } from "../types";

const editProduct = async (data: Omit<ProductFormValues, "store_id">) => {
  try {
    const { data: response } = await httpClient.put("/Product/", data);

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default editProduct;

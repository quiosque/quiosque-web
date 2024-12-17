import httpClient from "@/infrastructure/axios";
import { Category } from "../types";

const createCategory = async (data: Omit<Category, 'id'>) => {
  try {
    const { data: response } = await httpClient.post(
      '/Category',
      {
        data
      }
    )

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default createCategory;

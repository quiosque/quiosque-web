import httpClient from "@/infrastructure/axios";
import { Category } from "../types";

const editCategory = async (data: Category) => {
  try {
    const { data: response } = await httpClient.put("/Category", data);

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default editCategory;

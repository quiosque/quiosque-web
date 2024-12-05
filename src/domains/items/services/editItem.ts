import httpClient from "@/infrastructure/axios";
import { Item } from "../types";

const editItem = async (data: Item) => {
  try {
    const { data: response } = await httpClient.put("/Item/", data);

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default editItem;

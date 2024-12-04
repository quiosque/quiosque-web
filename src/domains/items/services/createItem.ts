import httpClient from "@/infrastructure/axios";
import { Item } from "../types";

const endpoint: string = "/Item";

const createItem = async (data: Item) => {
  try {
    const { data: response } = await httpClient.post(
      `${endpoint}`,
      data
    )

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default createItem;

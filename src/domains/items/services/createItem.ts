import httpClient from "@/infrastructure/axios";
import { Item } from "../types";

const endpoint: string = "/Item";

const createItem = async (data: Item) => {
  try {
    const { data: response } = await httpClient.post(
      `${endpoint}`,
      {
        ...data,
        store_id: 1
      }
    )

    return response;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
};

export default createItem;

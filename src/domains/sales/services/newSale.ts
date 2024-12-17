import httpClient from "@/infrastructure/axios";
import type { Sale } from "../types";

const endpoint: string = "/Product";

const newSale = async (data: Sale) => {
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

export default newSale;

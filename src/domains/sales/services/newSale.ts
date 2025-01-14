import httpClient from "@/infrastructure/axios";
import type { Sale } from "../types";

const endpoint: string = "/Sale";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);

    if (error?.response) {
      const message = error.response.data?.message || "Erro ao realizar a venda";
      throw new Error(message);
    }
  }
};

export default newSale;

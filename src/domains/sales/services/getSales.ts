import httpClient from "@/infrastructure/axios";
import type { SaleResponseData } from "../types";

const endpoint: string = "/Sale";

const getSales = async () => {
  try {
    const { data: response } = await httpClient.get<SaleResponseData[]>(
      `${endpoint}?store_id=1`,
    )

    return response;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
};

export default getSales;

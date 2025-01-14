import httpClient from "@/infrastructure/axios";
import { Expense } from "../types";

const endpoint: string = "/Expenses";

const createExpense = async (data: Expense) => {
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

export default createExpense;

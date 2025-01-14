import httpClient from "@/infrastructure/axios";
import { Expense } from "../types";

const editExpense = async (data: Expense) => {
  try {
    const { data: response } = await httpClient.put("/Expenses/", data);

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default editExpense;

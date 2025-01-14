import httpClient from "@/infrastructure/axios";

const endpoint: string = "/Expenses";

const deleteExpense = async (id: number) => {
  try {
    const { data: response } = await httpClient.delete(
      `${endpoint}?id=${id}`,
    )

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default deleteExpense;

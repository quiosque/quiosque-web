import httpClient from "@/infrastructure/axios";

const endpoint: string = "/Item";

const deleteItem = async (id: number) => {
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

export default deleteItem;

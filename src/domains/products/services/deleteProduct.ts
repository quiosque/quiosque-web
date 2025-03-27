import httpClient from "@/infrastructure/axios";

const endpoint: string = "/Product";

const deleteProduct = async (id: number) => {
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

export default deleteProduct;

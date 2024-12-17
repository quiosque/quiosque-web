import httpClient from "@/infrastructure/axios";

const endpoint: string = "/Category";

const deleteCategory = async (id: number) => {
  try {
    const { data: response } = await httpClient.delete(
      `${endpoint}/${id}`,
    )

    return response;
  } catch (error) {
    console.error(error);

    return;
  }
};

export default deleteCategory;

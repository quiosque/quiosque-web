import httpClient from "@/infrastructure/axios";

const endpoint: string = "/User/login";

interface Data {
  email: string
  password: string
};

const login = async (data: Data) => {
  try {
    const { data: response } = await httpClient.post(
      `${endpoint}`,
      {
        ...data
      }
    )

    return response;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
};

export default login;

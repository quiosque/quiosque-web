import httpClient from "@/infrastructure/axios";
import { FormInput } from "../components/CreateAccountForm";

const endpoint: string = "/User";

const register = async (data: FormInput) => {
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

export default register;

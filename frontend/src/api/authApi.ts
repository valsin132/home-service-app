import { isAxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";
import { RegistrationValues } from "@/types/auth";

type RegisterResponse = {
  message: string;
};

const registrationErrorMessage = "Registration failed";

export const register = async (values: RegistrationValues) => {
  try {
    const response = await axiosInstance.post<RegisterResponse>("auth/register", values);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message ?? registrationErrorMessage);
    }
    throw new Error(registrationErrorMessage);
  }
};

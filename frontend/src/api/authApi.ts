import { isAxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";
import { RegistrationValues, LoginValues } from "@/types/auth";
import { User } from "@/types/user";

type RegisterResponse = {
  message: string;
};

const registrationErrorMessage = "Registration failed.";

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

type LoginResponse = {
  status: string;
  token: string;
  user: User;
};

const loginErrorMessage = "Login failed.";

export const login = async (values: LoginValues) => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>("auth/login", values);

    return {
      token: data.token,
      user: data.user,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message ?? loginErrorMessage);
    }
    throw new Error(registrationErrorMessage);
  }
};

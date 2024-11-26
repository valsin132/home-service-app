import { axiosInstance } from "./axiosInstance";
import { Business } from "../types/business";

export const fetchBusinesses = async (): Promise<Business[]> => {
  const response = await axiosInstance.get("/businesses");
  return await response.data;
};

export const fetchBusinessById = async (id: string): Promise<Business> => {
  const response = await axiosInstance.get(`/businesses/${id}`);
  return response.data;
};

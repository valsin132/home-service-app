import { axiosInstance } from "./axiosInstance";
import { Category } from "@/types/category";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");
  return await response.data;
};

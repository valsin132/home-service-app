import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/api/categoriesApi";
import { Business } from "@/types/business";
import { fetchBusinessById } from "@/api/businessesApi";

export const CATEGORY_KEY = "CATEGORY";

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORY_KEY],
    queryFn: fetchCategories,
  });
};

export const useBusiness = (businessId: string | undefined) => {
  return useQuery<Business>({
    queryKey: ["BUSINESS", businessId],
    queryFn: () => fetchBusinessById(businessId!),
    enabled: !!businessId,
  });
};

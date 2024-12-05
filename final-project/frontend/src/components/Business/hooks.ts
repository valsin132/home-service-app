import { useQuery } from "@tanstack/react-query";
import { fetchBusinessById, fetchBusinesses } from "@/api/businessesApi";
import { Business } from "@/types/business";

export const BUSINESS_KEY = "BUSINESS";

export const useBusiness = (businessId: string | undefined) => {
  return useQuery<Business>({
    queryKey: [BUSINESS_KEY, businessId],
    queryFn: () => fetchBusinessById(businessId!),
    enabled: !!businessId,
  });
};

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};

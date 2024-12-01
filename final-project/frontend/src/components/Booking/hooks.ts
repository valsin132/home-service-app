import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBooking, fetchUserBookings } from "@/api/bookingsApi";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import { BookingStatus } from "@/types/booking";

export const BOOKING_KEY = "BOOKING";

export const useUserBookings = (status: BookingStatus) => {
  const { user } = useContext(UserContext);
  const id = user!._id;
  return useQuery({
    queryKey: [BOOKING_KEY, id, status],
    queryFn: () => fetchUserBookings(id, status),
  });
};

export const usePostBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [BOOKING_KEY] }),
  });
};

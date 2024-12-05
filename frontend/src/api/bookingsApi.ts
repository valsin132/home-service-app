import { axiosInstance } from "./axiosInstance";
import { Booking, BookingStatus, PostBooking, NewBooking } from "@/types/booking";

export const fetchUserBookings = async (
  userId: string,
  status: BookingStatus,
): Promise<PostBooking[]> => {
  const response = await axiosInstance.get(`/bookings/user/${userId}/bookings`, {
    params: { status },
  });
  return response.data;
};

export const createBooking = async (booking: NewBooking): Promise<Booking> => {
  const response = await axiosInstance.post("/bookings", booking);
  return response.data;
};

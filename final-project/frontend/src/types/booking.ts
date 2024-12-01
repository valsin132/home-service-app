import { Business } from "./business";

export type BookingStatus = "confirmed" | "pending" | "completed";

export interface Booking {
  _id: string;
  businessId: string;
  date: Date | null;
  time: string;
  userEmail: string;
  userName: string;
  status: BookingStatus;
}

export interface PostBooking {
  _id: string;
  businessId: Business;
  date: Date | null;
  time: string;
  userEmail: string;
  userName: string;
  status: BookingStatus;
}

export type NewBooking = Omit<Booking, "_id">;

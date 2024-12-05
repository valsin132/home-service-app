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

// export type NewBooking = Omit<Booking, "_id">;
export interface NewBooking {
  user: string; // MongoDB ObjectId as a string
  businessId: string; // MongoDB ObjectId as a string
  date: Date | null; // ISO format date
  time: string; // e.g., "14:00"
  userEmail: string;
  userName: string;
  status: "confirmed" | "pending" | "cancelled";
}

import { RequestHandler } from "express";
import Booking from "../models/Booking";

export const createBooking: RequestHandler = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({
      message: "Error creating booking",
      error: (err as Error)?.message ?? err,
    });
  }
};

// export const getUserBookings: RequestHandler = async (req, res) => {
//   try {
//     const userBookings = await Booking.find({ userEmail: req.params.email });
//     res.json(userBookings);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching bookings for the user", error: err });
//   }
// };
export const getUserBookings: RequestHandler = async (req, res) => {
  const { userId } = req.params; // Extract userId from URL
  const { status } = req.query; // Extract status from query parameters

  try {
    const filteredBookings = await Booking.find({
      user: userId, // Match bookings by user ID
      status: status as string, // Ensure status matches the query parameter
    }).populate("businessId"); // Populate business details if referenced
    res.status(200).send(filteredBookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings for the user", error: err });
  }
};

export const deleteBooking: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting booking", error: err });
  }
};

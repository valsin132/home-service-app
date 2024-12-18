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

export const getUserBookings: RequestHandler = async (req, res) => {
  const { userId } = req.params;
  const { status } = req.query;

  try {
    const filteredBookings = await Booking.find({
      user: userId,
      status: status as string,
    }).populate("businessId");
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

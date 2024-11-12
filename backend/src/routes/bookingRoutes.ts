import express from "express";
import { getUserBookings, createBooking, deleteBooking } from "../controllers/bookingController";

const router = express.Router();

router.post("/", createBooking);

router.get("/user/:email", getUserBookings);

router.delete("/:id", deleteBooking);

export default router;

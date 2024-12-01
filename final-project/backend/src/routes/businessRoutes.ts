import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import {
  getBusiness,
  getBusinesses,
  createBusiness,
  getBusinessesByCategory,
  getBusinessesByDate,
  updateBusiness,
} from "../controllers/businessController";

const router = express.Router();

router.get("/", getBusinesses);

router.post("/", authMiddleware, createBusiness);

router.get("/:id", getBusiness);

router.get("/category/:category", getBusinessesByCategory);

router.get("/:id/bookings/date/:date", getBusinessesByDate);

router.put("/:id", authMiddleware, updateBusiness);

export default router;

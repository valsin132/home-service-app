import { RequestHandler } from "express";
import Category from "../models/Category";
import Business from "../models/Business";
import Booking from "../models/Booking";

export const getBusinesses: RequestHandler = async (req, res) => {
  const { search } = req.query;

  try {
    const query: any = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } }, // Search by business name
        { category: { $regex: search, $options: "i" } }, // Search by category
      ];
    }

    const businesses = await Business.find(query);
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses", error: err });
  }
};

export const createBusiness: RequestHandler = async (req, res) => {
  const business = req.body;
  try {
    const categoryExists = await Category.findOne({ name: business.category });
    if (!categoryExists) {
      res.status(400).json({
        message: "Failed to add business: specified category does not exist.",
      });
      return;
    }
    const newBusiness = new Business(business);
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(500).json({
      message: "Server error while adding business.",
      error: (err as Error).message,
    });
  }
};

export const getBusiness: RequestHandler = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business) {
      res.json(business);
    } else {
      res.status(404).send("Business not found");
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching business", error: err });
  }
};

export const getBusinessesByCategory: RequestHandler = async (req, res) => {
  try {
    const filteredBusinesses = await Business.find({
      category: req.params.category.toLowerCase(),
    });
    res.json(filteredBusinesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses by category", error: err });
  }
};

export const getBusinessesByDate: RequestHandler = async (req, res) => {
  try {
    const slots = await Booking.find({
      businessId: req.params.id,
      date: new Date(req.params.date),
    });
    res.json(slots);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching bookings for the specified date and business",
      error: err,
    });
  }
};

export const updateBusiness: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const business = await Business.findById(id);
    if (!business) {
      res.status(404).json({ message: "Business not found" });
      return;
    }
    Object.assign(business, updatedData);
    const savedBusiness = await business.save();
    res.status(200).json(savedBusiness);
  } catch (err) {
    res.status(500).json({
      message: "Server error while updating business.",
      error: (err as Error).message,
    });
  }
};

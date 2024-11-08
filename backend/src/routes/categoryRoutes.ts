import express, { RequestHandler} from "express";
import Category from "../models/Category";

const router = express.Router();

const getCategories: RequestHandler = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
};

router.get("/", getCategories);

const createCategory: RequestHandler = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({
      message: "Error creating category",
      error: (err as Error)?.message ?? err,
    });
  }
};

router.post("/", createCategory);

export default router;

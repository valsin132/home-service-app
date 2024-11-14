import { RequestHandler } from "express";
import { User } from "../models/User";
import generateToken from "../utils/password";

export const register: RequestHandler = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Error registering new user.",
      error: (err as Error).message,
    });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please provide email and password" });
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }
    if (!(await user.isCorrectPassword(password))) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }
    const token = generateToken({ id: user._id });
    const userWithoutPassword = await User.findById(user._id).select("-password");
    res.status(200).json({ status: "success", token, user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ message: "Error logging in.", error: (err as Error).message });
  }
};

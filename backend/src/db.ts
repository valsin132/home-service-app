import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.VITE_PORT ?? 5000;

const connectToDb = async () => {
  try {
    const url = process.env.VITE_MONGO_URI;
    if (url === undefined) return;
    await mongoose.connect(url);
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("Could not connect to the database", err);
    process.exit(1);
  }
};

export { connectToDb, PORT };

import mongoose, { Document, Types } from "mongoose";

export interface IBusiness extends Document {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: { url: string }[];
}

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Business", businessSchema);

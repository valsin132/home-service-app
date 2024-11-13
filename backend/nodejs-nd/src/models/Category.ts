import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    hex: {
      type: String,
      default: "#FFFFFF",
    },
  },
  icon: {
    url: {
      type: String,
      default: "http://example.com/default-icon.png",
    },
  },
});

export default mongoose.model("Category", categorySchema);

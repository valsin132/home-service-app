import mongoose, { Document, Types } from "mongoose";

export interface IBooking extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId; // Changed this to store the user ID
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: "confirmed" | "pending" | "cancelled";
}

const bookingSchema = new mongoose.Schema<IBooking>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Ensure this matches the User model
    required: true,
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business", // Make sure "Business" matches the name of the model you exported
    required: true,
  },
  date: {
    type: Date,
    required: [true, "field is required. e.g. 2022-04-28"],
  },
  time: {
    type: String,
    required: [true, "field is required. e.g. 14:00"],
  },
  userEmail: {
    type: String,
    required: [true, "field is required."],
    validate: {
      validator: function (email: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: (props: { value: any }) => `${props.value} is not a valid email!`,
    },
  },
  userName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: [true, "Booking status is required."],
    enum: {
      values: ["confirmed", "pending", "cancelled"],
      message: "{VALUE} is not supported",
    },
  },
});

export default mongoose.model("Booking", bookingSchema);

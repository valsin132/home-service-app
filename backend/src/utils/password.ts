import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const expiresIn = "90d";

const generateToken = (payload: { id: Types.ObjectId }) => {
  const token = jwt.sign(payload, process.env.VITE_JWT_SECRET!, { expiresIn });
  return token;
};

export default generateToken;
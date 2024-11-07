import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const expiresIn = process.env.JWT_EXPIRATION;

const generateToken = (payload: { id: Types.ObjectId }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });
  return token;
};

export default generateToken;
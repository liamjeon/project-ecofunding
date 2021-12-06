import mongoose from "mongoose";
import { useVirtualId } from "./index.js";

const { Schema } = mongoose;
const FundingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  targetPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
});

useVirtualId(FundingSchema);
export const Funding = mongoose.model("Funding", FundingSchema);

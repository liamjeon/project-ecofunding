import mongoose from "mongoose";
import { useVirtualId, useFullDate } from "../utils/schema.js";

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
  //0원이 될 수 없도록 만들어야됨
  targetPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    required: true,
  },
  rawDate: {
    type: Date,
    default: Date.now,
  },
  nickname: {
    type: String,
  },
  percent: {
    type: Number,
    default: 0,
  },
});

useVirtualId(FundingSchema);
useFullDate(FundingSchema);
export default mongoose.model("Funding", FundingSchema);

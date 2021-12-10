import Mongoose from "mongoose";
import { useGapDate, toJsonVirtuals } from "../utils/schema.js";

//comment schema definition
const commentSchema = new Mongoose.Schema(
  {
    comment: { type: String, required: true },
    itemId: { type: String, required: true },
    nickname: { type: String, required: true },
    rawDate: { type: Date, required: true },
  },
  { timestamps: true }
);
//
useGapDate(commentSchema);
toJsonVirtuals(commentSchema);
//To use our schema definition, we need to convert our schema into a Model we can work with.
const Comment = Mongoose.model("Comment", commentSchema);

export async function getByitemId(itemId) {
  return Comment.find({ itemId });
}

export async function create(itemId, nickname, comment) {
  return new Comment({
    itemId,
    comment,
    nickname,
    rawDate: new Date(),
  }).save();
}

export async function update(commentId, comment) {
  return Comment.findByIdAndUpdate(commentId, { comment }, { returnOriginal: false });
}

export async function remove(commentId) {
  return Comment.findByIdAndDelete(commentId);
}

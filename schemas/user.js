import mongoose from "mongoose";

const { Schema } = mongoose;
const UsersSchema = new Schema({
  loginId: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  point: { type: Number, required: true },
});

// userId라는 이름으로 _id 사용
UsersSchema.virtual("userId").get(function () {
  return this._id.toHexString();
});
UsersSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model("User", UsersSchema);

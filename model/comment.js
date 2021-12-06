import Mongoose from "mongoose";

//comment schema definition
const commentSchema = new Mongoose.Schema(
  {
    comment: { type: String, required: true },
    itemId: { type: String, required: true },
    nickname: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

//To use our schema definition, we need to convert our schema into a Model we can work with.
const Comment = Mongoose.model("Comment", commentSchema);

export async function getByitemId(itemId) {
  return Comment.find({ itemId });
}

export async function create(itemId, comment) {
  //Todo
  //const userId = req.userId; //인증 미들웨어에서 req에 userId 추가 예정
  const nickname = "liam";

  return new Comment({
    itemId,
    comment,
    nickname,
    date: new Date(),
  }).save();
}

export async function update(commentId, comment) {
  return Comment.findByIdAndUpdate(
    commentId,
    { comment },
    { returnOriginal: false }
  );
}

export async function remove(commentId){
  return Comment.findByIdAndDelete(commentId);
}

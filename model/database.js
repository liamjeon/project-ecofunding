import Mongoose from "mongoose";

const url =
  "mongodb+srv://liam:liam@cluster0.2c7mj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export async function connectDB() {
  return Mongoose.connect(url);
}

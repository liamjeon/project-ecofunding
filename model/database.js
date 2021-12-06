import Mongoose from "mongoose";

const url =
  "mongodb+srv://liam:1234@cluster0.dtwor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export async function connectDB(){
    return Mongoose.connect(url);
}

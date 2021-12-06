import { Mongoose } from 'mongoose';

//comment schema 정의
const commentSchema = new Mongoose.Schema({
    text: {type: String, required: true},

})
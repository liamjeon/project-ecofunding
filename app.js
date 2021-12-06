import express from 'express';
import 'express-async-errors';
// import commentRouter from './controller/comment.js';
import path from 'path';
import { connectDB } from './model/database.js';

const app = express();

app.use(express.json());
// app.use("/comment", commentRouter);

app.use((req, res, next)=>{
  res.sendStatus(404);
})
app.use((error, req, res, next)=>{
  console.error(error);
  res.sendStatus(500);
});

connectDB().then(()=>{
  console.log('mongoose init');
  const server = app.listen(3000);
}).catch(console.error);

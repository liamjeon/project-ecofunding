import express from "express";
import itemRouter from "./item.js";
import commentRouter from "./comment.js";
import userRouter from "./user.js";
import multer from "multer";
import path from 'path';
import Mongoose from 'mongoose';
import {upload} from '../middleware/upload.js'

const router = express.Router();

router.use("/item", itemRouter);
router.use("/item", commentRouter);
router.use("/auth", userRouter);

router.post("/image", upload.single("image"), (req, res) => {
    res.status(201).json("성공");
});

export default router;

import express from "express";
import itemRouter from "./item.js";
import commentRouter from "./comment.js";
import userRouter from "./user.js";

const router = express.Router();

router.use("/item", itemRouter);
router.use("/comment", commentRouter);
router.use("/auth", userRouter);

export default router;

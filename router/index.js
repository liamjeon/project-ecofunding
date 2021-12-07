import express from "express";
import itemRouter from "./item.js";
import commentRouter from "./comment.js";

const router = express.Router();

router.use("/item", itemRouter);
router.use("/comment", commentRouter);

export default router;

import express from "express";
import itemRouter from "./item.js";

const router = express.Router();

router.use("/item", itemRouter);

export default router;

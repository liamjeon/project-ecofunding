import express from "express";
import "express-async-errors";
import * as commentController from "../controller/comment.js";
import isAuth from "../middleware/auth.js";

const router = express.Router();

//GET /comment/:itemId
router.get("/:itemId/comment", commentController.getComment);

//POST /comment
router.post("/:itemId/comment", isAuth, commentController.createComment);

//PUT /comment/:commentId
router.put("/:itemId/comment/:commentId", isAuth, commentController.updateComment);

//DELETE /comment/:commentId
router.delete("/:itemId/comment/:commentId", isAuth, commentController.deleteComment);

export default router;
import express from "express";
import "express-async-errors";
import * as commentController from "../controller/comment.js";

const router = express.Router();

//GET /comment/:itemId
router.get('/:itemId', commentController.getComment);

//POST /comment
router.post('/:itemId', commentController.createComment)

//PUT /comment/:commentId
router.put('/:commentId', commentController.updateComment)

//DELETE /comment/:commentId
router.delete('/:commentId', commentController.deleteComment)

export default router;
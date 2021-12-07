import * as commentRepository from "../model/comment.js";

export async function createComment(req, res, next) {
  const itemId = req.params.itemId;
  const { comment } = req.body;
  const result = await commentRepository.create(itemId, comment);

  console.log(result);
  // return res.status(201).json(result);
  return res.status(201).json({"ok":"true", "message":"등록성공"});
}

export async function getComment(req, res, next) {
  const itemId = req.params.itemId;
  const result = await commentRepository.getByitemId(itemId);

  console.log(result);
  return res.status(200).json(result);
}

export async function updateComment(req, res, next) {
  const commentId = req.params.commentId;
  const { comment } = req.body;
  const result = await commentRepository.update(commentId, comment);

  console.log(result);
  return res.status(201).json(result);
}

export async function deleteComment(req, res, next){
    const commentId = req.params.commentId;
    const result = await commentRepository.remove(commentId);

    console.log(result);
    return res.status(200).json(result);
}

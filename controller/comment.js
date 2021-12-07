import * as commentRepository from "../model/comment.js";

export async function createComment(req, res, next) {
  const itemId = req.params.itemId;
  const { comment } = req.body;
  const nickname = res.locals.user.nickname;

  try {
    const result = await commentRepository.create(itemId, nickname, comment);
    console.log(result);
    return res.status(201).json({ ok: "true", message: "등록성공" });
  } catch (error) {
    return res.status(404).json({ ok: "false", message: "등록실패" });
  }
}

export async function getComment(req, res, next) {
  const itemId = req.params.itemId;
  try {
    const result = await commentRepository.getByitemId(itemId);
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return res.sendStatus(404);
  }
}

export async function updateComment(req, res, next) {
  const commentId = req.params.commentId;
  const { comment } = req.body;
  try {
    const result = await commentRepository.update(commentId, comment);
    console.log(result);
    return res.status(201).json({ ok: "true", message: "수정 성공" });
  } catch (error) {
    return res.status(404).json({ ok: "false", message: "수정 성공" });
  }
}

export async function deleteComment(req, res, next) {
  const commentId = req.params.commentId;
  try {
    const result = await commentRepository.remove(commentId);
    console.log(result);
    return res.status(200).json({ ok: "true", message: "삭제 성공" });
  } catch (error) {
    return res.status(404).json({ false: "true", message: "삭제 실패" });
  }
}

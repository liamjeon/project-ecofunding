import * as commentRepository from "../model/comment.js";

export async function createComment(req, res, next) {
  const itemId = req.params.itemId;
  console.log(req.params);
  const { comment } = req.body;
  const nickname = "테스트아이디";
  // const nickname = res.locals.user.nickname;

  try {
    const result = await commentRepository.create(itemId, nickname, comment);
    console.log(result);
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(404);
  }
}

export async function getComment(req, res, next) {
  //Todo
  //날짜순으로 sorting 해야함
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
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
}

export async function deleteComment(req, res, next) {
  const commentId = req.params.commentId;
  try {
    const result = await commentRepository.remove(commentId);
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
}

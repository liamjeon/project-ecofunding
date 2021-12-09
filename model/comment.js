import Comment from "../schemas/comment.js";
import SQ from "sequelize";
const Sequelize = SQ.Sequelize;

//Todo: Item model Import
export async function getByitemId(itemId) {
  return Comment.findAll({ where: { itemId } });
}


//Todo
//Comment & Item 연결 ==> Comment model에 ItemId가 추가될것
// Comment.belongto(Item)
export async function create(itemId, nickname, comment) {
  return Comment.create({
    itemId,
    comment,
    nickname,
    rawDate: new Date(),
  });
}


export async function update(commentId, comment) {
  return Comment.findByPk(commentId, )
  // return Comment. (
  //   commentId,
  //   { comment },
  //   { returnOriginal: false }
  // );
}

export async function remove(commentId) {
  // return Comment.findByIdAndDelete(commentId);
}

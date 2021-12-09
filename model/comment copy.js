import Comment from "../schemas/comment.js";
import SQ from "sequelize";
const Sequelize = SQ.Sequelize;

//Todo: Item model Import

const INCLUDE_ITEM = {
  attributes: [
    "id",
    "comment",
    "rawDate",
    "itemId",
    [Sequelize.col("item.nickname"), "nickname"],
  ],
  include: {
    // model: Item, //Todo: Item model Import
    attributes: [],
  },
};
const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export async function getByitemId(itemId) {
  return Comment.findAll({
    ...INCLUDE_ITEM,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_ITEM.include, //기존 INCLUDE_ITEM.include 을 유지하면서
      where: { itemId }, //itemId 조건 추가
    },
  }).then((data) => {
    console.log(data);
    return data;
  });

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

import Image from "../schemas/image.js";
import Funding from "../schemas/image.js";
import SQ from "sequelize";
const Sequelize = SQ.Sequelize;

//Todo: Item model Import

Image.belongsTo(Funding);
const INCLUDE_ITEM = {
  attributes: ["id", "url"],
  include: {
    // model: Item, //Todo: Item model Import
    attributes: [],
  },
};
const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export async function getItems() {
  const image = Image.findAll({
    ...INCLUDE_ITEM,
    ...ORDER_DESC,
    // include: {
    //   ...INCLUDE_ITEM.include, //기존 INCLUDE_ITEM.include 을 유지하면서
    // where: { itemId }, //itemId 조건 추가
    // },
  });
  return image;
}

export async function postImage(url) {
  return Image.create({
    url,
  });
}

import { buyItemCalculator, buyItemPercentCalculator } from "../utils/price.js";

//test
import Funding from "../schemas/funding.js";
import User from "../schemas/user.js";
import SQ from "sequelize";
const Sequelize = SQ.Sequelize;

//Todo: Item model Import

// Funding.belongsTo(User);

const INCLUDE_ITEM = {
  // , "userId"
  attributes: ["id", "title", "thumbnail", "price", "targetPrice", "totalPrice", "content", "percent", "rawDate"],
  include: {
    // model: Item, //Todo: Item model Import
    attributes: [],
  },
};
const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export async function getItems() {
  const fundings = Funding.findAll({
    ...INCLUDE_ITEM,
    ...ORDER_DESC,
    // include: {
    //   ...INCLUDE_ITEM.include, //기존 INCLUDE_ITEM.include 을 유지하면서
    // where: { itemId }, //itemId 조건 추가
    // },
  });
  return fundings;
}

export async function getItem(itemId) {
  try {
    const funding = await Funding.findById(itemId).exec();
    return funding;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function createItem({ title, images, thumbnail, price, targetPrice, content }) {
  return Funding.create({ title, images, thumbnail, price, targetPrice, content });
}

export async function updateItem(itemId, title, images, thumbnail, content) {
  try {
    await Funding.updateOne({ _id: itemId }, { $set: { title, images, thumbnail, content } }).exec();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function deleteItem(itemId) {
  try {
    await Funding.deleteOne({ _id: itemId }).exec();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function priceUpdateItem(itemId, price, totalPrice, targetPrice) {
  try {
    const newTotalPrice = buyItemCalculator(price, totalPrice);
    const newPercent = buyItemPercentCalculator(newTotalPrice, targetPrice);
    await Funding.updateOne({ _id: itemId }, { $set: { totalPrice: newTotalPrice, percent: newPercent } }).exec();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function getRankingItems() {
  try {
    const fundings = await Funding.find({}).sort({ percent: -1, date: -1 }).limit(5).exec();
    return fundings;
  } catch (error) {
    console.log(error);
    return;
  }
}

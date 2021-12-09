import { buyItemCalculator, buyItemPercentCalculator } from "../utils/price.js";
import Funding from "../schemas/funding.js";
import Item from "../schemas/funding.js"
//test

export async function getItems() {
  try {
    const fundings = await Funding.find({}).sort("-rawDate").exec();
    return fundings;
  } catch (error) {
    console.log(error);
    return;
  }
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

export async function createItem({ title, images, thumbnail, price, targetPrice, content, nickname }) {
  try {
    await Funding.create({ title, images, thumbnail, price, targetPrice, content, nickname });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
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

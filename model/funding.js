import mongoose from "mongoose";
import Funding from "../schemas/funding.js";

export async function getItems() {
  try {
    const fundings = await Funding.find({}).sort("-date").exec();
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

export async function createItem(title, images, thumbnail, price, targetPrice, content, userId) {
  try {
    await Funding.create({ title, images, thumbnail, price, targetPrice, content, userId });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function updateItem(itemId, title, images, thumbnail, price, targetPrice, content) {
  try {
    await Funding.updateOne({ _id: itemId }, { $set: { title, images, thumbnail, price, targetPrice, content } }).exec();
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

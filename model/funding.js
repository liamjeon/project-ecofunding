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

export async function getItem(id) {
  try {
    const funding = await Funding.findById(id).exec();
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

export async function updateItem(id, title, images, thumbnail, price, targetPrice, content) {
  try {
    await Funding.updateOne({ _id: id }, { $set: { title, images, thumbnail, price, targetPrice, content } }).exec();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function deleteItem(id) {
  try {
    await Funding.deleteOne({ _id: id }).exec();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

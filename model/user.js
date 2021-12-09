import Users from "../schemas/user.js";
import { buyUserCalculator } from "../utils/price.js";
import SQ from "sequelize";
const Sequelize = SQ.Sequelize;

export async function findDup(input) {
  return Users.findOne({ where: { title: input } });
}

export async function createUser(loginId, hashPassword, nickname) {
  return Users.create({
    loginId,
    password: hashPassword,
    nickname,
    point: 100000,
  });
}

export async function findById(id) {
  return Users.findById(id);
}

export async function pointUpdateUser(id, point, price) {
  try {
    const newPoint = buyUserCalculator(price, point);
    await Users.updateOne({ _id: id }, { $set: { point: newPoint } }).exec();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

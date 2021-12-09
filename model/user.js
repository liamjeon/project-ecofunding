import Users from "../schemas/user.js";
import { buyUserCalculator } from "../utils/price.js";
import SQ from "sequelize";
const Sequelize = SQ.Sequelize;

export async function findDup(input) {
  return Users.findOne({ where: input });
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
  return Users.findByPk(id);
}

export async function pointUpdateUser(id, point, price) {
  try {
    const newPoint = buyUserCalculator(price, point);
    await Users.update({ point: newPoint }, { where: { id } });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

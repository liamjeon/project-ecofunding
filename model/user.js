import Users from "../schemas/user.js";

export async function findDup(input) {
  return Users.findOne(input);
}

export async function createUser(loginId, hashPassword, nickname) {
  return new Users({
    loginId,
    password: hashPassword,
    nickname,
    point: 100000,
  }).save();
}

export async function findById(id) {
  return Users.findById(id);
}

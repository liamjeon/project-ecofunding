import Users from "../schemas/user.js";

export async function findDup(input) {
  return Users.findOne(input);
}

export async function createUser(loginId, password, nickname) {
  return new Users({ loginId, password, nickname, point: 100000 }).save();
}

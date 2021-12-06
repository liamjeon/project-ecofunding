import {} from "express-async-errors";
import jwt from "jsonwebtoken";
import * as userModel from "../model/user.js";
import bcrypt from "bcrypt";

// hash const
const SECRET_KEY = "ecofunding";
const EXPIRED = "1d";
const SALT = 10;

// loginId dup check
export async function checkLoginId(req, res) {
  const loginId = req.body;
  const checkId = await userModel.findDup(loginId);
  if (checkId) {
    res.status(400).send({
      message: "이미 사용중인 아이디 입니다.",
      result: "fail",
    });
  } else {
    res.status(200).send({
      message: "사용이 가능한 아이디 입니다.",
      result: "success",
    });
  }
}

// nickname dup check
export async function checkNickname(req, res) {
  const nickname = req.body;
  const checkNick = await userModel.findDup(nickname);
  if (checkNick) {
    res.status(400).send({
      message: "이미 사용중인 닉네임 입니다.",
      result: "fail",
    });
  } else {
    res.status(200).send({
      message: "사용이 가능한 닉네임 입니다.",
      result: "success",
    });
  }
}

// signup
export async function signup(req, res) {
  const { loginId, password, nickname } = req.body;
  const hashPassword = await bcrypt.hash(password, SALT);
  const user = await userModel.createUser(loginId, hashPassword, nickname);
  res.status(201).send({
    message: "회원가입 성공",
  });
}

//login
export async function login(req, res) {
  const { loginId, password } = req.body;
  const userCheck = await userModel.findDup({ loginId });
  const validPassword = await bcrypt.compare(password, userCheck.password); //bcrypt는 단방향 암호화라서 복화하가 불가능
  if (!validPassword) {
    res.status(400).send({ message: "아이디 또는 패스워드를 확인해주세요" });
    return;
  }
  const token = jwt.sign({ userId: userCheck.userId }, SECRET_KEY, {
    expiresIn: EXPIRED,
  });
  res.status(201).send({ token });
}

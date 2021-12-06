import {} from "express-async-errors";
import jwt from "jsonwebtoken";
import * as userModel from "../model/user.js";

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

export async function checkNickname(req, res) {
  const nickname = req.body;
  console.log(nickname);
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

export async function signup(req, res) {
  const { loginId, password, nickname } = req.body;
  console.log(loginId);
  const user = await userModel.createUser(loginId, password, nickname);
  res.status(201).send({
    message: "회원가입 성공",
  });
}

export async function login(req, res) {
  const { loginId, password } = req.body;
  console.log(loginId);
  const userCheck = await userModel.findDup({ loginId, password });
  if (!userCheck) {
    res.status(400).send({ message: "닉네임 또는 패스워드를 확인해주세요" });
    return;
  }
  const token = jwt.sign({ userId: userCheck.userId }, "ecofunding");
  res.send({ token });
}

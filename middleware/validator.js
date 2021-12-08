import { body, validationResult } from "express-validator";

const check = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  } else {
    return res.status(400).json({ result: "fail" });
  }
};

export const idValidator = [
  body("loginId")
    .trim()
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/), //소문자는 필수, 대문자, 숫자 가능
  check,
];

export const nickValidator = [
  body("nickname")
    .trim()
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/), //소문자는 필수, 대문자, 숫자 가능
  check,
];

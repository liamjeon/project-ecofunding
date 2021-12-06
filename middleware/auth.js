import jwt from "jsonwebtoken";
import Users from "../schemas/user.js";

// 로그인되어있는 토큰을 가져와 유저정보를 담아주는 middleware
export default (req, res, next) => {
  const { authorization } = req.headers; // Token은 headers에 담겨옴
  const [tokenType, tokenValue] = authorization.split(" "); // Token을 분리해서 배열에 할당

  if (tokenType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }

  try {
    const { userId } = jwt.verify(tokenValue, "ecofunding"); // 토큰 인증 후 userId 할당
    Users.findById(userId) //User DB에서 데이터 찾기
      .exec()
      .then((user) => {
        res.locals.user = user; // 찾은 데이터를 res.locas.user에 할당
        next();
      });
  } catch (error) {
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }
};

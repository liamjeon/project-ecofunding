import express from "express";
import "express-async-errors";
import * as userController from "../controller/user.js";
import { idValidator, nickValidator } from "../middleware/validator.js";

const router = express.Router();

// loginId dup check api
router.post("/loginId", idValidator, userController.checkLoginId);

// nickname dup check api
router.post("/nickname", nickValidator, userController.checkNickname);

// signup api
router.post("/signup", userController.signup);

// login api
router.post("/login", userController.login);

export default router;

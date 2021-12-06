import express from "express";
import "express-async-errors";
import * as userController from "../controller/user.js";

const router = express.Router();

// loginId dup check api
router.post("/auth/loginId", userController.checkLoginId);

// nickname dup check api
router.post("/auth/nickname", userController.checkNickname);

// signup api
router.post("/auth/signup", userController.signup);

// login api ....
router.post("/login", userController.login);

export default router;

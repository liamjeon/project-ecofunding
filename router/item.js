import express from "express";
import * as fundingController from "../controller/funding.js";
import isAuth from "../middleware/auth.js";

const router = express.Router();

router.get("/", fundingController.getFundings);
router.get("/:itemId", fundingController.getFunding);
router.post("/", isAuth, fundingController.postFunding);
router.put("/:itemId", isAuth, fundingController.updateFunding);
router.delete("/:itemId", isAuth, fundingController.deleteFunding);

export default router;

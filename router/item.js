import express from "express";
import * as fundingController from "../controller/funding.js";
const router = express.Router();

router.get("/", fundingController.getFundings);
router.get("/:itemId", fundingController.getFunding);
router.post("/", fundingController.postFunding);
router.put("/:itemId", fundingController.updateFunding);
router.delete("/:itemId", fundingController.deleteFunding);

export default router;

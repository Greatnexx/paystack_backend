import express from "express";
import { initiatePayment } from "../controllers/payment.controller.js";
import { getAllPayments } from "../controllers/getAll.controller.js";

const router = express.Router();

router.post("/initiate", initiatePayment);
router.get("/initiate", getAllPayments);

export default router;
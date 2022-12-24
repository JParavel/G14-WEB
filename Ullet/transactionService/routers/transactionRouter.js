import express from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const transactionRouter = express.Router();

//http://host-name:port/..

transactionRouter.post("/", verifyToken, createTransaction);
transactionRouter.get("/list", verifyToken, getTransactions);

export default transactionRouter;
